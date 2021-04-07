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
                {pageProps.citations.map(({ id, _, title, link }) => {
                    if (link) {
                        return (
                            <li key={id} id={id}>
                                <a href={link}>
                                    <span className={highlight == id ? 'active-highlight' : 'inactive-highlight'} >
                                        [{id}]{title}
                                    </span>
                                </a>
                            </li>
                        )
                    } else {
                        return (
                            <li key={id} id={id}>
                                <span className={highlight == id ? 'active-highlight' : 'inactive-highlight'} >
                                    [{id}]{title}
                                </span>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    </section>
)}