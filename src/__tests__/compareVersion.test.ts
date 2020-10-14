import assert from 'power-assert';
import { compareVersion, clearFrontZero, compare } from '../compareVersion';

describe('src/compareVersion', () => {
  describe('clearFrontZero', () => {
    it('0000', () => assert.strictEqual(clearFrontZero('0000'), '0'));
    it('1000', () => assert.strictEqual(clearFrontZero('1000'), '1000'));
    it('0', () => assert.strictEqual(clearFrontZero('0'), '0'));
    it('0021', () => assert.strictEqual(clearFrontZero('0021'), '21'));
  });
  describe('compare', () => {
    it('24, 68', () => assert.strictEqual(compare('24', '68'), -1));
    it('30, 30', () => assert.strictEqual(compare('30', '30'), 0));
    it('48, 1', () => assert.strictEqual(compare('48', '1'), 1));
  });
  describe('compareVersion', () => {
    it('0.1, 1.1', () => assert.strictEqual(compareVersion('0.1', '1.1'), -1));
    it('1.0.1, 1', () => assert.strictEqual(compareVersion('1.0.1', '1'), 1));
    it('7.5.2.4, 7.5.3', () => assert.strictEqual(compareVersion('7.5.2.4', '7.5.3'), -1));
    it('1.01, 1.001', () => assert.strictEqual(compareVersion('1.01', '1.001'), 0));
    it('1.0, 1.0.0', () => assert.strictEqual(compareVersion('1.0', '1.0.0'), 0));
  });
});
