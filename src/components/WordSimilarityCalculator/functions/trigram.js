/**
 * From 2 words, pad each word with _ in front and behind
 * Generate trigrams from new word
 * Count the total number of unique trigrams (Total)
 * Count the number of trigrams which appear in both word 1 and word 2 (Matching)
 * Return matching/total
 * @param {string} word1 
 * @param {string} word2 
 */
function trigram(word1, word2) {
    const trigrams1 = generateTrigrams(word1)
    const trigrams2 = generateTrigrams(word2)

    const uniqueTrigrams = getUnique([...trigrams1, ...trigrams2])

    let total = uniqueTrigrams.length;
    let matching = 0;

    for (let trigram1 of trigrams1) {
        for (let trigram2 of trigrams2) {
            if (trigram1 === trigram2) matching++
        }
    }

    return matching/total
}

function generateTrigrams(word) {
    const trigrams = []
    const paddedWord = '_' + word + '_'
    for (let i = 0; i < paddedWord.length - 2; i++) {
        trigrams.push(paddedWord.slice(i, i + 3))
    }

    return trigrams
}

function getUnique(a) {
    return a.filter((item, i, ar) => ar.indexOf(item) === i);
}

export default trigram