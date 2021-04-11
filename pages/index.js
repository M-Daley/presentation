import SideBySide from '../components/SideBySide'
import Split from '../components/Split'
import pageProps from '../components/pageProps'
import Citation from '../components/Citation'

import { useState } from 'react'
import OverflowSection from '../components/OverflowSection'

export default function Home() {
  const [highlight, setHighlight] = useState(33)

  return (
    <div>
      <Split />
      <SideBySide setHighlight={setHighlight} {...pageProps.section_one}/>
      <SideBySide setHighlight={setHighlight} {...pageProps.section_two}/>
      <OverflowSection setHighlight={setHighlight} {...pageProps.section_three}/>
      <SideBySide setHighlight={setHighlight} {...pageProps.section_four} />
      <Citation setHighlight={setHighlight} highlight={highlight}/>
    </div>
  )
}
