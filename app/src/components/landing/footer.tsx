import { Container } from "@/components/container";

export function LandingFooter() {
  return (
    <footer className="border-base-300 w-full border-t">
      <Container className="py-6 text-center">
        <a
          href="https://github.com/nednella"
          target="_blank"
          rel="noreferrer"
          className="text-base-content/60 hover:text-base-content font-mono text-[11px] tracking-wider transition-colors"
        >
          made by nednella ↗
        </a>
      </Container>
    </footer>
  );
}
