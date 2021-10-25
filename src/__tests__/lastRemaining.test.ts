import assert from 'power-assert';
import { lastRemaining } from '../lastRemaining';

describe('src/lastRemaining', () => {
  describe('lastRemaining', () => {
    it('9', () => assert.strictEqual(lastRemaining(9), 6));
  });
});
