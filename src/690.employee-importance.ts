/*
 * @lc app=leetcode id=690 lang=typescript
 *
 * [690] Employee Importance
 */

// @lc code=start
/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
  const employeeMap: Record<string, Employee> = {}
  for (const e of employees) {
    employeeMap[e.id] = e
  }

  const getValue = (e: Employee) => {
    let value = e.importance

    for (const sub of e.subordinates) {
      value += getValue(employeeMap[sub])
    }

    return value
  }

  return getValue(employeeMap[id])
}
// @lc code=end

class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

function buildParams(employees: [number, number, number[]][]) {
  let all = []
  for (const e of employees) {
    all.push(new Employee(...e))
  }

  return all
}

describe('get importance', () => {
  test('employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1', () => {
    expect(
      getImportance(
        buildParams([
          [1, 5, [2, 3]],
          [2, 3, []],
          [3, 3, []],
        ]),
        1
      )
    ).toBe(11)
  })

  test('employees = [[1,2,[5]],[5,-3,[]]], id = 5', () => {
    expect(
      getImportance(
        buildParams([
          [1, 2, [5]],
          [5, -3, []],
        ]),
        5
      )
    ).toBe(-3)
  })
})
