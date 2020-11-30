import React, { useEffect,useRef,useState} from 'react'
import BScroll from '@better-scroll/core'
import '../css/datePicker.styl'
function datePicker() {
        const scroll=useRef();
        const [emojis,setEmojis]=useState([
            '👉🏼 😁 😂 🤣 👈🏼',
            '😄 😅 😆 😉 😊',
            '😫 😴 😌 😛 😜',
            '👆🏻 😒 😓 😔 👇🏻',
            '😑 😶 🙄 😏 😣',
            '😞 😟 😤 😢 😭',
            '🤑 😲 ☹️ 🙁 😖',
            '👍 👎 👊 ✊ 🤛',
            '☝️ ✋ 🤚 🖐 🖖',
            '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
            '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
            '🌖 🌗 🌘 🌑 🌒'
          ])
        useEffect(() => {
            setTimeout(() => {
              new BScroll(scroll.current, {
                    scrollX: true,
                    probeType:3,
                    bounce:true
                })  
            });
            
             
            
        }, []);
        const list=emojis.map((item,index)=>{
             return(
                 <div className="scroll-item"  key={index}>{item}</div>
             )              
        })
        return (
            <div className="datePickers">
               <div className="horizontal-container">
                    <div className="scroll-wrapper" ref={scroll}>
                        <div className="scroll-content">
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default datePicker;