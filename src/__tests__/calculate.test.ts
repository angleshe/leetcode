import assert from 'power-assert';
import { calculate } from '../calculate';

describe('src/calculate', () => {
  describe('calculate', () => {
    it('1 + 1', () => assert.strictEqual(calculate('1 + 1'), 2));
    it(' 2-1 + 2 ', () => assert.strictEqual(calculate(' 2-1 + 2 '), 3));
    it('(1+(4+5+2)-3)+(6+8)', () => assert.strictEqual(calculate('(1+(4+5+2)-3)+(6+8)'), 23));
  });
});
