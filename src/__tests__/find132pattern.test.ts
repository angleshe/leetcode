import assert from 'power-assert';
import { find132pattern } from '../find132pattern';

describe('src/find132pattern', () => {
  describe('find132pattern', () => {
    it('[1,2,3,4]', () => assert.ok(!find132pattern([1, 2, 3, 4])));
    it('[3,1,4,2]', () => assert.ok(find132pattern([3, 1, 4, 2])));
    it('[-1,3,2,0]', () => assert.ok(find132pattern([-1, 3, 2, 0])));
  });
});
