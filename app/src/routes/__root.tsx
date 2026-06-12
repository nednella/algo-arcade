import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { NotFound } from "@/components/not-found";
import { SiteHeader } from "@/components/site-header";
import { seo } from "@/lib/seo";

export const Route = createRootRoute({
  head: () => ({ meta: seo() }),
  notFoundComponent: NotFound,
  component: () => (
    <>
      <HeadContent />
      <div className="flex min-h-svh w-full flex-col">
        <SiteHeader />
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
});
