import {valid, centerSpread, longestPalindrome} from '../longestPalindrome'
import {showContent} from './units'
import assert from 'assert'

describe('src/longestPalindrome.ts', () => {
  describe('valid()', () => {
    it('a', () => {
      assert(valid('a'))
    })
    it('bab', () => {
      assert(valid('bab'))
    })
    it('cbbc', () => {
      assert(valid('cbbc'))
    })
    it('abab', () => {
      assert(!valid('abab'))
    })
  })
  describe('centerSpread()', () => {
    let test: string[] = 'abcdcbbc'.split('')
    it(showContent(test) + ',1, 1', () => {
      assert.deepStrictEqual(centerSpread(test, 1, 1), [test[1]])
    })
    it(showContent(test) + ',3, 4', () => {
      assert.deepStrictEqual(centerSpread(test, 1, 2), [])
    })
    it(showContent(test) + ',3, 3', () => {
      assert.deepStrictEqual(centerSpread(test, 3, 3), 'bcdcb'.split(''))
    })
    it(showContent(test) + ',5, 6', () => {
      assert.deepStrictEqual(centerSpread(test, 5, 6), 'cbbc'.split(''))
    })
  })
  describe('longestPalindrome()', () => {
    it('babad', () => {
      let res: string = longestPalindrome('babad')
      assert(['bab', 'aba'].includes(res))
    })
    it('cbbd', () => {
      assert.strictEqual(longestPalindrome('cbbd'), 'bb')
    })
    it('b', () => {
      assert.strictEqual(longestPalindrome('b'), 'b')
    })
    it('', () => {
      assert.strictEqual(longestPalindrome(''), '')
    })
    it('ac', () => {
      assert.strictEqual(longestPalindrome('ac'), 'a')
    })
    it('bb', () => {
      assert.strictEqual(longestPalindrome('bb'), 'bb')
    })
  })
})

