import React, { useEffect, useRef, useState } from 'react'
import BScroll from '@better-scroll/core'
import '../css/datePicker.styl'
function datePicker() {
  const scroll = useRef()
  let dateData=[
    {
      name:'Mon',
      checked:false
    },
    {
      name:'Tus',
      checked:false
    },
    {
      name:'Thi',
      checked:false
    },
    {
      name:'Fou',
      checked:false
    },
    {
      name:'Fri',
      checked:false
    },
    {
      name:'Sat',
      checked:false
    },
    {
      name:'Sun',
      checked:false
    },
    {
      name:'Weekly Report',
      checked:false
    },
    {
      name:'Mon',
      checked:false
    },
    {
      name:'Tus',
      checked:false
    },
    {
      name:'Thi',
      checked:false
    },
    {
      name:'Fou',
      checked:false
    },
    {
      name:'Fri',
      checked:false
    },
    {
      name:'Sat',
      checked:false
    },
    {
      name:'Sun',
      checked:false
    },
    {
      name:'Weekly Report',
      checked:false
    },
    {
      name:'Mon',
      checked:false
    },
    {
      name:'Tus',
      checked:false
    },
    {
      name:'Thi',
      checked:false
    },
    {
      name:'Fou',
      checked:false
    },
    {
      name:'Fri',
      checked:false
    },
    {
      name:'Sat',
      checked:false
    },
    {
      name:'Sun',
      checked:false
    },
    {
      name:'Weekly Report',
      checked:false
    },
    {
      name:'Mon',
      checked:false
    },
    {
      name:'Tus',
      checked:false
    },
    {
      name:'Thi',
      checked:false
    },
    {
      name:'Fou',
      checked:false
    },
    {
      name:'Fri',
      checked:false
    },
    {
      name:'Sat',
      checked:false
    },
    {
      name:'Sun',
      checked:false
    },
    {
      name:'Weekly Report',
      checked:false
    }
  ]
  const [dateList, setDateList] = useState(dateData)
  // 点击选择日期
  const handleClickDate=(index)=>{
    dateData.forEach((item,index)=>{
      item.checked=false;
    })
    dateData[index].checked=true;
    setDateList(JSON.parse(JSON.stringify(dateData)));

  }
  useEffect(() => {
    // 初始化日期
    setTimeout(() => {
      new BScroll(scroll.current, {
        scrollX: true,
        probeType: 3,
        bounce: true,
        click:true
      })
    })
  }, [])
  const list = dateList.map((item, index) => {
    return (
      <div className={`scroll-item ${(index+1)%8===0?"weekly":''} ${item.checked?"active":""}`} onClick={()=>{handleClickDate(index)}} key={index}>
      
        <div className="date-title">
            {item.name}
        </div>
        <div className="date-content">
            {
              (index+1)%8===0?"11/30~12/07":(index+1)%8
            }
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
