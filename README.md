# react-img-fallback
## Install
`yarn add react-img-fallback`

or

`npm install --save react-img-fallback`

## Component by an example
### URL images to print : ![alt tag](https://s-media-cache-ak0.pinimg.com/736x/fe/92/c0/fe92c04bd02a5f740a7611c6379b2878.jpg)
We want to draw this image (**BeautifulPonyWithHorn.jsx**):
```es6
import React from 'react'
import ImgFallback from 'react-img-fallback'

export default ({}) => {
  const fallbackUrl = 'http://sickponywithouthorn.png' 

  return (
    <ImgFallback
      src={picture}
      alt="avatar"
      fallback={fallbackUrl}
     >
    </ImgFallback>
  )
}
```

If pony is sick, the fallback url is printed on img fallback !

### If your fallback is a component
```es6
import React from 'react'
import ImgFallback from 'react-img-fallback'

export default ({}) => {
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

  return (
    <ImgFallback
      src={picture}
      alt="avatar"
      fallback={Fallback}
    >
    </ImgFallback>
  )
}
```
