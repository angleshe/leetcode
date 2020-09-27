import assert from 'power-assert';
import { LRUCache } from '../LRUCache';

describe('src/LRUCache', () => {
  describe('LRUCache', () => {
    it('2', () => {
      const cache = new LRUCache(2);
      cache.put(1, 1);
      cache.put(2, 2);
      assert.strictEqual(cache.get(1), 1);
      cache.put(3, 3);
      assert.strictEqual(cache.get(2), -1);
      cache.put(4, 4);
      assert.strictEqual(cache.get(1), -1);
      assert.strictEqual(cache.get(3), 3);
      assert.strictEqual(cache.get(4), 4);
    });
    it('1', () => {
      const cache = new LRUCache(1);
      cache.put(2, 1);
      assert.strictEqual(cache.get(2), 1);
      cache.put(3, 2);
      assert.strictEqual(cache.get(2), -1);
      assert.strictEqual(cache.get(3), 2);
    });
    it('2', () => {
      const cache = new LRUCache(2);
      cache.put(2, 1);
      cache.put(1, 1);
      cache.put(2, 3);
      cache.put(4, 1);
      assert.strictEqual(cache.get(1), -1);
      assert.strictEqual(cache.get(2), 3);
    });
    it('3', () => {
      const cache = new LRUCache(3);
      cache.put(1, 1);
      cache.put(2, 2);
      cache.put(3, 3);
      cache.put(4, 4);
      assert.strictEqual(cache.get(4), 4);
      assert.strictEqual(cache.get(3), 3);
      assert.strictEqual(cache.get(2), 2);
      assert.strictEqual(cache.get(1), -1);
      cache.put(5, 5);
      assert.strictEqual(cache.get(1), -1);
      assert.strictEqual(cache.get(2), 2);
      assert.strictEqual(cache.get(3), 3);
      assert.strictEqual(cache.get(4), -1);
      assert.strictEqual(cache.get(5), 5);
    });
  });
});
