import { Config } from '@jest/types'

const conf: Config.InitialOptions = {
  testMatch: [
    //
    '**/src/**/*.ts',
    '**/*.test.ts',
  ],
}

export default conf
