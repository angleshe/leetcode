import assert from 'power-assert';
import { circularArrayLoop } from '../circularArrayLoop';

describe('src/circularArrayLoop', () => {
  describe('circularArrayLoop', () => {
    it('[2,-1,1,2,2]', () => assert.ok(circularArrayLoop([2, -1, 1, 2, 2])));
    it('[-1,2]', () => assert.ok(!circularArrayLoop([-1, 2])));
    it('[-2,1,-1,-2,-2]', () => assert.ok(!circularArrayLoop([-2, 1, -1, -2, -2])));
    it('[1,1,2]', () => assert.ok(circularArrayLoop([1, 1, 2])));
  });
});
