import React, { useEffect,useRef } from 'react'
import BScroll from '@better-scroll/core'
import DatePicker from './component/DatePicker'
import './css/report.styl'

function Report() {
        const scroll=useRef();
        useEffect(() => {
        //  const bscroll= new BScroll(scroll.current, {
        //     scrollX: true,
        //     useTransition:true,
        //     eventPassthrough:'vertical'
        //   })
        }, []);
        return (
            <div className="report">
               <DatePicker />
            </div>
        );
    }
export default Report;