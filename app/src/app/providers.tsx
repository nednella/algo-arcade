import type { ReactNode } from "react";

import { ThemeProvider } from "@/lib/theme/theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <ThemeProvider />
    </>
  );
}
