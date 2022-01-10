import assert from 'power-assert';
import { arrangeCoins } from '../arrangeCoins';

describe('src/arrangeCoins', () => {
  describe('arrangeCoins', () => {
    it('5', () => assert.strictEqual(arrangeCoins(5), 2));
    it('8', () => assert.strictEqual(arrangeCoins(8), 3));
  });
});
