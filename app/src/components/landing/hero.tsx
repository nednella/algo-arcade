import { Crosshairs } from "@/components/crosshairs";

export function LandingHero() {
  return (
    <section className="border-base-300 relative flex min-h-[calc(100svh_-_var(--spacing-header))] flex-col justify-center overflow-hidden border-b">
      <div className="absolute inset-0">
        <div className="bg-dotgrid mask-fade-b h-full w-full" />
      </div>
      <div className="relative py-16 sm:py-24">
        <div className="border-base-300 bg-base-100 relative mx-auto max-w-2xl border p-10 text-center sm:p-14">
          <span
            aria-hidden="true"
            className="text-base-content/40"
          >
            <Crosshairs />
          </span>
          <p className="text-base-content/60 font-mono text-xs [font-variant-ligatures:none]">
            <span className="text-primary">$</span>
            {" ./algo-arcade --boot"}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
            {"ALGO·ARCADE"}
            <span
              aria-hidden="true"
              className="animate-blink text-primary motion-reduce:animate-none"
            >
              {"_"}
            </span>
          </h1>
          <p className="text-base-content/70 mx-auto mt-5 max-w-md text-[15px] leading-relaxed">
            An arcade of interactive algorithms, written from scratch — no libraries, no shortcuts. Watch them think,
            poke their parameters, break things safely.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#exhibits"
              className="btn btn-primary font-mono"
            >
              ▶ browse exhibits
            </a>
            <a
              href="https://github.com/nednella/algo-arcade"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline border-base-300 font-mono font-normal"
            >
              github ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
