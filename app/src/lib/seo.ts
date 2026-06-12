const SITE_NAME = "algo·arcade";
const DEFAULT_DESCRIPTION =
  "An arcade of interactive algorithm visualisations, hand-written from scratch — no libraries, no shortcuts.";

interface SeoOptions {
  title?: string;
  description?: string;
}

export function seo({ title, description = DEFAULT_DESCRIPTION }: SeoOptions = {}) {
  const pageTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;

  return [
    { title: pageTitle },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description }
  ];
}
