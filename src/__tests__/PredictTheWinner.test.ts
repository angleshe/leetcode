import assert from 'power-assert';
import { PredictTheWinner } from '../PredictTheWinner';

describe('src/PredictTheWinner', () => {
  describe('PredictTheWinner', () => {
    it('[1,5,2]', () => assert.ok(!PredictTheWinner([1, 5, 2])));
    it('[1,5,233,7]', () => assert.ok(PredictTheWinner([1, 5, 233, 7])));
  });
});
