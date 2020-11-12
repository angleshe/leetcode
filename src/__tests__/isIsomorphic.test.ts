import assert from 'power-assert';
import { isIsomorphic } from '../isIsomorphic';

describe('src/isIsomorphic', () => {
  describe('isIsomorphic', () => {
    it('egg, add', () => assert.ok(isIsomorphic('egg', 'add')));
    it('foo, bar', () => assert.ok(!isIsomorphic('foo', 'bar')));
    it('paper, title', () => assert.ok(isIsomorphic('paper', 'title')));
    it('ab, aa', () => assert.ok(!isIsomorphic('ab', 'aa')));
  });
});
