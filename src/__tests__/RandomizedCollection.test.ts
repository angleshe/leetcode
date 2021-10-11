import assert from 'power-assert';
import { RandomizedCollection } from '../RandomizedCollection';

describe('src/RandomizedCollection', () => {
  describe('RandomizedCollection', () => {
    const collection1 = new RandomizedCollection();
    const test1 = collection1.insert(1);
    const test2 = collection1.insert(1);
    const test3 = collection1.insert(2);
    const test4 = collection1.getRandom();
    const test5 = collection1.remove(1);
    const test6 = collection1.getRandom();
    it('test1', () => assert.ok(test1));
    it('test2', () => assert.ok(!test2));
    it('test3', () => assert.ok(test3));
    it('test4', () => assert.ok([1, 2].includes(test4)));
    it('test5', () => assert.ok(test5));
    it('test6', () => assert.ok([1, 2].includes(test6)));
  });
});
