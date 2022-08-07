# on-react-marquee

> A lightweight react marquee component with filling gaps functionality

[![NPM](https://img.shields.io/npm/v/on-react-marquee.svg)](https://www.npmjs.com/package/on-react-marquee) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save on-react-marquee
```
```bash
yarn add on-react-marquee
```

## Usage

```tsx
import React, { Component } from 'react'

import Marquee from 'on-react-marquee'
import 'on-react-marquee/dist/index.css'

const Example = ()  => {
  render() {
    return (
      <Marquee>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        ...
      </Marquee>
    )
  }
}
```

| Property                 | type                  | Default Value | Description                                  |
|--------------------------|-----------------------|---------------|----------------------------------------------|
| children                 | ReactNode             | `null`        | nodes                                        |
| speed                    | Number                | `80`          | pixels / second                              |
| pauseOnHover             | Boolean               | `false`       | to pause on hover                            |
| direction                | `'left'` or `'right'` | `left`        | direction of marquee                         |
| loop                     | Number or String      | `infinite`    | number of times marquee plays                |
| play                     | Boolean               | `true`        | to play or pause the animation               |
| fillGaps                 | Boolean               | `true`        | clones the marque to fit screen without gaps |
| onAnimationCycleComplete | Func                  | `null`        | callback function for each cycle             |
|                          |                       |               |                                              |
|                          |                       |               |                                              |
|                          |                       |               |                                              |
|                          |                       |               |                                              |
|                          |                       |               |                                              |
|                          |                       |               |                                              |

## License

MIT © [cemarguvanli](https://github.com/cemarguvanli)
