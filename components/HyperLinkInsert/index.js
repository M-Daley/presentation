import { useState, useEffect } from 'react'
import InlineLink from './InlineLink'

export default function LinkInsert({ paragraph, phraseIndex, setHighlight }) {
    const [ newParagraph, setNewParagraph ] = useState(null)

    const itDoThings = () => {
        let sentences = paragraph.split('.')
        sentences.pop()

        let newParagraph = []

        for (let i=0; i < sentences.length; i++) {
            let currentIndex = 0
            let matches = []
            let newSentences = []

            // Get the starting positions of all matched phrases within the string
            for (let phrase of phraseIndex) {
                let re = phrase.key;
                let match = sentences[i].match(re)

                if (match == null) continue

                matches.push({
                    phrase: phrase.key ,
                    id: phrase.id,
                    position: match.index
                })
            }

            // Push JSX Elements into an array
            if (matches != []) {
                for (let j=0; j < matches.length; j++) {
                    newSentences.push({
                        data: sentences[i].slice(currentIndex, matches[j].position),
                        type: "sentenceFragment"
                    })
                    newSentences.push({
                        data: matches[j].phrase,
                        id: matches[j].id,
                        type: "keyword"
                    })

                    currentIndex += currentIndex + matches[j].phrase.length

                    if (j == matches.length - 1) {
                        newSentences.push({
                            data: sentences[i].slice(currentIndex),
                            type: "endOfSentence"
                        })
                    }
                }

                // Inject HTML into the parsed fragments and add too paragraph array
                newParagraph.push(newSentences.map(({ data, id, type }) => {
                    if (type == "sentenceFragment"){
                        return <span>{data}</span>
                    } else if (type == "keyword") {
                        return <InlineLink id={id} data={data} setHighlight={setHighlight}/>
                    } else if (type == "endOfSentence") {
                        return <span>{data}.</span>
                    } else {
                        return
                    }
                }))
            }
        }

        return newParagraph
    }

    useEffect(() => {
        setNewParagraph(itDoThings())
    }, [])

return (
    <p>
        {newParagraph}
    </p>
)}