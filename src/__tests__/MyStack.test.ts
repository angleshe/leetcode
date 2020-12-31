import assert from 'power-assert';
import { MyStack } from '../MyStack';

describe('src/MyStack', () => {
  describe('MyStack', () => {
    const stack = new MyStack();
    stack.push(7);
    stack.push(3);
    const top1 = stack.top();
    const pop1 = stack.pop();
    const pop2 = stack.pop();
    const isEmpty = stack.empty();

    it('top', () => assert.strictEqual(top1, 3));
    it('pop1', () => assert.strictEqual(pop1, 3));
    it('pop2', () => assert.strictEqual(pop2, 7));
    it('isEmpty', () => assert.ok(isEmpty));
  });
});
