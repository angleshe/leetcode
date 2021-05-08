import assert from 'power-assert';
import { isValidSerialization } from '../isValidSerialization';

describe('src/isValidSerialization', () => {
  describe('isValidSerialization', () => {
    it('9,3,4,#,#,1,#,#,2,#,6,#,#', () =>
      assert.ok(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#')));
    it('1,#', () => assert.ok(!isValidSerialization('1,#')));
    it('9,#,#,1', () => assert.ok(!isValidSerialization('9,#,#,1')));
    it('#', () => assert.ok(isValidSerialization('#')));
  });
});
