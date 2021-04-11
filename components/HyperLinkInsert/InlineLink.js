import { useState } from 'react'
import { Link } from 'react-scroll'

export default function InlineLink({ id, data, setHighlight }) {
    const [linkClicked, setLinkClicked] = useState(false)

    const triggerScrollAndHighlight = () => {
        setLinkClicked(true)
        setHighlight(id)
    }
    
    return (
        <Link className={`intext-link ${linkClicked ? 'active-link': ''}`} to="cite" activeClass="active" spy={true} smooth={600}>
            <span onClick={triggerScrollAndHighlight}>{data}</span>
        </Link>
    )
}