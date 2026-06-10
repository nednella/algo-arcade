import { ThemeProvider } from "@/lib/theme/theme-provider";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Readonly<Props>) {
  return (
    <>
      {children}
      <ThemeProvider />
    </>
  );
}
