import assert from 'power-assert';
import { ladderLength, transformCheck } from '../ladderLength';

describe('src/ladderLength', () => {
  describe('transformCheck', () => {
    it('bgm, bbm', () => {
      assert.ok(transformCheck('bgm', 'bbm'));
    });
    it('bgm, bbb', () => assert.ok(!transformCheck('bgm', 'bbb')));
  });

  describe('ladderLength', () => {
    it('hit, cog, ["hot","dot","dog","lot","log","cog"]', () =>
      assert.strictEqual(
        ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
        5
      ));
    it('hit, cog, ["hot","dot","dog","lot","log"]', () =>
      assert.strictEqual(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']), 0));
    it('hit, cog, ["hot","dot","tog","cog"]', () =>
      assert.strictEqual(ladderLength('hit', 'cog', ['hot', 'dot', 'tog', 'cog']), 0));
  });
});
