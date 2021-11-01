import assert from 'power-assert';
import { validUtf8 } from '../validUtf8';

describe('src/validUtf8', () => {
  describe('validUtf8', () => {
    it('[197, 130, 1]', () => assert.ok(validUtf8([197, 130, 1])));
    it('[235, 140, 4]', () => assert.ok(!validUtf8([235, 140, 4])));
    it('[145]', () => assert.ok(!validUtf8([145])));
  });
});
