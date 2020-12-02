import React, { useRef, useState, useEffect } from 'react'
import BScroll from '@better-scroll/core'
import '../css/datePicker.styl'
import axios from 'axios'
function datePicker(props) {
  const scroll = useRef()
  const [dateList, setDateList] = useState([])
  const getData = () => {
    return new Promise(() => {
      axios
        .post(
          'https://www.fastmock.site/mock/348b3d6d2caee5a41791c6b57688ac48/hiyya/list',
          { todayTime: 1606914592000 }
        )
        .then((res) => {
          setDateList(res.data.data.dataList)
          setTimeout(()=>{
             // 初始化日期
              new BScroll(scroll.current, {
                scrollX: true,
                probeType: 3,
                bounce: true,
                click: true
              })
          })
        })
    })
  }


  // 点击选择日期
  const handleClickDate = (index) => {
    dateData.forEach((item) => {
      item.checked = false
    })
    dateData[index].checked = true
    setDateList(JSON.parse(JSON.stringify(dateData)))
  }
  useEffect(() => {
    getData();

  }, [])
  const list = dateList.map((item, index) => {
    return (
      <div
        className={`scroll-item ${(index + 1) % 8 === 0 ? 'weekly' : ''} ${
          item.checked ? 'active' : ''
        }`}
        onClick={() => {
          handleClickDate(index)
        }}
        key={index}
      >
        <div className="date-title"> {item.name}</div>
        <div className="date-content">
          {(index + 1) % 8 === 0 ? '11/30~12/07' : (index + 1) % 8}
        </div>
      </div>
    )
  })
  // const list=''
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
