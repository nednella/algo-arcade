import { createFileRoute } from "@tanstack/react-router";

import { ExhibitPlaceholder } from "@/components/exhibit-placeholder";
import { NotFound } from "@/components/not-found";
import { exhibits } from "@/content/exhibits";

export const Route = createFileRoute("/exhibit/$slug")({
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
