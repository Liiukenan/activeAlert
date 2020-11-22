// import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
function MyApp({ Component, pageProps }) {
   const setRem = async ()=>{
        await require('lib-flexible')
    }
    useEffect(()=>{
        setRem()
        window.addEventListener('resize',setRem)
    })
  return <Component {...pageProps} />
}

export default MyApp
