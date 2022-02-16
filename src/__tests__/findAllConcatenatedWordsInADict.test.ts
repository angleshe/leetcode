import assert from 'power-assert';
import { findAllConcatenatedWordsInADict } from '../findAllConcatenatedWordsInADict';

describe('src/findAllConcatenatedWordsInADict', () => {
  describe('findAllConcatenatedWordsInADict', () => {
    it('["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]', () =>
      assert.deepStrictEqual(
        findAllConcatenatedWordsInADict([
          'cat',
          'cats',
          'catsdogcats',
          'dog',
          'dogcatsdog',
          'hippopotamuses',
          'rat',
          'ratcatdogcat'
        ]),
        ['catsdogcats', 'dogcatsdog', 'ratcatdogcat']
      ));
    it('["cat","dog","catdog"]', () =>
      assert.deepStrictEqual(findAllConcatenatedWordsInADict(['cat', 'dog', 'catdog']), [
        'catdog'
      ]));
  });
});
