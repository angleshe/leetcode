import assert from 'power-assert';
import { canConstruct } from '../canConstruct';

describe('src/canConstruct', () => {
  describe('canConstruct', () => {
    it('a, b', () => assert.ok(!canConstruct('a', 'b')));
    it('aa, ab', () => assert.ok(!canConstruct('aa', 'ab')));
    it('aa, aab', () => assert.ok(canConstruct('aa', 'aab')));
  });
});
