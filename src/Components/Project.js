import React, { useEffect } from 'react'
import 'Components/Project.css'
import sampleProject from 'sampleProject.jpeg'
import CurrencyFormat from 'react-currency-format';
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';
import EjectIcon from '@material-ui/icons/Eject';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { RANK_API_ENDPOINT } from 'Services/Api/Endpoint';
import { CATEGORY } from './Category';

function Project({demandDate, demandPeriod}) {
    const [project, setProject] = useState(null);
    const [error, setError] = useState("");

    const fetchRankData = async (demandDate, demandPeriod) => {
        await axios.get(`${RANK_API_ENDPOINT}?date=${demandDate}&period=${demandPeriod}`).then((res) => {
            setProject(res.data[0].project)
        })
        .catch((error) => {
            setError(error.message)
            // console.log(demandDate)
            // console.log(error.message)
        })
    }

    const showDate = () => {
        let dayLabel;
        const today = moment().format("YYYY-MM-DD")
        const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD")
        if (today === demandDate && demandPeriod === 1) {
            dayLabel = "오늘"
        } else if (yesterday === demandDate && demandPeriod === 1) {
            dayLabel = "어제"
        } else if (today === demandDate && demandPeriod === 7) {
            dayLabel = "저번주"
        } else if (today === demandDate && demandPeriod === 30) {
            dayLabel = "저번달"
        } else {
            dayLabel = moment(demandDate, "YYYY-MM-DD").format("MM월 DD일")
        }
        console.log(demandDate, dayLabel);
        return dayLabel;
    }

    const filterCid = (cid) => {
        return CATEGORY.filter(c => c.id === cid)[0].name
    }

    useEffect(() => {
        fetchRankData(demandDate, demandPeriod)
    }, [demandDate, demandPeriod])

    return (
            project && (
                <div className="project">
                    <h1 className="project__header">{showDate()}의 hot pick</h1>
                    <div className="project__rank">
                        {
                            project?.map(item => (
                                <Link key={item.id} to={`/post/${item.id}`} style={{ textDecoration: "none" }}>
                                    <div className="project__container" id={item.id} >
                                        <div className="project__left">
                                            <img className="project__thumbnail" src={sampleProject} alt=""/>
                                        </div>
                                        <div className="project__center">
                                            <div className="project__top">
                                                <h3 className="project__title">{item.title}</h3>
                                                <p className="project__artist">by {item.user_nickname}</p>
                                            </div>
                                            <div className="project__middle">
                                                <p className="project__description">{item.desc}</p>
                                            </div>
                                            <div className="project__bottom">
                                                <p className="project__category">{filterCid(item.category_id)}</p>
                                                <div className="project__comment">
                                                    <ModeCommentRoundedIcon style={{fontSize:"small", color:"#6f6f6f", margin:"3px 3px 0px 0px"}}/>
                                                    <p>{item.comment_count}</p>
                                                </div>
                                                <div className="project__price">
                                                    <p>
                                                        <CurrencyFormat
                                                            value={item.price}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            prefix={'₩'}
                                                        />
                                                    </p>
                                                </div>
                                                {item.beta === "true" && (<p style={{color:"#026BFF"}}>BETA</p>)}
                                            </div>
                                        </div>
                                        <div className="project__right">
                                            <div className="project__upvote">
                                                <EjectIcon />
                                                <span>{item.upvote_count}</span>
                                            </div>
                                        </div>
                                    </div> 
                                </Link>
                            ))
                        }   
                    </div>
                </div>
            )
    )
}

export default Project