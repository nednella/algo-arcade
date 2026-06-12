import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { NotFound } from "@/components/not-found";
import { SiteHeader } from "@/components/site-header";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  component: () => (
    <>
      <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col px-6">
        <SiteHeader />
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
});
