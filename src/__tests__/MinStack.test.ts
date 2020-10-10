import assert from 'power-assert';
import { MinStack } from '../MinStack';

describe('src/MinStack', () => {
  describe('MinStack', () => {
    const minStack: MinStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    const min1 = minStack.getMin();
    minStack.pop();
    const top = minStack.top();
    const min2 = minStack.getMin();
    it('min1', () => assert.strictEqual(min1, -3));
    it('top', () => assert.strictEqual(top, 0));
    it('min2', () => assert.strictEqual(min2, -2));
  });
});
