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

export class StylelintStack {
  config;

  constructor(config) {
    this.config = config;
  }

  get nodeEnv() {
    return process.env.NODE_ENV || 'production';
  }

  static create(options = {}) {
    return new this({
      extends: [],
      rules: {},
      ...options,
    });
  }

  clone(config) {
    return new this.constructor(config);
  }

  base(options = {}) {
    return this.clone({
      ...this.config,
      ...options,
    });
  }

  standard(options = {}) {
    return this.clone({
      ...this.config,
      extends: [
        ...this.config.extends,
        'stylelint-config-standard-scss',
      ],
      ...options,
    });
  }

  prettier(options = {}) {
    return this.clone({
      ...this.config,
      extends: [
        ...this.config.extends,
        'stylelint-prettier/recommended',
      ],
      rules: {
        ...this.config.rules,
        'prettier/prettier': null,
      },
      ...options,
    });
  }

  build() {
    return { ...this.config };
  }
}
