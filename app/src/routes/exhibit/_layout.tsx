import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/container";

export const Route = createFileRoute("/exhibit")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <main className="w-full flex-1">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
