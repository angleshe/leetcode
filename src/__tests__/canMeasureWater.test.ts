import assert from 'power-assert';
import { canMeasureWater } from '../canMeasureWater';

describe('src/canMeasureWater', () => {
  describe('canMeasureWater', () => {
    it('3, 5, 4', () => assert.ok(canMeasureWater(3, 5, 4)));
    it('2, 6, 5', () => assert.ok(!canMeasureWater(2, 6, 5)));
  });
});
