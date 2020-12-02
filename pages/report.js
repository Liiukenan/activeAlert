import React, { useEffect,useRef } from 'react'
import DatePicker from './component/DatePicker'
import DetailList from './component/DetailList';
import Layout from './component/Layout';
import Receive from './component/Receive';
import './css/report.styl'
function Report() {
        const scroll=useRef();
        useEffect(() => {
        }, []);
        return (
            <Layout>
                <div className="report">
                <DatePicker />
                <div className="report-main">
                        <Receive />
                        <DetailList />
                </div>
                <div className="income fs-14 fc-hui3 text-center mt-16">
                The income report data above takes UTC+2 as standard
                </div>
                <div className="question mt-16 flex-column">
                    <div className="mt-16 fs-15 flex-justify-center">Do you have any questions?</div>
                    <div className="mt-16 flex-justify-center">
                        <button className="fs-12">TALK TO MY MANAGER</button>
                    </div>
                </div>
                </div>
            </Layout>
        );
    }
export default Report;