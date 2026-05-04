import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

// Carbon Design System color palette
const carbonColors = {
  // Carbon Blue palette
  blue: [
    "#edf5ff", // blue10
    "#d0e2ff", // blue20
    "#a6c8ff", // blue30
    "#78a9ff", // blue40
    "#4589ff", // blue50
    "#0f62fe", // blue60 - Primary
    "#0043ce", // blue70
    "#002d9c", // blue80
    "#001d6c", // blue90
    "#001141", // blue100
  ],
  // Carbon Gray palette
  gray: [
    "#f4f4f4", // gray10
    "#e0e0e0", // gray20
    "#c6c6c6", // gray30
    "#a8a8a8", // gray40
    "#8d8d8d", // gray50
    "#6f6f6f", // gray60
    "#525252", // gray70
    "#393939", // gray80
    "#262626", // gray90
    "#161616", // gray100
  ],
  // Carbon Green palette
  green: [
    "#defbe6", // green10
    "#a7f0ba", // green20
    "#6fdc8c", // green30
    "#42be65", // green40
    "#24a148", // green50
    "#198038", // green60
    "#0e6027", // green70
    "#054316", // green80
    "#022d0d", // green90
    "#071908", // green100
  ],
  // Carbon Red palette
  red: [
    "#fff1f1", // red10
    "#ffd7d9", // red20
    "#ffb3b8", // red30
    "#ff8a8f", // red40
    "#fa4d56", // red50
    "#da1e28", // red60
    "#a2191f", // red70
    "#750e13", // red80
    "#520408", // red90
    "#2d0709", // red100
  ],
  // Carbon Yellow palette
  yellow: [
    "#fcf4d6", // yellow10
    "#fddc69", // yellow20
    "#f1c21b", // yellow30
    "#d2a106", // yellow40
    "#b28600", // yellow50
    "#8e6a00", // yellow60
    "#684e00", // yellow70
    "#483700", // yellow80
    "#302400", // yellow90
    "#1c1400", // yellow100
  ],
};

const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "var(--font-ibm-plex-sans), IBM Plex Sans, system-ui, sans-serif",
  fontFamilyMonospace: "var(--font-ibm-plex-mono), IBM Plex Mono, monospace",
  defaultRadius: "sm",
  fontSizes: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    md: "1rem",      // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
  },
  colors: carbonColors,
  spacing: {
    xs: "0.25rem",   // 4px - Carbon spacing 01
    sm: "0.5rem",    // 8px - Carbon spacing 02
    md: "1rem",      // 16px - Carbon spacing 03
    lg: "1.5rem",    // 24px - Carbon spacing 04
    xl: "2rem",      // 32px - Carbon spacing 05
  },
  headings: {
    fontFamily: "var(--font-ibm-plex-sans), IBM Plex Sans, system-ui, sans-serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "2.625rem", lineHeight: "1.19" }, // 42px
      h2: { fontSize: "2rem", lineHeight: "1.25" },     // 32px
      h3: { fontSize: "1.5rem", lineHeight: "1.33" },   // 24px
      h4: { fontSize: "1.25rem", lineHeight: "1.4" },   // 20px
      h5: { fontSize: "1.125rem", lineHeight: "1.44" }, // 18px
      h6: { fontSize: "1rem", lineHeight: "1.5" },      // 16px
    },
  },
  other: {
    Carbon: {
      spacing01: "0.125rem",  // 2px
      spacing02: "0.25rem",   // 4px
      spacing03: "0.5rem",    // 8px
      spacing04: "1rem",      // 16px
      spacing05: "1.5rem",    // 24px
      spacing06: "2rem",      // 32px
      spacing07: "2.5rem",    // 40px
      spacing08: "3rem",      // 48px
      spacing09: "4rem",      // 64px
    },
  },
  components: {
    Button: {
      defaultProps: {
        radius: "sm",
        fw: 400,
      },
      styles: {
        root: {
          transition: "all 70ms",
        },
      },
    },
    Card: {
      defaultProps: {
        radius: "sm",
        shadow: "none",
        padding: "md",
      },
      styles: {
        root: {
          border: "1px solid var(--mantine-color-gray-30)",
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: "sm",
        size: "sm",
      },
    },
    NavLink: {
      defaultProps: {
        radius: "sm",
      },
      styles: {
        root: {
          transition: "all 70ms",
        },
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: "sm",
      },
    },
    TextInput: {
      defaultProps: {
        radius: "sm",
      },
    },
    Tooltip: {
      defaultProps: {
        radius: "sm",
      },
    },
  },
});

export const metadata: Metadata = {
  title: "Carbon Design System - Справочник",
  description: "Справочник дизайн-систем в стиле Carbon Design System от IBM. Принципы, компоненты, технологии, цветовые палитры, типографика.",
  keywords: ["Carbon Design System", "IBM", "дизайн-система", "design system", "UI", "UX", "компоненты"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Carbon Design System - Справочник",
    description: "Справочник дизайн-систем в стиле Carbon Design System от IBM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Notifications position="top-right" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
