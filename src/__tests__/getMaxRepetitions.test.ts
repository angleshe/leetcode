import assert from 'power-assert';
import { getMaxRepetitions } from '../getMaxRepetitions';

describe('src/getMaxRepetitions', () => {
  describe('getMaxRepetition', () => {
    it('acb, 4, ab, 2', () => assert.strictEqual(getMaxRepetitions('acb', 4, 'ab', 2), 2));
    it('acb, 1, acb, 1', () => assert.strictEqual(getMaxRepetitions('acb', 1, 'acb', 1), 1));
    it('aaa, 20, aaaaa, 1', () => assert.strictEqual(getMaxRepetitions('aaa', 20, 'aaaaa', 1), 12));
  });
});
