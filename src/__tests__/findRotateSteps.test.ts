import assert from 'power-assert';
import { findRotateSteps } from '../findRotateSteps';

describe('src/findRotateSteps', () => {
  describe('findRotateSteps', () => {
    it('godding, gd', () => assert.equal(findRotateSteps('godding', 'gd'), 4));
    it('godding, godding', () => assert.equal(findRotateSteps('godding', 'godding'), 13));
  });
});
