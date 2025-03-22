"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, themes, ...props }: ThemeProviderProps & { themes?: string[] }) {
  return (
    <NextThemesProvider {...props} themes={themes}>
      {children}
    </NextThemesProvider>
  )
}

