// postcss.config.js
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({ stage: 0 }), // Supports latest CSS features
  ],
};

