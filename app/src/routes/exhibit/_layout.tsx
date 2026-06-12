import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exhibit")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <main className="flex w-full flex-1 flex-col py-10">
      <Outlet />
    </main>
  );
}
