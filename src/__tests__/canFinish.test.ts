import assert from 'power-assert';
import { canFinish } from '../canFinish';

describe('src/canFinish', () => {
  describe('canFinish', () => {
    it('2, [[1,0]]', () => assert.ok(canFinish(2, [[1, 0]])));
    it('2, [[1,0],[0,1]]', () =>
      assert.ok(
        !canFinish(2, [
          [1, 0],
          [0, 1]
        ])
      ));
  });
});
