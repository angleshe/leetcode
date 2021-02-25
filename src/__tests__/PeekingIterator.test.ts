import assert from 'power-assert';
import { Iterator, PeekingIterator } from '../PeekingIterator';

describe('src/PeekingIterator', () => {
  describe('peekingIterator', () => {
    class TestClass implements Iterator {
      private data = [1, 2, 3];
      hasNext(): boolean {
        return this.data.length !== 0;
      }
      next(): number {
        return this.data.shift()!;
      }
    }
    const test = new PeekingIterator(new TestClass());
    it('next1', () => assert.strictEqual(test.next(), 1));
    it('peek', () => assert.strictEqual(test.peek(), 2));
    it('next2', () => assert.strictEqual(test.next(), 2));
    it('next3', () => assert.strictEqual(test.next(), 3));
    it('hasNext', () => assert.ok(!test.hasNext()));
  });
});
