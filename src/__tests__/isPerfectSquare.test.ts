import assert from 'power-assert';
import { isPerfectSquare } from '../isPerfectSquare';

describe('src/isPerfectSquare', () => {
  describe('isPerfectSquare', () => {
    it('16', () => assert.ok(isPerfectSquare(16)));
    it('14', () => assert.ok(!isPerfectSquare(14)));
  });
});
