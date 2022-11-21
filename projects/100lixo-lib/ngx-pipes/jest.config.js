const baseConfig = require('../../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/100lixo-lib/ngx-pipes/src/'],
  coverageDirectory: '<rootDir>/coverage/100lixo-lib/ngx-pipes',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/100lixo-lib/ngx-pipes/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
