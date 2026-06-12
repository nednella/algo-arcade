import { Link } from "@tanstack/react-router";

import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  return (
    <header className="border-base-300 h-header flex items-center justify-between gap-4 border-b">
      <Link
        to="/"
        className="font-display text-sm tracking-wide"
      >
        ALGO·ARCADE
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
