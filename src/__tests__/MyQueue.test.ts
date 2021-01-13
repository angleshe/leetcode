import assert from 'power-assert';
import { MyQueue } from '../MyQueue';

describe('src/MyQueue', () => {
  describe('MyQueue', () => {
    const myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    const peek = myQueue.peek();
    const pop = myQueue.pop();
    const empty = myQueue.empty();

    it('peek', () => assert.strictEqual(peek, 1));
    it('pop', () => assert.strictEqual(pop, 1));
    it('empty', () => assert.ok(!empty));
  });
});
