import { createConfig } from "@tokenami/dev";

export default createConfig({
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  grid: "0.25rem",
  responsive: {
    medium: "@media (min-width: 1024px)",
  },
  theme: {
    alpha: {},
    anim: {},
    border: {},
    color: {
      "slate-100": "#f1f5f9",
      "slate-700": "#334155",
      "sky-500": "#0ea5e9",
    },
    ease: {},
    "font-size": {
      sm: "1.25rem",
    },
    leading: {},
    "line-style": {},
    radii: {},
    size: {},
    shadow: {},
    surface: {},
    tracking: {},
    transition: {},
    weight: {},
    z: {},
  },
});
