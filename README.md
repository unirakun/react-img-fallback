# react-img-fallback
[![CircleCI](https://circleci.com/gh/unirakun/react-img-fallback.svg?&style=shield&circle-token=)](https://circleci.com/gh/unirakun/react-img-fallback/tree/master) [![NPM Version](https://badge.fury.io/js/react-img-fallback.svg)](https://www.npmjs.com/package/react-img-fallback) [![Coverage Status](https://coveralls.io/repos/github/Trampss/react-img-fallback/badge.svg?branch=master)](https://coveralls.io/github/Trampss/react-img-fallback?branch=master)

## Install
`yarn add react-img-fallback`

or

`npm install --save react-img-fallback`

## Description
This component is designed for implement the `onError` function of Image component, just one time.
The goal is to give a new source url or a fallback component when the `src` url is on error.

## Prerequisites
This library use `recompose` for optimize rendering : https://github.com/acdlite/recompose

## API
| PropTypes     |       Type (Default)     |    Description  |
|:--------------|:------------------------:|----------------:|
| **style**     | `object` (empty)         | inline style extends component     |
| **className** | `string` (empty)         | name class extends component       |
| **src**       | `string` (undefined)     | url source extends image component |
| **alt**       | `string` (empty)         | alt tag extends image component    |
| **fallback**  |  `Component` or `string` | the fallback if image on error     |
| **onClick**   | `function` (undefined)   | callback called when image clicked |

## Component by an example
### URL images to print : ![alt tag](https://s-media-cache-ak0.pinimg.com/736x/fe/92/c0/fe92c04bd02a5f740a7611c6379b2878.jpg)
We want to draw this image (**BeautifulPonyWithHorn.jsx**):
```es6
import React from 'react'
import ImgFallback from 'react-img-fallback'

export default () => {

  /* Url for take a beautyful unicorn ! */
  const ponyUrl = 'https://s-media-cache-ak0.pinimg.com/736x/fe/92/c0/fe92c04bd02a5f740a7611c6379b2878.jpg'

  /* Fallback Url (sick pony with horn) */
  const fallbackUrl = 'http://sickponywithouthorn.png'

  return (
    <ImgFallback
      style={{width: '250px'}}
      src={ponyUrl}
      alt="ponyWithHorn"
      fallback={FallbackUrl}
      onClick={() => alert('unicorn POWER')}
    >
    </ImgFallback>
  )
}
```

If pony is sick, the fallback url is printed on img fallback !

### If your fallback is a component
[Demo](https://www.webpackbin.com/bins/-KgjzE83zUAP2XLyVM6o) is ready and online with WebPackBin
```es6
import React from 'react'
import ImgFallback from 'react-img-fallback'

export default () => {
  /* Url for take a beautyful unicorn ! */
  const ponyUrl = 'https://s-media-cache-ak0.pinimg.com/736x/fe/92/c0/fe92c04bd02a5f740a7611c6379b2878.jpg'

  /* Fallback Component (sick pony with horn) */
  const Fallback = (
    <pre>
                         n
              |\   |  or
             _| \-/ic
            /    un
          //    ~ + \
         //         |
        //    \      \
       |||     | .  .|
      ///     / \___/
    </pre>
   )

    <ImgFallback
      style={{width: '250px'}}
      src={ponyUrl}
      alt="ponyWithHorn"
      fallback={Fallback}
      onClick={() => alert('unicorn POWER')}
    >
    </ImgFallback>
  )
}
```

# About uni rakun
**uni rakun** is created by two passionate french developers.

Do you want to contact them ? Go to their [website](https://unirakun.fr)

<table border="0">
 <tr>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/26094222?s=460&v=4" width="100" /></td>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/17828231?s=460&v=4" width="100" /></td>
 </tr>
 <tr>
  <td align="center"><a href="https://github.com/guillaumecrespel">Guillaume CRESPEL</a></td>
  <td align="center"><a href="https://github.com/fabienjuif">Fabien JUIF</a></td>
</table>
