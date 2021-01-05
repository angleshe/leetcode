import assert from 'power-assert';
import { calculate } from '../calculate2';

describe('src/calculate2', () => {
  describe('calculate', () => {
    it('3+2*2', () => assert.strictEqual(calculate('3+2*2'), 7));
    it(' 3/2 ', () => assert.strictEqual(calculate(' 3/2 '), 1));
    it(' 3+5 / 2 ', () => assert.strictEqual(calculate(' 3+5 / 2 '), 5));
    it('14-3/2', () => assert.strictEqual(calculate('14-3/2'), 13));
  });
});
