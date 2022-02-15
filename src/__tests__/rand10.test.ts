import assert from 'power-assert';
import { rand10 } from '../rand10';

const resArr = Array.from<undefined, number>(Array(10), (_, k) => k + 1);

describe('src/rand10', () => {
  describe('rand10', () => {
    it('test', () => {
      assert.ok(resArr.includes(rand10()));
      assert.ok(resArr.includes(rand10()));
      assert.ok(resArr.includes(rand10()));
      assert.ok(resArr.includes(rand10()));
      assert.ok(resArr.includes(rand10()));
    });
  });
});
