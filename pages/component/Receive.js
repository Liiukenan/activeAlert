import React from 'react'
import '../css/receive.styl'
function Receive() {
        return (
            <div className="receive">
               <div className="title flex-items-center">
                   <img src="./images/ic_gem.png" alt="" className="ml-23"/>
                   <span className="fs-16 ml-7">Total Gems receive</span>
               </div>
               <div className="number mt-8 flex-items-center flex-justify-center">
                   <img src="./images/ic_gems_money.png" alt=""/>
                   <span className="ml-6">921</span>
               </div>
               <div className="receive-list mt-20">
                    <div className="list-data flex-between flex-items-center">
                        <span className="fs-16 fc-hui6">Live call Gem</span>
                        <span className="fs-15 flex-items-center">
                            <img src="./images/ic_gems_money.png" alt=""/>
                            <i className="ml-2">12</i>
                        </span>
                    </div>

                    <div className="list-data flex-between flex-items-center">
                        <span className="fs-16 fc-hui6">Gifts</span>
                        <span className="fs-15 flex-items-center">
                            <img src="./images/ic_gems_money.png" alt=""/>
                            <i className="ml-2">12</i>
                        </span>
                    </div>
                    <div className="list-data flex-between flex-items-center">
                        <span className="fs-16 fc-hui6">Host room gifts</span>
                        <span className="fs-15 flex-items-center">
                            <img src="./images/ic_gems_money.png" alt=""/>
                            <i className="ml-2">12</i>
                        </span>
                    </div>
                    <div className="list-data flex-between flex-items-center">
                        <span className="fs-16 fc-hui6">Host gifts</span>
                        <span className="fs-15 flex-items-center">
                            <img src="./images/ic_gems_money.png" alt=""/>
                            <i className="ml-2">12</i>
                        </span>
                    </div>
               </div>
            </div>
        );
    }
export default Receive;