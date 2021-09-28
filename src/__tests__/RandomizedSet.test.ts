import assert from 'power-assert';
import { RandomizedSet } from '../RandomizedSet';

describe('src/RandomizedSet', () => {
  describe('RandomizedSet', () => {
    const randomizedSet1 = new RandomizedSet();
    const test1 = randomizedSet1.insert(1);
    it('test1', () => assert.ok(test1));
    const test2 = randomizedSet1.remove(2);
    it('test2', () => assert.ok(!test2));

    const test3 = randomizedSet1.insert(2);
    it('test3', () => assert.ok(test3));
    const test4 = randomizedSet1.getRandom();
    it('test4', () => assert.ok([1, 2].includes(test4)));
    const test5 = randomizedSet1.remove(1);
    it('test5', () => assert.ok(test5));
    const test6 = randomizedSet1.insert(2);
    it('test6', () => assert.ok(!test6));
    const test7 = randomizedSet1.getRandom();
    it('test7', () => assert.strictEqual(test7, 2));

    const randomizedSet2 = new RandomizedSet();
    randomizedSet2.insert(0);
    randomizedSet2.insert(1);
    randomizedSet2.remove(0);
    randomizedSet2.insert(2);
    randomizedSet2.remove(1);
    it('test8', () => assert.strictEqual(randomizedSet2.getRandom(), 2));
  });
});
