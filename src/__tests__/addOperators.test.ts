import assert from 'power-assert';
import { addOperators } from '../addOperators';

describe('src/addOperators', () => {
  describe('addOperators', () => {
    it('123, 6', () => assert.deepStrictEqual(addOperators('123', 6), ['1+2+3', '1*2*3']));
    it('232, 8', () => assert.deepStrictEqual(addOperators('232', 8), ['2+3*2', '2*3+2']));
    it('105, 5', () => assert.deepStrictEqual(addOperators('105', 5), ['1*0+5', '10-5']));
    it('00, 0', () => assert.deepStrictEqual(addOperators('00', 0), ['0+0', '0-0', '0*0']));
    it('3456237490, 9191', () => assert.deepStrictEqual(addOperators('3456237490', 9191), []));
  });
});
