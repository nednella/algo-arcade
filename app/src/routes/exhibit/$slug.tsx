import { createFileRoute } from "@tanstack/react-router";

import { ExhibitPlaceholder } from "@/components/exhibit-placeholder";
import { exhibits } from "@/content/exhibits";

export const Route = createFileRoute("/exhibit/$slug")({
  component: RouteComponent
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const exhibit = exhibits.find((entry) => entry.slug === slug);

  if (!exhibit) {
    return <p className="text-base-content/60 font-mono text-sm">no such exhibit.</p>;
  }

  return <ExhibitPlaceholder exhibit={exhibit} />;
}
