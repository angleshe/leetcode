import assert from 'power-assert';
import { makesquare } from '../makesquare';

describe('src/makesquare', () => {
  describe('makesquare', () => {
    it('[1,1,2,2,2]', () => assert.ok(makesquare([1, 1, 2, 2, 2])));
    it('[3,3,3,3,4]', () => assert.ok(!makesquare([3, 3, 3, 3, 4])));
  });
});
