'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { chunk } = require('../index')

describe('chunk', () => {
  it('should throw a TypeError when size is not a number', () => {
    assert.throws(() => chunk([1, 2, 3], 'a'), TypeError)
  })

  it('should throw an Error when size is less than 1', () => {
    assert.throws(() => chunk([1, 2, 3], 0), Error)
  }
  )

  it('should throw an Error when input is null', () => {
    assert.throws(() => chunk(null, 1), Error)
  })

  it('should throw when size is negative', () => {
    assert.throws(() => chunk([1, 2, 3], -1), Error)
  })

  it('should return an empty array when input is empty', () => {
    assert.deepStrictEqual(chunk([], 1), [])
  })

  it('should return a new array with chunks of the specified size', () => {
    assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
  })

  it('should return a new array with chunks of the specified size', () => {
    assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]])
  })

  it('should return a new array with chunks of the specified size', () => {
    assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]])
  })
})
