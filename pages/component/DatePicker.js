import React, { useEffect, useRef, useState } from 'react'
import BScroll from '@better-scroll/core'
import '../css/datePicker.styl'
function datePicker() {
  const scroll = useRef()
  const [dateList, setDateList] = useState([
      'Mon1','Tus','Thi','Fou','Fri','Sat','Sun','Weekly Report',
      'Mon','Tus','Thi','Fou','Fri','Sat','Sun','Weekly Report',
      'Mon','Tus','Thi','Fou','Fri','Sat','Sun','Weekly Report'
  ])
  useEffect(() => {
    setTimeout(() => {
      new BScroll(scroll.current, {
        scrollX: true,
        probeType: 3,
        bounce: true
      })
    })
  }, [])
  const list = dateList.map((item, index) => {
    return (
      <div className={`scroll-item  ${index%8===0?"weekly":null}`} key={index} >
        <div className="fc-hui3 date-title">
            {item}
        </div>
        <div className="date-content">
            6
        </div>
       
      </div>
    )
  })
  return (
    <div className="datePickers">
      <div className="report-date-title flex-items-center fs-16 pl-24">
        December, <span className="fc-hui6 ml-4">2020</span>
      </div>
      <div className="scroll-wrapper" ref={scroll}>
        <div className="scroll-content fs-12">{list}</div>
      </div>
    </div>
  )
}
export default datePicker
