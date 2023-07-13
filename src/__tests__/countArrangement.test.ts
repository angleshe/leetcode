import { countArrangement } from '../countArrangement';
import assert from 'power-assert';

describe('src/countArrangement', () => {
  describe('countArrangement', () => {
    it('2', () => assert.equal(countArrangement(2), 2));
    it('1', () => assert.equal(countArrangement(1), 1));
  });
});
