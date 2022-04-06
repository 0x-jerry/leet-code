/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
function numUniqueEmails(emails: string[]): number {
  const uniq = new Set<string>()

  for (const email of emails) {
    const [name, domain] = email.split('@')
    const [realName] = name.split('+')
    uniq.add(realName.replace(/\.+/g, '') + '@' + domain)
  }

  return uniq.size
}
// @lc code=end

describe('num unique emails', () => {
  it('emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]', () => {
    expect(
      numUniqueEmails([
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com',
      ])
    ).toBe(2)
  })

  it('emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]', () => {
    expect(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])).toBe(3)
  })

  it('emails = ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]	', () => {
    expect(numUniqueEmails(['test.email+alex@leetcode.com', 'test.email.leet+alex@code.com'])).toBe(2)
  })
})
