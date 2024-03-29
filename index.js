/** @type {import('prettier').Options} */
module.exports = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 120,

  plugins: ["prettier-plugin-packagejson"]
};
