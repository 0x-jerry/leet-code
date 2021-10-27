import { Config } from '@jest/types'

const conf: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: [
    //
    '**/src/**/*.ts',
    '**/*.test.ts',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}

export default conf
