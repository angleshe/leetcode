import assert from 'power-assert';
import { numberToWords } from '../numberToWords';

describe('src/numberToWords', () => {
  describe('numberToWords', () => {
    it('123', () => assert.strictEqual(numberToWords(123), 'One Hundred Twenty Three'));
    it('12345', () =>
      assert.strictEqual(numberToWords(12345), 'Twelve Thousand Three Hundred Forty Five'));
    it('1234567', () =>
      assert.strictEqual(
        numberToWords(1234567),
        'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'
      ));
    it('1234567891', () =>
      assert.strictEqual(
        numberToWords(1234567891),
        'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One'
      ));
    it('20', () => assert.strictEqual(numberToWords(20), 'Twenty'));
  });
});
