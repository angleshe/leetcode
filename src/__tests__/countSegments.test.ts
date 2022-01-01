import assert from 'power-assert';
import { countSegments } from '../countSegments';

describe('src/countSegments', () => {
  describe('countSegments', () => {
    it('Hello, my name is John', () =>
      assert.strictEqual(countSegments('Hello, my name is John'), 5));
  });
});
