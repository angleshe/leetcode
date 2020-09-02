import assert from 'power-assert';
import { longestConsecutive } from '../longestConsecutive';

describe('src/longestConsecutive', () => {
  it('[100, 4, 200, 1, 3, 2]', () =>
    assert.strictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4));
});
