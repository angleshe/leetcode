import { findRestaurant } from '../findRestaurant';
import assert from 'power-assert';

describe('src/findRestaurant', () => {
  describe('findRestaurant', () => {
    it('["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]', () =>
      assert.deepEqual(
        findRestaurant(
          ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
          ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
        ),
        ['Shogun']
      ));
    it('["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]', () =>
      assert.deepEqual(
        findRestaurant(
          ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
          ['KFC', 'Shogun', 'Burger King']
        ),
        ['Shogun']
      ));
  });
});
