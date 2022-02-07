import assert from 'power-assert';
import { LFUCache } from '../LFUCache';

describe('src/LFUCache', () => {
  describe('LFUCache', () => {
    const lfu1 = new LFUCache(2);
    lfu1.put(1, 1);
    lfu1.put(2, 2);
    const test1 = lfu1.get(1);
    lfu1.put(3, 3);
    const test2 = lfu1.get(2);
    const test3 = lfu1.get(3);
    lfu1.put(4, 4);
    const test4 = lfu1.get(1);
    const test5 = lfu1.get(3);
    const test6 = lfu1.get(4);
    it('test1', () => assert.strictEqual(test1, 1));
    it('test2', () => assert.strictEqual(test2, -1));
    it('test3', () => assert.strictEqual(test3, 3));
    it('test4', () => assert.strictEqual(test4, -1));
    it('test5', () => assert.strictEqual(test5, 3));
  });
});
