import assert from 'power-assert';
import { minMutation } from '../minMutation';

describe('src/minMutation', () => {
  describe('minMutation', () => {
    it('AACCGGTT, AACCGGTA, ["AACCGGTA"]', () =>
      assert.strictEqual(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']), 1));
    it('AACCGGTT, AAACGGTA, ["AACCGGTA", "AACCGCTA", "AAACGGTA"]', () =>
      assert.strictEqual(
        minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']),
        2
      ));
    it('AAAAACCC, AACCCCCC, ["AAAACCCC", "AAACCCCC", "AACCCCCC"]', () =>
      assert.strictEqual(
        minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']),
        3
      ));
  });
});
