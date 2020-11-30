import './css/base.styl'
import React, { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  const setRem = async () => {
    await require('lib-flexible')
  }

  useEffect(() => {  
    setRem()
    window.addEventListener('resize', setRem)
    document.body.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault()
      },
      { passive: false }
    )
  })
  return <Component {...pageProps} />
}

export default MyApp
