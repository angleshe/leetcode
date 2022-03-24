import assert from 'power-assert';
import { checkPerfectNumber } from '../checkPerfectNumber';

describe('src/checkPerfectNumber', () => {
  describe('checkPerfectNumber', () => {
    it('28', () => assert.ok(checkPerfectNumber(28)));
    it('7', () => assert.ok(!checkPerfectNumber(7)));
  });
});
