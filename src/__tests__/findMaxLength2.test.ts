import { findMaxLength } from '../findMaxLength2';
import assert from 'power-assert';

describe('src/findMaxLength2', () => {
  describe('findMaxLength', () => {
    it('[0,1]', () => assert.equal(findMaxLength([0, 1]), 2));
    it('[0,1,0]', () => assert.equal(findMaxLength([0, 1, 0]), 2));
  });
});
