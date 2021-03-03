import assert from 'power-assert';
import { canWinNim } from '../canWinNim';

describe('src/canWinNim', () => {
  describe('canWinNim', () => {
    it('4', () => assert.ok(!canWinNim(4)));
    it('1', () => assert.ok(canWinNim(1)));
    it('2', () => assert.ok(canWinNim(2)));
  });
});
