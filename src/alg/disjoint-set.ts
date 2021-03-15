import { DisjointSetArray } from './disjoint-set-array';

export class DisjointSet<T> {
  private position: Map<T, number> = new Map();
  private disjointSetArray = new DisjointSetArray();
  private elements: T[] = [];

  makeSet(element: T): void {
    if (this.position.has(element)) return;
    const index = this.disjointSetArray.makeSet();
    this.position.set(element, index);
    this.elements.push(element);
  }

  find(element: T): T {
    const index = this.position.get(element);
    if (index === undefined) throw new Error('Element ' + element + ' not found!');
    const p = this.disjointSetArray.find(index);
    return this.elements[p];
  }

  union(element1: T, element2: T): void {
    const index1 = this.position.get(element1);
    const index2 = this.position.get(element2);
    if (index1 === undefined) throw new Error('Element ' + element1 + ' not found!');
    if (index2 === undefined) throw new Error('Element ' + element2 + ' not found!');

    this.disjointSetArray.union(index1, index2);
  }
}
