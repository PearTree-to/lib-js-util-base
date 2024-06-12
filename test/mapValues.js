'use strict'

/* eslint-env mocha */

const assert = require('assert')
const mapValues = require('../src/mapValues')

describe('mapValues', () => {
  const array = [1, 2]
  const object = { a: 1, b: 2 }

  it('should map values in `object` to a new object', () => {
    const actual = mapValues(object, String)
    assert.deepStrictEqual(actual, { a: '1', b: '2' })
  })

  it('should treat arrays like objects', () => {
    const actual = mapValues(array, String)
    assert.deepStrictEqual(actual, { 0: '1', 1: '2' })
  })

  it('should work with `_.property` shorthands', () => {
    const actual = mapValues({ a: { b: 2 } }, 'b')
    assert.deepStrictEqual(actual, { a: 2 })
  })
})
