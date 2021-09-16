import assert from 'power-assert';
import { guessNumber } from '../guessNumber';

describe('src.guessNumber', () => {
  describe('guessNumber', () => {
    it('30, 4', () => assert.strictEqual(guessNumber(30), 4));
  });
});
