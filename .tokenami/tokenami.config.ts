import { createConfig, defaultConfig } from "@tokenami/css";

export default createConfig({
  grid: "0.25rem",
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./index.html"],
  properties: {
    ...defaultConfig.properties,
  },
  responsive: {},
  selectors: {
    ...defaultConfig.selectors,
  },
  theme: {
    alpha: {},
    anim: {},
    border: {},
    color: {},
    ease: {},
    font: {},
    "font-size": {},
    leading: {},
    "line-style": {},
    radii: {},
    shadow: {},
    size: {},
    surface: {},
    tracking: {},
    transition: {},
    "transition-duration": {},
    "transition-timing-function": {},
    weight: {},
    z: {},
  },
});
