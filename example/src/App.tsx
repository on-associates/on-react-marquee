import React from 'react'

import Marquee from 'on-react-marquee'
import 'on-react-marquee/dist/index.css'

const App = () => {
  return (
    <div>
      <Marquee
        play={true}
        speed={80}
        pauseOnHover
      >
        {[...Array.from({ length: 11 })].map((_, i) => (
          <p key={i}>{i}</p>
        ))}
      </Marquee>
      <Marquee
        play={true}
        speed={80}
        fillGaps={false}
      >
        <p style={{ whiteSpace: 'nowrap' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veritatis porro eligendi enim aliquid eaque odit officiis! Laboriosam eligendi quisquam commodi, eos eius dolorem rem quae! Adipisci ea culpa atque.</p>

      </Marquee>
    </div>
  )
}

export default App
