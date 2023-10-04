'use strict'

const chunk = (arr, size) => {
  if (typeof size !== 'number') throw new TypeError('size must be a number')

  if (size < 1 || !arr) throw new Error('size must be greater than 0 and arr must not be null')

  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }

  return chunks
}

module.exports = chunk
