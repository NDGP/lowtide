const assertEqual = require('../assertEqual');
const eqArraysEquals = require('../assertArraysEqual');

assertEqual(eqArraysEquals([1,2,3],[1,2,3]),true)
assertEqual(eqArraysEquals([1,2,3],[1,2,4]),false)
assertEqual(eqArraysEquals([1,2,3],[1,2,"3"]),false)

