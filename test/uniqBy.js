'use strict'

/* eslint-env mocha */

const uniqBy = require('../src/uniqBy.js')
const assert = require('assert')

describe('uniqBy', () => {
  it('should return an array with unique elements based on the iteratee function', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const iteratee = (el) => el % 2
    const result = uniqBy(arr, iteratee)
    assert.deepStrictEqual(result, [1, 2])
  })

  it('should return an array with unique elements based on the property name', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Jane' },
    ]
    const iteratee = 'name'
    const result = uniqBy(arr, iteratee)
    assert.deepStrictEqual(result, [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })

  it('should return an empty array if the input array is empty', () => {
    const arr = []
    const iteratee = (el) => el
    const result = uniqBy(arr, iteratee)
    assert.deepStrictEqual(result, [])
  })

  it('should return the same array if there are no duplicate elements', () => {
    const arr = [1, 2, 3, 4, 5]
    const iteratee = (el) => el
    const result = uniqBy(arr, iteratee)
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5])
  })

  it('should return array of unique elements if iteratee is not provided', () => {
    const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
    const result = uniqBy(arr)
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5])
  })
})
