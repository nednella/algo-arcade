import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Container } from "@/components/container";

export const Route = createFileRoute("/exhibit")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <main className="flex w-full flex-1 flex-col justify-center">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
