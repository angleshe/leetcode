import {convert} from '../convert';
import assert from 'assert';

describe('src/convert.ts', () => {
  describe('convert()', () => {
    it('LEETCODEISHIRING, 3', () => {
      assert.strictEqual(convert('LEETCODEISHIRING', 3), 'LCIRETOESIIGEDHN')
    })
    it('LEETCODEISHIRING, 4', () => {
      assert.strictEqual(convert('LEETCODEISHIRING', 4), 'LDREOEIIECIHNTSG')
    })
    it('a, 1', () => {
      assert.strictEqual(convert('a', 1), 'a')
    })
  })
})
