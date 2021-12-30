import assert from 'power-assert';
import { AllOne } from '../AllOne';

describe('src/AllOne', () => {
  describe('AllOne', () => {
    const allOne1 = new AllOne();
    allOne1.inc('a');
    allOne1.inc('b');
    allOne1.inc('c');
    allOne1.inc('b');
    allOne1.inc('b');
    allOne1.dec('b');
    allOne1.dec('c');
    const minKey1 = allOne1.getMinKey();
    const maxKey1 = allOne1.getMaxKey();

    const allOne2 = new AllOne();
    allOne2.inc('a');
    allOne2.inc('b');
    allOne2.inc('b');
    allOne2.inc('c');
    allOne2.inc('c');
    allOne2.inc('c');
    allOne2.dec('b');
    allOne2.dec('b');
    const minKey2 = allOne2.getMinKey();
    allOne2.dec('a');
    const maxKey2 = allOne2.getMaxKey();
    const minKey3 = allOne2.getMinKey();

    const allOne3 = new AllOne();
    const maxKey3 = allOne3.getMaxKey();
    const minKey4 = allOne3.getMinKey();

    it('minKey1', () => assert.strictEqual(minKey1, 'a'));
    it('maxKey1', () => assert.strictEqual(maxKey1, 'b'));
    it('minKey2', () => assert.strictEqual(minKey2, 'a'));
    it('maxKey2', () => assert.strictEqual(maxKey2, 'c'));
    it('minKey3', () => assert.strictEqual(minKey3, 'c'));
    it('maxKey3', () => assert.strictEqual(maxKey3, ''));
    it('minKey4', () => assert.strictEqual(minKey4, ''));
  });
});
