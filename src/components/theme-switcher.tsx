import { useThemeStore } from "@/lib/theme/theme.store";
import type { Theme } from "@/lib/theme/types";

const themes: Theme[] = ["system", "light", "dark", "synthwave"];

export function ThemeSwitcher() {
  const { theme: activeTheme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm"
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
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-10 mt-1 w-36 p-2 shadow-sm"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <button
              type="button"
              className={theme === activeTheme ? "menu-active" : ""}
              onClick={(event) => {
                setTheme(theme);
                event.currentTarget.blur(); // daisyUI dropdowns are focus-based; blurring closes the menu on selection
              }}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
