/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

export function createStylelintConfig() {
  return {
    extends: [],
    rules: {},
  };
}

export function withPluginStandard(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return {
    ...config,
    extends: [
      ...config.extends,
      'stylelint-config-standard-scss',
    ],
    ...override,
  };
}

export function withPluginPrettier(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return {
    ...config,
    extends: [
      ...config.extends,
      'stylelint-prettier/recommended',
    ],
    rules: {
      ...config.rules,
      'prettier/prettier': null,
    },
    ...override,
  };
}
