import assert from 'power-assert';
import { findItinerary } from '../findItinerary';

describe('src/findItinerary', () => {
  describe('findItinerary', () => {
    it('[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]', () =>
      assert.deepStrictEqual(
        findItinerary([
          ['MUC', 'LHR'],
          ['JFK', 'MUC'],
          ['SFO', 'SJC'],
          ['LHR', 'SFO']
        ]),
        ['JFK', 'MUC', 'LHR', 'SFO', 'SJC']
      ));
    it('[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]', () =>
      assert.deepStrictEqual(
        findItinerary([
          ['JFK', 'SFO'],
          ['JFK', 'ATL'],
          ['SFO', 'ATL'],
          ['ATL', 'JFK'],
          ['ATL', 'SFO']
        ]),
        ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']
      ));
  });
});
