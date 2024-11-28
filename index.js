const has = (pkg) => {
  try {
    import.meta.resolve(pkg, import.meta.url);
    return true;
  } catch {
    return false;
  }
};

const hasTailwindcss = has("tailwindcss");

/** @type {import('prettier').Config} */
const baseConfig = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  htmlWhitespaceSensitivity: "css",
  embeddedLanguageFormatting: "auto"
};

/** @type {Array<string>} */
const plugins = ["prettier-plugin-packagejson", hasTailwindcss ? "prettier-plugin-tailwindcss" : null].filter(Boolean);

/** @type {import('prettier-plugin-tailwindcss').PluginOptions} */
const tailwindcssConfig = {
  tailwindAttributes: ["class", "className", "ngClass", ".*[cC]lassName"],
  tailwindFunctions: ["classNames", "clsx", "cn"]
};

export const config = { ...baseConfig, plugins, ...(hasTailwindcss ? tailwindcssConfig : {}) };

export default config;
