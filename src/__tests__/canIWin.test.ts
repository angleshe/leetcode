import assert from 'power-assert';
import { canIWin } from '../canIWin';

describe('src/canIWin', () => {
  describe('canIWin', () => {
    it('10, 11', () => assert.ok(!canIWin(10, 11)));
    it('10, 0', () => assert.ok(canIWin(10, 0)));
    it('10, 1', () => assert.ok(canIWin(10, 1)));
    it('4, 6', () => assert.ok(canIWin(4, 6)));
  });
});
