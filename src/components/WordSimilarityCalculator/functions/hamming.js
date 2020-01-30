function hamming(word1, word2) {
    if (word1.length !== word2.length) {
        return NaN
    } 

    let dist = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i])  dist++
    }

    return dist
}

export default hamming