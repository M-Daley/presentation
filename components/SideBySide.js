import Audio from './Audio'
import SubSection from './SubSection'

export default function SideBySide({ src, alt, direction, title, bulletList, bg, setHighlight }) {
    const imageLocation = direction == "left"

return (
  <section className={`${bg}`}>
    {imageLocation
        ? (
            <div className="container">
                <div className="split">
                    <div>
                        <h3>{title}</h3>
                        <SubSection
                            bulletList={bulletList}
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
                        <SubSection 
                            bulletList={bulletList}
                            setHighlight={setHighlight}
                        />
                    </div>
                </div>
            </div>
        )
    }
  </section>  
)}