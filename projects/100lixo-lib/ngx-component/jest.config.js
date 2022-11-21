const baseConfig = require('../../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/100lixo-lib/ngx-component/src/'],
  coverageDirectory: '<rootDir>/coverage/100lixo-lib/ngx-component',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/100lixo-lib/ngx-component/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
