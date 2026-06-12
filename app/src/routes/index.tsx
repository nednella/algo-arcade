import { createFileRoute } from "@tanstack/react-router";

import { LandingFooter } from "@/components/landing/footer";
import { ExhibitGallery } from "@/components/landing/gallery";
import { LandingHero } from "@/components/landing/hero";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col">
        <LandingHero />
        <ExhibitGallery />
      </main>
      <LandingFooter />
    </>
  );
}
