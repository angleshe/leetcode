import { fractionAddition } from '../fractionAddition';
import assert from 'power-assert';

describe('src/fractionAddition', () => {
  describe('fractionAddition', () => {
    it('-1/2+1/2', () => assert.equal(fractionAddition('-1/2+1/2'), '0/1'));
    it('-1/2+1/2+1/3', () => assert.equal(fractionAddition('-1/2+1/2+1/3'), '1/3'));
    it('1/3-1/2', () => assert.equal(fractionAddition('1/3-1/2'), '-1/6'));
  });
});
