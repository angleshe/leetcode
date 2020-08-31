import assert from 'power-assert';
import { findLadders, transformCheck } from '../findLadders';

describe('src/findLadders', () => {
  describe('transformCheck', () => {
    it('bgm, bbm', () => {
      assert.ok(transformCheck('bgm', 'bbm'));
    });
    it('bgm, bbb', () => assert.ok(!transformCheck('bgm', 'bbb')));
  });
  describe('findLadders', () => {
    it('hit, cog, ["hot","dot","dog","lot","log","cog"]', () => {
      assert.deepStrictEqual(
        findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
        [
          ['hit', 'hot', 'dot', 'dog', 'cog'],
          ['hit', 'hot', 'lot', 'log', 'cog']
        ]
      );
    });
    it('hit, cog, ["hot","dot","dog","lot","log"]', () => {
      assert.deepStrictEqual(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']), []);
    });
    it('a, c, ["a","b","c"]', () => {
      assert.deepStrictEqual(findLadders('a', 'c', ['a', 'b', 'c']), [['a', 'c']]);
    });
  });
});
