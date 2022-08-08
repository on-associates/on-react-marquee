import React from 'react'

import Marquee from 'on-react-marquee'
import logo from './logo.png';
import 'on-react-marquee/dist/index.css'

const App = () => {
  return (
    <div>
      <div className="marquee-wrapper">
        <p className="description">Filled gaps marquee</p>
        <Marquee
          play={true}
          speed={80}
          pauseOnHover
          fillGaps
        >
          {[...Array.from({ length: 11 })].map((_, i) => (
            <p key={i}>{i}</p>
          ))}
        </Marquee>
      </div>
      <div className="marquee-wrapper">
        <p className="description">Text marquee</p>
        <Marquee
          play={true}
          speed={80}
          fillGaps={false}
        >
          <p style={{ whiteSpace: 'nowrap' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veritatis porro eligendi enim aliquid eaque odit officiis! Laboriosam eligendi quisquam commodi, eos eius dolorem rem quae! Adipisci ea culpa atque. enim aliquid eaque odit officiis! Laboriosam eligendi quisquam commodi, eos eius dolorem rem quae! Adipisci ea culpa atque.</p>
        </Marquee>
      </div>
      <div className="marquee-wrapper">
        <p className="description">Image marquee</p>
        <Marquee
          play={true}
          speed={80}
          fillGaps
        >
          {[...Array.from({ length: 12 })].map((_, i) => (
            <img key={i} alt="Logo" src={logo} style={{ width: 100 }} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default App
