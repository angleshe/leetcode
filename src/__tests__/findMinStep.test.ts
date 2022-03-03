import assert from 'power-assert';
import { findMinStep } from '../findMinStep';

describe('src/findMinStep', () => {
  describe('findMinStep', () => {
    it('WRRBBW, RB', () => assert.strictEqual(findMinStep('WRRBBW', 'RB'), -1));
    it('WWRRBBWW, WRBRW', () => assert.strictEqual(findMinStep('WWRRBBWW', 'WRBRW'), 2));
    it('G, GGGGG', () => assert.strictEqual(findMinStep('G', 'GGGGG'), 2));
    it('RBYYBBRRB, YRBGB', () => assert.strictEqual(findMinStep('RBYYBBRRB', 'YRBGB'), 3));
    it('RRWWRRBBRR, WB', () => assert.strictEqual(findMinStep('RRWWRRBBRR', 'WB'), 2));
  });
});
