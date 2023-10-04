'use strict'

const assert = require('assert')
const { chunk } = require('../index')

describe('chunk', () => {
    it('should return an empty array when input is null', () => {
        assert.deepStrictEqual(chunk(null, 1), [])
    })

    it('should return an empty array when size is not a number', () => {
        assert.deepStrictEqual(chunk([1, 2, 3], 'a'), [])
    })

    it('should return an empty array when size is zero', () => {
        assert.deepStrictEqual(chunk([1, 2, 3], 0), [])
    })

    it('should return an empty array when size is negative', () => {
        assert.deepStrictEqual(chunk([1, 2, 3], -1), [])
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