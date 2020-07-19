import assert from 'power-assert';
import { restoreIpAddresses } from '../restoreIpAddresses';

describe('src/restoreIpAddresses', () => {
  describe('restoreIpAddresses', () => {
    it('25525511135', () => {
      assert.deepStrictEqual(restoreIpAddresses('25525511135'), [
        '255.255.11.135',
        '255.255.111.35'
      ]);
    });
    it('010010', () => {
      assert.deepStrictEqual(restoreIpAddresses('010010'), ['0.10.0.10', '0.100.1.0']);
    });
  });
});
