import resolveConfig from "tailwindcss/resolveConfig";

// eslint-disable-next-line import/extensions
import tailwindConfig from "../../tailwind.config.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): any => {
  const fullConfig = resolveConfig(tailwindConfig);
  return fullConfig.theme;
};
