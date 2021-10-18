import assert from 'power-assert';
import { deserialize } from '../deserialize';

describe('src/deserialize', () => {
  describe('deserialize', () => {
    it('324', () => {
      const nestedInteger = deserialize('324');
      assert.strictEqual(nestedInteger.getInteger(), 324);
    });
    it('[123,[456,[789]]]', () => {
      const nestedInteger = deserialize('[123,[456,[789]]]');
      assert.deepStrictEqual(nestedInteger.toArray(), [123, [456, [789]]]);
    });
  });
});
