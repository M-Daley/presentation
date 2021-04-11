import SubSection from './SubSection'
import Audio from './Audio'

export default function OverflowSection({ src, alt, title, bulletList, bg, setHighlight }) {
    return  (
        <section className={`${bg}`}>
            <div className="container">
                <div className="split">
                    <div>
                        <h3>{title}</h3>
                        <SubSection
                            bulletList={[bulletList[0]]}
                            setHighlight={setHighlight}
                        />
                    </div>
                    <div>
                        <img src={src} alt={alt}/>
                        <Audio song="/audio/song.mp3"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="split">
                    <div>
                        <SubSection
                            bulletList={[bulletList[1]]}
                            setHighlight={setHighlight}
                        />
                    </div>
                    <div>
                        <SubSection
                            bulletList={[bulletList[2]]}
                            setHighlight={setHighlight}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}