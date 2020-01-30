function cosine(word1, word2) {
    const uniqueTokens = getAllUniqueTokens(word1, word2)

    const vector1 = generateVector(uniqueTokens, word1)
    const vector2 = generateVector(uniqueTokens, word2)

    const angle = dot(vector1, vector2)/(magnitude(vector1)*magnitude(vector2))
    return angle
}

/**
 * Converts a word into a frequency dictionary
 * @param {string} word 
 * @return {Object} freqDict
 * @example word2freqDict('aabc') = {a: 2, b: 1, c: 1}
 */
function word2freqDict(word) {
    const dict = {}
    const letters = word.split('')
    letters.forEach(letter => {
        if (dict[letter]) {
            dict[letter] += 1
        } else {
            dict[letter] = 1
        }
    })

    return dict
}

/**
 * Gets all the unique letters from 2 words
 * @param {string} word1 
 * @param {string} word2 
 * @returns {Object} uniqueLetters
 * @example getAllUniqueTokens('aabc', 'cccd') = {a: true, b: true, c: true, d: true}
 */
function getAllUniqueTokens(word1, word2) {
    const uniqueLetters = {}
    for (const letter of word1) {
        uniqueLetters[letter] = true
    }
    for (const letter of word2) {
        uniqueLetters[letter] = true
    }
    return uniqueLetters
}

/**
 * Generates a vector from a uniqueTokens dict and a string
 * @param {Object} uniqueTokens 
 * @param {string} word 
 * @return {Array} vector
 * @example generateVector({a: true, b: true, c: true, d: true}, 'aacd') = [2, 0, 1, 1]
 */
function generateVector(uniqueTokens, word) {
    const vector = []
    const freqDict = word2freqDict(word)
    for (const letter of Object.keys(uniqueTokens)) {
        vector.push(freqDict[letter] || 0)
    }

    return vector
}

function dot(vector1, vector2) {
    if (vector1.length !== vector2.length) return NaN
    let total = 0
    for (let i = 0; i < vector1.length; i++) {
        total += vector1[i]*vector2[i]
    }

    return total
}

function magnitude(vector) {
    let total = 0
    for (let i = 0; i < vector.length; i++) {
        total += vector[i]*vector[i]
    }

    return Math.sqrt(total)
}

export default cosine