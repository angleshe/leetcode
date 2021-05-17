import assert from 'power-assert';
import { isSelfCrossing } from '../isSelfCrossing';

describe('src/isSelfCrossing', () => {
  describe('isSelfCrossing', () => {
    it('[2,1,1,2]', () => assert.ok(isSelfCrossing([2, 1, 1, 2])));
    it('[1,2,3,4]', () => assert.ok(!isSelfCrossing([1, 2, 3, 4])));
    it('[1,1,1,1]', () => assert.ok(isSelfCrossing([1, 1, 1, 1])));
    it('[1,1,2,1,1]', () => assert.ok(isSelfCrossing([1, 1, 2, 1, 1])));
  });
});
