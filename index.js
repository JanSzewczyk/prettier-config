/** @type {import('prettier').Options} */
module.exports = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 100,

  // 'prettier-plugin-sort-imports' configuration
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    "^react$",
    "^next($|/.*)",
    "<THIRD_PARTY_MODULES>",
    "^@(components|api|types|lib)(.*)$",
    "^./(.*)",
    "^../(.*)",
    "(.scss|.css)$"
  ],

  plugins: ["prettier-plugin-packagejson", "@trivago/prettier-plugin-sort-imports"]
};
