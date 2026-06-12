import { createFileRoute } from "@tanstack/react-router";

import { ExhibitPlaceholder } from "@/components/exhibit-placeholder";
import { NotFound } from "@/components/not-found";
import { exhibits } from "@/content/exhibits";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/exhibit/$slug")({
  head: ({ params }) => {
    const exhibit = exhibits.find((entry) => entry.slug === params.slug);
    return { meta: seo(exhibit ? { title: exhibit.title, description: exhibit.blurb } : { title: "Not found" }) };
  },
  component: RouteComponent
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const exhibit = exhibits.find((entry) => entry.slug === slug);

  if (!exhibit) {
    return <NotFound />;
  }

  return <ExhibitPlaceholder exhibit={exhibit} />;
}
