import assert from 'power-assert';
import { addDigits } from '../addDigits';

describe('src/addDigits', () => {
  describe('addDigits', () => {
    it('38', () => assert.strictEqual(addDigits(38), 2));
  });
});
