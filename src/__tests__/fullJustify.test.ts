import assert from 'power-assert';
import { fullJustify } from '../fullJustify';

describe('src/fullJustify', () => {
  describe('fullJustify', () => {
    it('["This", "is", "an", "example", "of", "text", "justification."], 16', () => {
      assert.deepStrictEqual(
        fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16),
        ['This    is    an', 'example  of text', 'justification.  ']
      );
    });
    it('["What","must","be","acknowledgment","shall","be"], 16', () => {
      assert.deepStrictEqual(
        fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16),
        ['What   must   be', 'acknowledgment  ', 'shall be        ']
      );
    });
  });
});
