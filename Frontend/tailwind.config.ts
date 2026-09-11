import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        blue: "var(--color-blue)",
        orange: "var(--color-orange)",
        sky: "var(--color-sky)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark: "var(--color-dark)",
        light: "var(--color-sky)",
        background: "var(--color-background)",
        nearBlack: "var(--color-black)",
        darkGray: "var(--color-dark-gray)",
        bodyGray: "var(--color-gray)",
        mutedGray: "var(--color-muted)",
        lightGray: "var(--color-border)",
        softBg: "var(--color-light)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      maxWidth: {
        container: "var(--container)",
        containerWide: "var(--container-wide)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        power2: "var(--ease-power2)",
      },
      fontFamily: {
        nourd: ["var(--font-nourd)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
