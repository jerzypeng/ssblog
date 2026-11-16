module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: [],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'selector-class-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
    'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen', 'require']
    }],
    'property-no-unknown': [true, {
      ignoreProperties: ['font-smoothing', 'tap-highlight-color', 'user-drag', 'scroll-snap-type']
    }],
    'unit-case': 'lower',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local', 'deep']
    }],
    'declaration-block-no-duplicate-properties': true,
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': 'never',
    'no-invalid-double-slash-comments': null
  },
  ignoreFiles: [
    'node_modules/**',
    'dist/**',
    'docs/.vuepress/dist/**',
    '.github/**',
    '*.min.css',
    '*.map',
    '**/*.styl'
  ]
}