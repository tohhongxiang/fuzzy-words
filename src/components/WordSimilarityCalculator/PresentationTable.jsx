import React from 'react'

export default function PresentationTable({headers, results}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>{headers.map(title => <th key={title}>{title}</th>)}</tr>
                </thead>
                <tbody>
                    {results ? results.map(result => (
                        <tr key={result.algorithm}>
                            <td>{result.algorithm}</td>
                            <td>{result.result.toString()}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </div>
    )
}
