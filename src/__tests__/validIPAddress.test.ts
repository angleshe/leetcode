import assert from 'power-assert';
import { validIPAddress } from '../validIPAddress';

describe('src/validIPAddress', () => {
  describe('validIPAddress', () => {
    it('172.16.254.1', () => assert.strictEqual(validIPAddress('172.16.254.1'), 'IPv4'));
    it('2001:0db8:85a3:0:0:8A2E:0370:7334', () =>
      assert.strictEqual(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334'), 'IPv6'));
    it('256.256.256.256', () => assert.strictEqual(validIPAddress('256.256.256.256'), 'Neither'));
    it('2001:0db8:85a3:0:0:8A2E:0370:7334:', () =>
      assert.strictEqual(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:'), 'Neither'));
    it('1e1.4.5.6', () => assert.strictEqual(validIPAddress('1e1.4.5.6'), 'Neither'));
    it('20EE:FGb8:85a3:0:0:8A2E:0370:7334', () =>
      assert.strictEqual(validIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334'), 'Neither'));
  });
});
