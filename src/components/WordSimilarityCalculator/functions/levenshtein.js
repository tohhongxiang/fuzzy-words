function calculateLevenShtein(word1, word1Length, word2, word2Length) {
    if (word1Length === 0) return word2Length
    if (word2Length === 0) return word1Length

    let cost;
    if (word1[word1Length - 1] === word2[word2Length - 1]) {
        cost = 0;
    } else {
        cost = 1;
    }

    return Math.min(
        calculateLevenShtein(word1, word1Length - 1, word2, word2Length) + 1,
        calculateLevenShtein(word1, word1Length, word2, word2Length - 1) + 1,
        calculateLevenShtein(word1, word1Length - 1, word2, word2Length - 1) + cost
    )
}

export default calculateLevenShtein