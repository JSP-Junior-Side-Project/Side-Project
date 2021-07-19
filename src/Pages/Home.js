import React, { useEffect, useState } from 'react'
import 'Pages/Home.css'
import Project from 'Components/Project';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import Artist from 'Components/Artist';
import Navigator from 'Components/Navigator/Navigator';

function Home() {
    const [scrollLength, setScrollLength] = useState(1);
    const [demandDate, setDemandDate] = useState(moment()); // demandDate
    const [dateArray, setDateArray] = useState([demandDate.format("YYYY-MM-DD")]); // array of formatted demandDate
    const [demandPeriod, setDemandPeriod] = useState(1);
    let savedDate = demandDate;

    const fetchMoreProject = () => {
        if (scrollLength === 2) {
            setDemandDate(moment())
            setDemandPeriod(7)
        } else if (scrollLength === 3) {
            setDemandDate(moment())
            setDemandPeriod(30)
        } else {
            setDemandDate(savedDate)
            setDemandPeriod(1)
        }
        savedDate = savedDate.subtract(1, "days")
        setDateArray([...dateArray, demandDate.format("YYYY-MM-DD")])
        setScrollLength(scrollLength+1)
    }

    return (
        <>
        <Navigator />
        <div className="home">
            <div className="home__left">
                <div className="home__project">
                    <InfiniteScroll
                        dataLength={scrollLength}
                        next={fetchMoreProject}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                    >
                        {
                            dateArray && dateArray.map(
                                (date, index) => (
                                    <Project 
                                        key={index} 
                                        demandDate={date} 
                                        demandPeriod={demandPeriod}
                                    />
                                )
                            )
                        }
                    </InfiniteScroll>
                </div>
                
            </div>
            <div className="home__right">
                <div className="home__artist">
                    <Artist />
                </div>
                <div className="home__footer">
                    <p>&copy; {moment().format("YYYY")} SIDE-PROJECT</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
