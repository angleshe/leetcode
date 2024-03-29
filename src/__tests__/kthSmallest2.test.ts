import assert from 'power-assert';
import { kthSmallest } from '../kthSmallest2';

describe('src/kthSmallest2', () => {
  describe('kthSmallest', () => {
    it('[[1,5,9],[10,11,13],[12,13,15]], 8', () =>
      assert.strictEqual(
        kthSmallest(
          [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15]
          ],
          8
        ),
        13
      ));
    it('[[-5]], 1', () => assert.strictEqual(kthSmallest([[-5]], 1), -5));
    it('[[1,2],[1,3]], 4', () =>
      assert.strictEqual(
        kthSmallest(
          [
            [1, 2],
            [1, 3]
          ],
          4
        ),
        3
      ));
    it('[[1,3,5],[6,7,12],[11,14,14]], 2', () =>
      assert.strictEqual(
        kthSmallest(
          [
            [1, 3, 5],
            [6, 7, 12],
            [11, 14, 14]
          ],
          2
        ),
        3
      ));
    it('[[4,9,9,11,12,15,17,22,23],[8,10,11,14,14,17,20,23,26],[9,13,16,21,23,26,30,35,36],[9,14,18,21,26,29,32,35,39],[12,18,19,23,27,33,34,37,39],[15,20,24,26,32,34,36,39,42],[16,24,28,28,33,37,37,43,44],[18,28,28,29,35,42,44,49,52],[23,32,34,34,39,46,51,51,56]], 30', () =>
      assert.strictEqual(
        kthSmallest(
          [
            [4, 9, 9, 11, 12, 15, 17, 22, 23],
            [8, 10, 11, 14, 14, 17, 20, 23, 26],
            [9, 13, 16, 21, 23, 26, 30, 35, 36],
            [9, 14, 18, 21, 26, 29, 32, 35, 39],
            [12, 18, 19, 23, 27, 33, 34, 37, 39],
            [15, 20, 24, 26, 32, 34, 36, 39, 42],
            [16, 24, 28, 28, 33, 37, 37, 43, 44],
            [18, 28, 28, 29, 35, 42, 44, 49, 52],
            [23, 32, 34, 34, 39, 46, 51, 51, 56]
          ],
          30
        ),
        22
      ));
    it('[[48,65,70,113,133,163,170,216,298,389],[89,169,215,222,250,348,379,426,469,554],[178,202,253,294,367,392,428,434,499,651],[257,276,284,332,380,470,516,561,657,698],[275,331,391,432,500,595,602,673,758,783],[357,365,412,450,556,642,690,752,801,887],[359,451,534,609,654,662,693,766,803,964],[390,484,614,669,684,711,767,804,857,1055],[400,515,683,732,812,834,880,930,1012,1130],[480,538,695,751,864,939,966,1027,1089,1224]], 43', () =>
      assert.strictEqual(
        kthSmallest(
          [
            [48, 65, 70, 113, 133, 163, 170, 216, 298, 389],
            [89, 169, 215, 222, 250, 348, 379, 426, 469, 554],
            [178, 202, 253, 294, 367, 392, 428, 434, 499, 651],
            [257, 276, 284, 332, 380, 470, 516, 561, 657, 698],
            [275, 331, 391, 432, 500, 595, 602, 673, 758, 783],
            [357, 365, 412, 450, 556, 642, 690, 752, 801, 887],
            [359, 451, 534, 609, 654, 662, 693, 766, 803, 964],
            [390, 484, 614, 669, 684, 711, 767, 804, 857, 1055],
            [400, 515, 683, 732, 812, 834, 880, 930, 1012, 1130],
            [480, 538, 695, 751, 864, 939, 966, 1027, 1089, 1224]
          ],
          43
        ),
        451
      ));
  });
});
