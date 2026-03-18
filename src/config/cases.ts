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
      "Building a marketplace that connects parents with kids’ party venues",
    tags: ["B2B2C", "Marketplace"],
    focus: "Booking configuration / pricing transparency / venue admin tools."
  },
  {
    slug: "reflection-driven-mood-tracker",
    title:
      "Turning a failing mood tracker into a reflection-driven product concept",
    tags: ["R&D", "AI"],
    focus: "Engagement loops / reflective check-ins / AI-supported insights."
  },
  {
    slug: "data-heavy-workflows",
    title: "Designing actionable workflows in a data-heavy platform",
    tags: ["B2B", "SaaS"],
    focus:
      "Admin dashboard / complex data tables / delivery process improvements / design mentorship."
  }
];

