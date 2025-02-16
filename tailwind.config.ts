import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redcolor : "var(--redcolor)",
        blackcolor : "var(--blackcolor)",
        whitecolor : "var(--whitecolor)",
        darkgraycolor : "var(--darkgraycolor)",

      },
    },
  },
  plugins: [],
} satisfies Config;
