import assert from 'power-assert';
import { bulbSwitch } from '../bulbSwitch';

describe('src/bulbSwitch', () => {
  describe('bulbSwitch', () => {
    it('3', () => assert.strictEqual(bulbSwitch(3), 1));
    it('0', () => assert.strictEqual(bulbSwitch(0), 0));
    it('1', () => assert.strictEqual(bulbSwitch(1), 1));
  });
});
