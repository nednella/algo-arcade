import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exhibit")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col px-6 py-10">
      <nav>
        <Link
          to="/"
          className="text-base-content/60 hover:text-base-content text-sm"
        >
          ← algo·arcade
        </Link>
      </nav>
      <div className="flex-1 pt-8">
        <Outlet />
      </div>
    </div>
  );
}
