import assert from 'power-assert';
import { findWords } from '../findWords2';

describe('src/findWords2', () => {
  describe('findWords', () => {
    it('["Hello","Alaska","Dad","Peace"]', () =>
      assert.deepStrictEqual(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), ['Alaska', 'Dad']));
    it('["omk"]', () => assert.deepStrictEqual(findWords(['omk']), []));
    it('["adsdf","sfd"]', () =>
      assert.deepStrictEqual(findWords(['adsdf', 'sfd']), ['adsdf', 'sfd']));
  });
});
