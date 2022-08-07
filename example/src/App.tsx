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
    </div>
  )
}

export default App
