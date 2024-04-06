import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "YakutianOracle",
    tags: [
      {tag: 'script', attrs: {src: 'https://widget.cloudpayments.ru/bundles/cloudpayments.js'}}
    ]
  }
});
