import assert from 'power-assert';
import { fizzBuzz } from '../fizzBuzz';

describe('src/fizzBuzz', () => {
  describe('fizzBuzz', () => {
    it('3', () => assert.deepStrictEqual(fizzBuzz(3), ['1', '2', 'Fizz']));
    it('5', () => assert.deepStrictEqual(fizzBuzz(5), ['1', '2', 'Fizz', '4', 'Buzz']));
    it('15', () =>
      assert.deepStrictEqual(fizzBuzz(15), [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz'
      ]));
  });
});
