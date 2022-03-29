import assert from 'power-assert';
import { fib } from '../fib';

describe('src/fib', () => {
  describe('fib', () => {
    it('2', () => assert.strictEqual(fib(2), 1));
    it('3', () => assert.strictEqual(fib(3), 2));
    it('4', () => assert.strictEqual(fib(4), 3));
  });
});
