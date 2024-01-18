// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // General
  printWidth: 140,
  singleQuote: true,
  semi: true,
  trailingComma: 'none',
  useTabs: false,
  quoteProps: 'consistent',

  // @ianvs/prettier-plugin-sort-imports
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^react(.*)$', '^next(.*)$', '', '<THIRD_PARTY_MODULES>', '<THIRD_PARTY_TYPES>', '', '^@(.*)$', '<TYPE>', '', '^[.]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0'
};
