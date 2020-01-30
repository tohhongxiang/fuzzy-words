import React, { useState, useEffect } from 'react'
import styles from './WordInput.module.css'
import calculateLevenShtein from './functions/levenshtein'
import calculateTrigramSimilarity from './functions/trigram'
import calculateCosineSimilarity from './functions/cosine'
import calculateJaroSimilarity from './functions/jaro'
import calculateJaroWinklerSimilarity from './functions/jaroWinkler'
import calculateHammingDistance from './functions/hamming'
import PresentationTable from './PresentationTable'

export default function WordInput() {
    const [word1, setWord1] = useState('')
    const [word2, setWord2] = useState('')

    const [similarity, setSimilarity] = useState({
        levenshteinDistance: 0,
        trigramSimilarity: 0,
        cosineSimilarity: 0,
        jaroSimilarity: 0,
        jaroWinklerSimilarity: 0,
        hammingDistance: 0
    })

    const handleChange = name => e => {
        switch(name) {
            case 'word1':
                setWord1(e.target.value)
                break
            case 'word2':
                setWord2(e.target.value)
                break
            default:
                break
        }
    }

    useEffect(() => {
        let timeOutHandler = setTimeout(() => {
            const levenshteinDistance = calculateLevenShtein(word1, word1.length, word2, word2.length)
            const trigramSimilarity = calculateTrigramSimilarity(word1, word2)
            const cosineSimilarity = calculateCosineSimilarity(word1, word2)
            const jaroSimilarity = calculateJaroSimilarity(word1, word2)
            const jaroWinklerSimilarity = calculateJaroWinklerSimilarity(word1, word2)
            const hammingDistance = calculateHammingDistance(word1, word2)

            setSimilarity({
                levenshteinDistance, 
                trigramSimilarity, 
                cosineSimilarity, 
                jaroSimilarity, 
                jaroWinklerSimilarity,
                hammingDistance
            })
        }, 1000) 
        
        return () => clearTimeout(timeOutHandler)
    }, [word1, word2])

    const results = Object.entries(similarity).map(([key, value]) => ({algorithm: key, result: Math.round(value*10000)/10000}))
    return (
        <div className={styles.root}>
            <header className={styles.headers}>
                <h1>Word Similarity Algorithms</h1>
            </header>
            <div className={styles.flex}>
                <input value={word1} onChange={handleChange('word1')} placeholder={"Text 1"} className={styles.input}/>
                <input value={word2} onChange={handleChange('word2')} placeholder={"Text 2"} className={styles.input}/>
            </div>
            <div className={styles.tableContainer}>
                <PresentationTable headers={['Algorithm', 'Result']} results={results} className={styles.presentationTable}/>
            </div>
        </div>
    )
}
