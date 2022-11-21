const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/ngx-100lixo/src/'],
  coverageDirectory: '<rootDir>/coverage/ngx-100lixo',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ngx-100lixo/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
