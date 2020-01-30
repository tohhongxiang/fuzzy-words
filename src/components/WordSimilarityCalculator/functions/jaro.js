function jaro(word1, word2) {
    // turn words into array
    const letters1 = word1.split('')
    const letters2 = word2.split('')

    let m = 0;
    let t = 0;
    const maxDist = Math.floor(Math.max(letters1.length, letters2.length)/2) - 1 // the furthest distance that a character in 1 word can be from a character in the other word
    // if 2 characters match, we will place them into these 2 arrays
    let assignedIndexes1 = []
    let assignedIndexes2 = []

    for (let i = 0; i < letters1.length; i++) {
        const currentLetter = letters1[i]
        const positionOfLetterInOtherWord = letters2.indexOf(currentLetter, Math.max(0, i - maxDist))
        if (positionOfLetterInOtherWord !== -1 && Math.abs(i - positionOfLetterInOtherWord) <= maxDist) { // if the letter is not further than the max distance away
            m++
            assignedIndexes1.push(i)
            assignedIndexes2.push(positionOfLetterInOtherWord)
        }
    }

    // sort assigned indexes in increasing order
    assignedIndexes1.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
    assignedIndexes2.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)

    // turn them back into letters
    const matchingLetters1 = assignedIndexes1.map(index => letters1[index])
    const matchingLetters2 = assignedIndexes2.map(index => letters2[index])

    // if the positions are not the same, add 1 to t
    for (let i = 0; i < Math.min(matchingLetters1.length, matchingLetters2.length); i++) {
        if (matchingLetters1[i] !== matchingLetters2[i]) t++
    }

    t /= 2;

    const s1 = letters1.length
    const s2 = letters2.length

    if (m === 0) return 0
    return (1/3)*(m/s1 + m/s2 + (m-t)/m)
}

export default jaro