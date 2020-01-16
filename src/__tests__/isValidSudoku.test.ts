import { isValidSudoku, isValidRow, isValidCol, isValidBox } from '../isValidSudoku';
import { showContent } from '../utils';
import assert from 'power-assert';
describe('src/isValidSudoku', () => {
  const test1: string[][] = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ];
  const test2: string[][] = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ];
  describe('isValidRow', () => {
    it(`${showContent(test1)}, 4`, () => {
      assert.ok(isValidRow(test1, 4));
    });
    const test3: string[][] = [['1', '.', '.', '6', '4', '1', '.', '9', '8']];
    it(`${showContent(test3)}, 0`, () => {
      assert.ok(!isValidRow(test3, 0));
    });
  });
  describe('isValidCol', () => {
    it(`${showContent(test1)}, 3`, () => {
      assert.ok(isValidCol(test1, 3));
    });
    it(`${showContent(test2)}, 1`, () => {
      assert.ok(!isValidCol(test2, 0));
    });
  });
  describe('isValidBox', () => {
    it(`${showContent(test1)}, 8`, () => {
      assert.ok(isValidBox(test1, 8));
    });
    const test: string[][] = [
      ['3', '.', '5'],
      ['1', '.', '.'],
      ['6', '.', '1']
    ];
    it(`${showContent(test)}, 0`, () => {
      assert.ok(!isValidBox(test, 0));
    });
  });
  describe('isValidSudoku', () => {
    it(`${showContent(test1)}`, () => {
      assert.ok(isValidSudoku(test1));
    });
    it(`${showContent(test2)}`, () => {
      assert.ok(!isValidSudoku(test2));
    });
  });
});
