'use strict'

const chunk = (arr, size) => {
    
    if (typeof size !== 'number') return []
    
    if (size < 1 || !arr) return []
    
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    
    return chunks
}

module.exports = chunk


