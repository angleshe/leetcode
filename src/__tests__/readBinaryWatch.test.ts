import assert from 'power-assert';
import { count1, readBinaryWatch } from '../readBinaryWatch';

describe('src/readBinaryWatch', () => {
  describe('count1', () => {
    it('0b10101', () => assert.strictEqual(count1(0b10101), 3));
    it('0', () => assert.strictEqual(count1(0), 0));
    it('0b111', () => assert.strictEqual(count1(0b111), 3));
  });

  describe('readBinaryWatch', () => {
    it('1', () =>
      assert.deepStrictEqual(readBinaryWatch(1), [
        '0:01',
        '0:02',
        '0:04',
        '0:08',
        '0:16',
        '0:32',
        '1:00',
        '2:00',
        '4:00',
        '8:00'
      ]));
    it('9', () => assert.deepStrictEqual(readBinaryWatch(9), []));
  });
});
