import { DisjointSetArray } from '../disjoint-set-array';

describe('disjoint-set numbers', () => {
  let ds: DisjointSetArray;

  beforeEach(() => {
    ds = new DisjointSetArray(3);
  });
  test('make-set', () => {
    expect(ds.find(0) === ds.find(1)).toBe(false);
    expect(ds.find(0) === ds.find(2)).toBe(false);
    expect(ds.find(1) === ds.find(2)).toBe(false);
  });

  test('make-set-union-0-1', () => {
    ds.union(1, 0);
    expect(ds.find(0) === ds.find(1)).toBe(true);
    expect(ds.find(0) === ds.find(2)).toBe(false);
    expect(ds.find(1) === ds.find(2)).toBe(false);
  });

  test('make-set-union-0-1-repeat', () => {
    ds.union(1, 0);
    ds.union(0, 1);
    expect(ds.find(0) === ds.find(1)).toBe(true);
    expect(ds.find(0) === ds.find(2)).toBe(false);
    expect(ds.find(1) === ds.find(2)).toBe(false);
  });

  test('make-set-union-0-1-2', () => {
    ds.union(1, 0);
    ds.union(2, 0);
    expect(ds.find(0) === ds.find(1)).toBe(true);
    expect(ds.find(0) === ds.find(2)).toBe(true);
    expect(ds.find(1) === ds.find(2)).toBe(true);
  });
});