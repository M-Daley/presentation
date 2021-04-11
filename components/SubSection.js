import LinkInsert from './HyperLinkInsert'

export default function SubSection({ bulletList, setHighlight }) {
    return (
        <div className="subsection-container">
            {
                bulletList.map((subSection, idx) => (
                    <div key={`${subSection.title.slice(0, 3)}-${idx}`} className="subsection">
                        <h4>{
                            <LinkInsert
                                bulletItem={subSection.title}
                                setHighlight={setHighlight}
                            />
                            }</h4>
                        <ul>
                            {subSection.data.map((item, idx) => (
                                <li key={`${subSection.title.slice(0, 3)}}li-${idx}`}>
                                    <LinkInsert
                                        bulletItem={item}
                                        setHighlight={setHighlight}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}