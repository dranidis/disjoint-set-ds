[![npm version](https://badge.fury.io/js/disjoint-set-ds.svg)](https://badge.fury.io/js/disjoint-set-ds)
[![Build Status](https://travis-ci.com/dranidis/disjoint-set-ds.svg?branch=main)](https://travis-ci.com/dranidis/disjoint-set-ds)
[![Coverage Status](https://coveralls.io/repos/github/dranidis/disjoint-set-ds/badge.svg)](https://coveralls.io/github/dranidis/disjoint-set-ds)
[![Dependencies Status](https://status.david-dm.org/gh/dranidis/disjoint-set-ds.svg)](https://status.david-dm.org/gh/dranidis/disjoint-set-ds)
![CI workflow](https://github.com/dranidis/disjoint-set-ds/actions/workflows/main.yml/badge.svg)

# Disjoint Set data structure

A disjoint-set data structure stores a collection of disjoint (non-overlapping) sets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. Disjoint-set data structures play a key role in Kruskal's algorithm for finding the minimum spanning tree of a graph. 

For more information read: https://en.wikipedia.org/wiki/Disjoint-set_data_structure


In contrast to other available implementations of the data structure, the data structure does not assume that the elements stored are 0, 1, 2, ... but the actual elements are provided to makeSet and are being stored. The elements can be of any type.

## Usage

```javascript
import { DisjointSet } from 'disjoint-set-ds';

var ds = new DisjointSet();

ds.makeSet('Alice');
ds.makeSet('Bob');

console.log(ds.find('Alice')); // Alice
console.log(ds.find('Bob')); // Bob

ds.union('Bob', 'Alice');

console.log(ds.find('Alice')); // Bob <---
console.log(ds.find('Bob')); // Bob
```

An auxiliary data structure ```DisjointSetArray``` is also provided for the simple case that the stored elements are the numbers 0, 1, 2, ...

```javascript
import { DisjointSetArray } from "disjoint-set-ds";

var ds = new DisjointSetArray(3);

console.log(ds.find(0)); // 0
console.log(ds.find(1)); // 1
console.log(ds.find(2)); // 2

ds.union(0, 2);

console.log(ds.find(0)); // 0
console.log(ds.find(1)); // 1
console.log(ds.find(2)); // 0 <---
```
