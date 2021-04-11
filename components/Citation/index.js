import { useEffect } from 'react'
import pageProps from '../pageProps'

export default function Citation({ highlight, setHighlight }) {
    useEffect(() => {
        setTimeout(() => {
            setHighlight(null)
        }, 5000)
    }, [highlight])

return (
    <section>
        <div className="container" id="cite">
            <h2 className="text-center">Citations</h2>
            <ul className="cite-item">
                {[...new Set(pageProps.citations.map(({ id, author, title, date, book, bin }) => {
                    return (
                        <li key={id} id={id}>
                            <span className={highlight == id ? 'active-highlight' : 'inactive-highlight'} >
                                [{id}]{author} {date} {title} <i>{book}</i> {bin}
                            </span>
                        </li>
                    )
                }))]}
            </ul>
        </div>
    </section>
)}