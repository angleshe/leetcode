import { longestCommonPrefix, isCommonPrefix, getMinLengthForIndex } from '../longestCommonPrefix';
import { showContent } from '../utils';
import assert from 'assert';
describe('src/longestCommonPrefix', () => {
  describe('longestCommonPrefix', () => {
    it(showContent(['flower', 'flow', 'flight']), () => {
      assert.strictEqual('fl', longestCommonPrefix(['flower', 'flow', 'flight']));
    });
    it(showContent(['dog', 'racecar', 'car']), () => {
      assert.strictEqual('', longestCommonPrefix(['dog', 'racecar', 'car']));
    });
    it(showContent([]), () => {
      assert.strictEqual('', longestCommonPrefix([]));
    });
    it(showContent(['dog']), () => {
      assert.strictEqual('dog', longestCommonPrefix(['dog']));
    });
    it(showContent(['aa', 'ab']), () => {
      assert.strictEqual('a', longestCommonPrefix(['aa', 'ab']));
    });
  });
  describe('isCommonPrefix', () => {
    it(`${showContent(['dog', 'racecar', 'car'])}, `, () => {
      assert.ok(isCommonPrefix(['dog', 'racecar', 'car'], ''));
    });
    it(`${showContent(['dog', 'racecar', 'dar'])}, d`, () => {
      assert.ok(!isCommonPrefix(['dog', 'racecar', 'dar'], 'd'));
    });
    it(`${showContent(['flower', 'flow', 'flight'])}, fl`, () => {
      assert.ok(isCommonPrefix(['flower', 'flow', 'flight'], 'fl'));
    });
  });
  describe('getMinLengthForIndex', () => {
    it(showContent(['a', 'bc', 'asdasda', 'as']), () => {
      assert.strictEqual(getMinLengthForIndex(['a', 'bc', 'asdasda', 'as']), 0);
    });
    it(showContent(['as', 'www', 'ccc', 'll']), () => {
      assert.strictEqual(getMinLengthForIndex(['as', 'www', 'ccc', 'll']), 0);
    });
    it(showContent([]), () => {
      assert.strictEqual(getMinLengthForIndex([]), -1);
    });
  });
});
