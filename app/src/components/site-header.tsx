import { Link } from "@tanstack/react-router";

import { Container } from "@/components/container";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  return (
    <header className="border-base-300 bg-base-100/80 h-header sticky top-0 z-20 w-full border-b backdrop-blur">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-sm tracking-wide"
        >
          ALGO·<span className="text-primary">ARCADE</span>
        </Link>
        <ThemeSwitcher />
      </Container>
    </header>
  );
}
