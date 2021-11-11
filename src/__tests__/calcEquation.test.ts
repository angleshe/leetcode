import assert from 'power-assert';
import { calcEquation } from '../calcEquation';

describe('src/calcEquation', () => {
  describe('calcEquation', () => {
    it('[["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]', () =>
      assert.deepStrictEqual(
        calcEquation(
          [
            ['a', 'b'],
            ['b', 'c']
          ],
          [2.0, 3.0],
          [
            ['a', 'c'],
            ['b', 'a'],
            ['a', 'e'],
            ['a', 'a'],
            ['x', 'x']
          ]
        ),
        [6.0, 0.5, -1.0, 1.0, -1.0]
      ));
    it('[["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]', () =>
      assert.deepStrictEqual(
        calcEquation(
          [
            ['a', 'b'],
            ['b', 'c'],
            ['bc', 'cd']
          ],
          [1.5, 2.5, 5.0],
          [
            ['a', 'c'],
            ['c', 'b'],
            ['bc', 'cd'],
            ['cd', 'bc']
          ]
        ),
        [3.75, 0.4, 5.0, 0.2]
      ));
    it('[["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]', () =>
      assert.deepStrictEqual(
        calcEquation(
          [
            ['a', 'b'],
            ['b', 'c'],
            ['bc', 'cd']
          ],
          [1.5, 2.5, 5.0],
          [
            ['a', 'c'],
            ['c', 'b'],
            ['bc', 'cd'],
            ['cd', 'bc']
          ]
        ),
        [3.75, 0.4, 5.0, 0.2]
      ));
    it('[["a","b"],["e","f"],["b","e"]], [3.4,1.4,2.3], [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]]', () =>
      assert.deepStrictEqual(
        calcEquation(
          [
            ['a', 'b'],
            ['e', 'f'],
            ['b', 'e']
          ],
          [3.4, 1.4, 2.3],
          [
            ['b', 'a'],
            ['a', 'f'],
            ['f', 'f'],
            ['e', 'e'],
            ['c', 'c'],
            ['a', 'c'],
            ['f', 'e']
          ]
        ),
        [0.29412, 10.948, 1.0, 1.0, -1.0, -1.0, 0.71429]
      ));
  });
});
