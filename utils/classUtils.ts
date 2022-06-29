export function testWithClass(Ctor: any) {
  return (ops: string[], params: any[]) => {
    const results: any[] = [null]

    const ins = new Ctor(...params[0])

    for (let idx = 1; idx < ops.length; idx++) {
      const op = ops[idx]
      const r = ins[op](...(params[idx] || []))
      results.push(r)
    }

    return results
  }
}

describe('class utils', () => test.skip(''))
