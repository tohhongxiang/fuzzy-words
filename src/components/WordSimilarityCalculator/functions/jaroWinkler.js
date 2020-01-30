import jaro from './jaro'

function jaroWinkler(word1, word2) {
    let jaroDistance = jaro(word1, word2)
    const p = 0.1 // scaling distance

    let l = 0;
    // l is the length of common prefix at the start of the string up to a max of 4 characters
    for (let i = 0; i < Math.min(word1.length, word2.length, 4); i++) {
        if (word1[i] === word2[i]) {
            l++
        } else {
            break
        }
    }

    return jaroDistance + l*p*(1 - jaroDistance)
}

export default jaroWinkler