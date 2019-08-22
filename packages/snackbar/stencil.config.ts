import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'snackbar',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    {
      components: [
        'rs-snackbar',
        'rs-snackbar-text'
      ]
    }
  ]
};
