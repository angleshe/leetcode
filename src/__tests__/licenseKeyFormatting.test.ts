import assert from 'power-assert';
import { licenseKeyFormatting } from '../licenseKeyFormatting';

describe('src/licenseKeyFormatting', () => {
  describe('licenseKeyFormatting', () => {
    it('5F3Z-2e-9-w, 4', () =>
      assert.strictEqual(licenseKeyFormatting('5F3Z-2e-9-w', 4), '5F3Z-2E9W'));
    it('2-5g-3-J, 2', () => assert.strictEqual(licenseKeyFormatting('2-5g-3-J', 2), '2-5G-3J'));
    it('--a-a-a-a--, 2', () => assert.strictEqual(licenseKeyFormatting('--a-a-a-a--', 2), 'AA-AA'));
  });
});
