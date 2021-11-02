import { Config } from '@jest/types'

const conf: Config.InitialOptions = {
  testMatch: [
    //
    '**/src/**/*.ts',
    '**/*.test.ts',
  ],
  testTimeout: 1000,
}

export default conf
