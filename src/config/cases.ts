export type CaseMeta = {
  slug: string;
  title: string;
  tags: string[];
  focus: string;
};

// Shared case metadata for navigation and cards.
export const CASES: CaseMeta[] = [
  {
    slug: "kids-party-marketplace",
    title:
      "Building a Marketplace That Connects Parents With Kids’ Party Venues",
    tags: ["B2B2C", "Marketplace"],
    focus: "Booking configuration / pricing transparency / venue admin tools."
  },
  {
    slug: "reflection-driven-mood-tracker",
    title:
      "Turning a Failing Mood Tracker Into a Reflection-Driven Product Concept",
    tags: ["R&D", "AI"],
    focus: "Engagement loops / reflective check-ins / AI-supported insights."
  },
  {
    slug: "data-heavy-workflows",
    title: "Structuring Design Decisions and Actionable Workflows in a Data-Heavy Platform",
    tags: ["B2B", "SaaS"],
    focus:
      "Admin dashboard / complex data tables / delivery process improvements / design mentorship."
  },
  {
    slug: "leadership-and-culture",
    title: "Building a Design Function From Zero in a Service Company",
    tags: ["Leadership", "Culture"],
    focus:
      "Team autonomy / high-quality delivery."
  }
];

