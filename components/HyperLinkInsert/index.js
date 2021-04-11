import { useState, useEffect } from 'react'
import InlineLink from './InlineLink'
import pageProps from '../pageProps'


export default function LinkInsert({ bulletItem, setHighlight }) {
    const [newSentence, setNewSentence] = useState(null)

    const insertLinks = () => {
        let sentence = []
        let sentenceFragmentContainer = []
        let currentIndex = 0
        let matches = []
        let phraseIndex = pageProps.phraseIndex

        for (let phrase of phraseIndex) {
            let re = phrase.key.replace(/\(/, '\\(').replace(/\)/, '\\)')
            let match = bulletItem.match(re)

            if (match == null) continue
        
            matches.push({
                phrase: phrase.key,
                id: phrase.id,
                position: match.index
            })
        }

        if (matches.length > 0) {
            for (let j=0; j < matches.length; j++) {
                sentenceFragmentContainer.push({
                    data: bulletItem.slice(currentIndex, matches[j].position),
                    type: "sentenceFragment"
                })

                sentenceFragmentContainer.push({
                    data: matches[j].phrase,
                    id: matches[j].id,
                    type: "keyword"
                })

                currentIndex += currentIndex + matches[j].phrase.length + matches[j].position

                if (j == matches.length - 1) {
                    sentenceFragmentContainer.push({
                        data: bulletItem.slice(currentIndex),
                        type: "endOfSentence"
                    })
                }
            }

            sentence.push(sentenceFragmentContainer.map(({ data, id, type }) => {
                switch(type) {
                    case 'sentenceFragment':
                        return <span>{data}</span>
                    case 'keyword':
                        return <InlineLink id={id} data={data} setHighlight={setHighlight}/>
                    case 'endOfSentence':
                        return <span>{data}</span>
                    default:
                        break

                }
            }))

        } else {
            sentence.push(<span>{bulletItem}</span>)
        }

        return sentence
    }

    useEffect(() => {
        setNewSentence(insertLinks())
    }, [])

return (
    <p>
        {newSentence}
    </p>
)}