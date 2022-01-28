import assert from 'power-assert';
import { poorPigs } from '../poorPigs';

describe('src/poorPigs', () => {
  describe('poorPigs', () => {
    it('1000, 15, 60', () => assert.strictEqual(poorPigs(1000, 15, 60), 5));
    it('4, 15, 15', () => assert.strictEqual(poorPigs(4, 15, 15), 2));
    it('4, 15, 30', () => assert.strictEqual(poorPigs(4, 15, 30), 2));
  });
});
