import { useEffect, useRef } from "react";

import { useThemeStore } from "@/lib/theme/theme.store";
import type { Theme } from "@/lib/theme/types";
import { cn } from "@/lib/utils";

const themes: Theme[] = ["system", "light", "dark", "terminal", "arcade"];

export function ThemeSwitcher() {
  const { theme: activeTheme, setTheme } = useThemeStore();
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  // details-based daisyUI dropdowns don't close on outside interaction by themselves
  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      const dropdown = dropdownRef.current;
      if (dropdown?.open && event.target instanceof Node && !dropdown.contains(event.target)) {
        dropdown.open = false;
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      const dropdown = dropdownRef.current;
      if (event.key === "Escape" && dropdown?.open) {
        dropdown.open = false;
        dropdown.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details
      ref={dropdownRef}
      className="dropdown dropdown-end"
    >
      <summary
        className="btn btn-ghost btn-sm border-base-300 border"
        aria-label={`Theme: ${activeTheme}`}
      >
        {activeTheme}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="dropdown-content menu bg-base-200 border-base-300 z-10 mt-1 w-36 border p-2 shadow-sm">
        {themes.map((theme) => (
          <li key={theme}>
            <button
              type="button"
              className={cn(
                "hover:bg-base-300",
                theme === activeTheme && "bg-base-content text-base-100 hover:bg-base-content"
              )}
              aria-current={theme === activeTheme ? "true" : undefined}
              onClick={() => {
                setTheme(theme);
                if (dropdownRef.current) {
                  dropdownRef.current.open = false;
                }
              }}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
