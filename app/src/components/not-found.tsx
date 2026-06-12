import { Link } from "@tanstack/react-router";

import { Crosshairs } from "@/components/crosshairs";

export function NotFound() {
  return (
    <div className="flex w-full flex-1 items-center justify-center py-16">
      <div className="border-base-300 bg-base-100 relative w-full max-w-md border p-10 text-center sm:p-12">
        <span
          aria-hidden="true"
          className="text-base-content/40"
        >
          <Crosshairs />
        </span>
        <h1 className="font-display text-primary text-5xl">404</h1>
        <p className="text-base-content/70 mt-4 text-[15px]">{"There's nothing at this address."}</p>
        <Link
          to="/"
          className="btn btn-primary mt-8 font-mono"
        >
          ← Back to the arcade
        </Link>
      </div>
    </div>
  );
}
