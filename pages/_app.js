import './css/base.styl'
import React, { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  const setRem = async () => {
    await require('lib-flexible')
  }

  useEffect(() => {  
    setRem()
    window.addEventListener('resize', setRem)


     // 阻止双击放大
     var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
      var now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
    
    window.addEventListener(
      "touchmove",
      function(event) {
        if(event.scale !== 1) {
          event.preventDefault();
        }
      }, {
        passive: false
      }
    );

     // 禁用双指手势操作
     window.addEventListener('gesturestart', function (event) {
      event.preventDefault();
    });
    window.addEventListener('gesturechange', function (event) {
      event.preventDefault();
    });
    window.addEventListener('gestureend', function (event) {
      event.preventDefault();
    });
    





     
 

    
  })
  return <Component {...pageProps} />
}

export default MyApp
