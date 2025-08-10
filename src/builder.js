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

import { createStylelintConfig, withPluginPrettier, withPluginStandard } from './base.js';
import * as presets from './presets.js';

export class StylelintStack {
  #config;
  #options;

  constructor(config, options = {}) {
    this.#config = config;
    this.#options = options;
  }

  static create(options = {}) {
    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new StylelintStack(createStylelintConfig(merged), merged);
  }

  standard(options = {}, override = {}) {
    return new StylelintStack(withPluginStandard(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  prettier(options = {}, override = {}) {
    return new StylelintStack(withPluginPrettier(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  build() {
    return { ...this.#config };
  }

  options(options) {
    return new StylelintStack(this.#config, {
      ...this.#options,
      ...options,
    });
  }

  static get Presets() {
    return presets;
  }
}
