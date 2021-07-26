# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rafaysiddiqui_/lotide`

**Require it:**

`const _ = require('@rafaysiddiqui_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of an array
* `tail(array)`: returns all but the first element of an array
* `middle(array)`: returns the middle element(s) of an array
* `countLetters(string)`: returns the letter count of each character in a string
* `countOnly(itemsArray, itemsToCountObject)`: Counts the number of occurrences of elements specified in an object
* `findKey(object, callback)`: Returns an object's key that has a value specified by callback function
* `findKeyByValue(object, value)`: Returns an object's key that has the specified value
* `letterPositions(sentence)`: Returns an object with the index of all occurrences of every letter in a given sentence
* `map(array, callback)`: Returns a modified copy of a specified array based on callback function specifications
* `takeUntil(array, callback)`: Returns an array up to an element that matches the conditions specified in callback
* `without(array1, array2)`: returns array1 excluding any element specified in array2
* `assertArraysEqual(actual, expected)`: Asserts whether the actual array matches the expected array
* `assertEqual(actual, expected)`: Asserts whether two basic data types are equal
* `assertObjectsEqual(actual, expected)`: Asserts whether the actual object literal matches the expected object literal
* `eqArrays(array1, array2)`: Calculates whether the value of two arrays is equal
* `eqObjects(object1, object2)`: Calculates whether the value of two objects is equal