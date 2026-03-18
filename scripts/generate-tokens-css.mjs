import fs from "node:fs/promises";
import path from "node:path";

const workspaceRoot = path.resolve(import.meta.dirname, "..", "..");
const figmaExportDir = path.join(workspaceRoot, "JSON");
const outFile = path.join(import.meta.dirname, "..", "src", "styles", "tokens.css");

const SOURCES = [
  path.join(figmaExportDir, "🧩 Primitives.json"),
  path.join(figmaExportDir, "Mode tokens.json"),
  path.join(figmaExportDir, "Breakpoints.json")
];

function stripEmoji(input) {
  return input.replace(/\p{Extended_Pictographic}/gu, "").trim();
}

function toKebab(input) {
  return stripEmoji(input)
    .replace(/['’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function round255(n) {
  return Math.round(Math.max(0, Math.min(1, n)) * 255);
}

function colorToCss(value) {
  const r = round255(value.r);
  const g = round255(value.g);
  const b = round255(value.b);
  const a = typeof value.a === "number" ? value.a : 1;
  if (a >= 0.999) {
    const hex = (x) => x.toString(16).padStart(2, "0");
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  }
  return `rgba(${r} ${g} ${b} / ${a})`;
}

function inferUnit(varName, type) {
  if (type !== "FLOAT") return null;
  const name = varName.toLowerCase();
  if (name.includes("font/") || name.includes("typography/")) return "px";
  if (name.includes("spacing/") || name.includes("space")) return "px";
  if (name.includes("radius/") || name.includes("raduis/") || name.includes("corner")) return "px";
  if (name.includes("width") || name.includes("height") || name.includes("maxwidth") || name.includes("minwidth"))
    return "px";
  return "px";
}

function formatPrimitiveValue(variable) {
  const { type, resolvedValuesByMode, valuesByMode, name } = variable;
  const modeId = Object.keys(resolvedValuesByMode ?? valuesByMode ?? {})[0];
  const resolved = resolvedValuesByMode?.[modeId]?.resolvedValue ?? valuesByMode?.[modeId];
  if (resolved == null) return null;

  if (type === "COLOR") return colorToCss(resolved);
  if (type === "STRING") return String(resolved);
  if (type === "FLOAT") {
    const unit = inferUnit(name, type);
    return `${resolved}${unit ?? ""}`;
  }
  return String(resolved);
}

function splitSegments(figmaName) {
  return stripEmoji(figmaName)
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);
}

function varNameFromSegments(segments, prefix = "") {
  const kebabs = segments.map(toKebab).filter(Boolean);
  return `--${[prefix, ...kebabs].filter(Boolean).join("-")}`;
}

function buildIdIndex(collections) {
  /** @type {Map<string, {name: string, segments: string[], type: string, cssVar: string, primitiveCss?: string}>} */
  const idx = new Map();

  for (const c of collections) {
    for (const v of c.variables ?? []) {
      const segments = splitSegments(v.name);
      const cssVar = varNameFromSegments(segments, c.name === "🧩 Primitives" ? "p" : "s");
      idx.set(v.id, { name: v.name, segments, type: v.type, cssVar });
    }
  }
  return idx;
}

function resolveAliasCssVar(valueByModeEntry, idIndex) {
  if (!valueByModeEntry || typeof valueByModeEntry !== "object") return null;
  if (valueByModeEntry.type !== "VARIABLE_ALIAS") return null;
  const target = idIndex.get(valueByModeEntry.id);
  return target?.cssVar ?? null;
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function headerComment() {
  const sources = SOURCES.map((p) => path.relative(workspaceRoot, p)).join(", ");
  return `/*\n  AUTO-GENERATED FILE — DO NOT EDIT.\n  Source: ${sources}\n  Run: npm run tokens (from /site)\n*/\n`;
}

async function main() {
  const [primitives, modeTokens, breakpoints] = await Promise.all(SOURCES.map(readJson));
  const collections = [primitives, modeTokens, breakpoints];
  const idIndex = buildIdIndex(collections);

  /** @type {string[]} */
  const lines = [];
  lines.push(headerComment());

  // 1) Primitives
  lines.push(":root {");
  lines.push("  /* primitives */");
  for (const v of primitives.variables ?? []) {
    const entry = idIndex.get(v.id);
    const cssValue = formatPrimitiveValue(v);
    if (!entry || cssValue == null) continue;
    lines.push(`  ${entry.cssVar}: ${cssValue};`);
  }
  lines.push("}");
  lines.push("");

  // 2) Semantic / mode tokens (Light only in current export)
  const modeId = Object.keys(modeTokens.modes ?? {})[0];
  const modeName = modeTokens.modes?.[modeId] ?? "light";
  const themeSelector = `[data-theme="${toKebab(modeName)}"]`;

  lines.push(`${themeSelector} {`);
  lines.push(`  /* semantic tokens (${modeName}) */`);
  for (const v of modeTokens.variables ?? []) {
    const entry = idIndex.get(v.id);
    if (!entry) continue;
    const rawValue = v.valuesByMode?.[modeId];
    const aliasVar = resolveAliasCssVar(rawValue, idIndex);
    if (aliasVar) {
      lines.push(`  ${entry.cssVar}: var(${aliasVar});`);
      continue;
    }
    const cssValue =
      v.type === "COLOR"
        ? colorToCss(v.resolvedValuesByMode?.[modeId]?.resolvedValue)
        : v.type === "FLOAT"
          ? `${v.resolvedValuesByMode?.[modeId]?.resolvedValue}${inferUnit(v.name, v.type) ?? ""}`
          : v.resolvedValuesByMode?.[modeId]?.resolvedValue;
    if (cssValue == null) continue;
    lines.push(`  ${entry.cssVar}: ${cssValue};`);
  }
  lines.push("}");
  lines.push("");

  // 3) Responsive tokens (Breakpoints collection modes: XL + SM)
  const bpModes = breakpoints.modes ?? {};
  const xlModeId = Object.entries(bpModes).find(([, n]) => toKebab(n) === "xl")?.[0];
  const smModeId = Object.entries(bpModes).find(([, n]) => toKebab(n) === "sm")?.[0];

  const xlMinWidth = 1280; // derived from your SM frameMaxWidth=1279

  if (smModeId && xlModeId) {
    lines.push(":root {");
    lines.push("  /* responsive tokens (mobile-first / SM) */");
    for (const v of breakpoints.variables ?? []) {
      const entry = idIndex.get(v.id);
      if (!entry) continue;
      const smValue = v.valuesByMode?.[smModeId];
      const smAliasVar = resolveAliasCssVar(smValue, idIndex);
      if (smAliasVar) {
        lines.push(`  ${entry.cssVar}: var(${smAliasVar});`);
        continue;
      }
      const resolved = v.resolvedValuesByMode?.[smModeId]?.resolvedValue;
      if (resolved == null) continue;
      const cssValue =
        v.type === "COLOR" ? colorToCss(resolved) : v.type === "FLOAT" ? `${resolved}${inferUnit(v.name, v.type)}` : resolved;
      lines.push(`  ${entry.cssVar}: ${cssValue};`);
    }
    lines.push("}");
    lines.push("");

    lines.push(`@media (min-width: ${xlMinWidth}px) {`);
    lines.push("  :root {");
    lines.push("    /* responsive tokens (XL overrides) */");
    for (const v of breakpoints.variables ?? []) {
      const entry = idIndex.get(v.id);
      if (!entry) continue;
      const xlValue = v.valuesByMode?.[xlModeId];
      const xlAliasVar = resolveAliasCssVar(xlValue, idIndex);
      if (xlAliasVar) {
        lines.push(`    ${entry.cssVar}: var(${xlAliasVar});`);
        continue;
      }
      const resolved = v.resolvedValuesByMode?.[xlModeId]?.resolvedValue;
      if (resolved == null) continue;
      const cssValue =
        v.type === "COLOR" ? colorToCss(resolved) : v.type === "FLOAT" ? `${resolved}${inferUnit(v.name, v.type)}` : resolved;
      lines.push(`    ${entry.cssVar}: ${cssValue};`);
    }
    lines.push("  }");
    lines.push("}");
    lines.push("");
  }

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, lines.join("\n"), "utf8");
  process.stdout.write(`Wrote ${path.relative(workspaceRoot, outFile)}\n`);
}

await main();

