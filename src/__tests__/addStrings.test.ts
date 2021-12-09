import assert from 'power-assert';
import { addStrings } from '../addStrings';

describe('src/addStrings', () => {
  describe('addStrings', () => {
    it('11, 123', () => assert.strictEqual(addStrings('11', '123'), '134'));
    it('456, 77', () => assert.strictEqual(addStrings('456', '77'), '533'));
    it('0, 0', () => assert.strictEqual(addStrings('0', '0'), '0'));
  });
});
