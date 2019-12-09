import {isPalindrome} from '../isPalindrome'
import assert from 'assert'
describe('scr/isPalindrome', () => {
  describe('isPalindrome()', () => {
    it('121', () => {
      assert.ok(isPalindrome(121))
    })
    it('-121', () => {
      assert.ok(!isPalindrome(-121))
    })
    it('10', () => {
      assert.ok(!isPalindrome(10))
    })
    it('0', () => {
      assert.ok(isPalindrome(0))
    })
  })
})
