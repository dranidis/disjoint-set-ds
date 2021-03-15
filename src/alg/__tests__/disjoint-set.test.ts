import { DisjointSet } from '../disjoint-set';

describe('disjoint-set strings', () => {
  let ds: DisjointSet<string>;

  beforeEach(() => {
    ds = new DisjointSet<string>();
    ds.makeSet('Bob');
    ds.makeSet('Alice');
    ds.makeSet('Mary');
  });
  test('make-set existing elements returns void', () => {
    expect(ds.makeSet('Alice')).toBeUndefined();
  });

  test('make-set', () => {
    expect(ds.find('Bob') === ds.find('Alice')).toBe(false);
    expect(ds.find('Bob') === ds.find('Mary')).toBe(false);
    expect(ds.find('Alice') === ds.find('Mary')).toBe(false);
  });

  test('make-set-union-Bob-Alice', () => {
    ds.union('Alice', 'Bob');
    expect(ds.find('Bob') === ds.find('Alice')).toBe(true);
    expect(ds.find('Bob') === ds.find('Mary')).toBe(false);
    expect(ds.find('Alice') === ds.find('Mary')).toBe(false);
  });

  test('make-set-union-Bob-Alice-repeat', () => {
    ds.union('Alice', 'Bob');
    ds.union('Bob', 'Alice');
    expect(ds.find('Bob') === ds.find('Alice')).toBe(true);
    expect(ds.find('Bob') === ds.find('Mary')).toBe(false);
    expect(ds.find('Alice') === ds.find('Mary')).toBe(false);
  });

  test('make-set-union-Bob-Alice-Mary', () => {
    ds.union('Alice', 'Bob');
    ds.union('Mary', 'Bob');
    expect(ds.find('Bob') === ds.find('Alice')).toBe(true);
    expect(ds.find('Bob') === ds.find('Mary')).toBe(true);
    expect(ds.find('Alice') === ds.find('Mary')).toBe(true);
  });

  test('error find', () => {
    expect(() => {
      ds.find('Who');
    }).toThrow();
  });

  test('error union 1', () => {
    expect(() => {
      ds.union('Who', 'Alice');
    }).toThrow();
  });

  test('error union 2', () => {
    expect(() => {
      ds.union('Alice', 'Who');
    }).toThrow();
  });
});
