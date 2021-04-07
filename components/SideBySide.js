import Audio from './Audio'
import LinkInsert from './HyperLinkInsert'
import pageProps from './pageProps'

export default function SideBySide({ src, alt, direction, title, description, bg, setHighlight }) {
    const imageLocation = direction == "left"

return (
  <section className={`${bg}`}>
    {imageLocation
        ? (
            <div className="container">
                <div className="split">
                    <div>
                        <h3>{title}</h3>
                        <LinkInsert
                            paragraph={description}
                            phraseIndex={pageProps.citations}
                            setHighlight={setHighlight}
                        />
                    </div>
                    <div>
                        <img src={src} alt={alt}/>
                        <Audio song="/audio/song.mp3"/>
                    </div>
                </div>
            </div>
        ) : (
            <div className="container">
                <div className="split">
                    <div>
                        <img src={src} alt={alt}/>
                        <Audio song="/audio/song.mp3"/>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <LinkInsert
                            paragraph={description}
                            phraseIndex={pageProps.citations}
                            setHighlight={setHighlight}
                        />
                    </div>
                </div>
            </div>
        )
    }
  </section>  
)}