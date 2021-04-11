import Audio from './Audio'
import SubSection from './SubSection'

export default function SideBySide({ src, alt, direction, title, bulletList, bg, setHighlight, rec }) {
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
                        {rec &&
                            <Audio song={rec}/>
                        }
                    </div>
                </div>
            </div>
        ) : (
            <div className="container">
                <div className="split">
                    <div>
                        <img src={src} alt={alt}/>
                        {rec &&
                            <Audio song={rec}/>
                        }
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