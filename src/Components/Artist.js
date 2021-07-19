import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ARTIST_API_ENDPOINT } from 'Services/Api/Endpoint';
import sampleProfile from 'sampleProfile.jpeg'
import 'Components/Artist.css';

function Artist() {
    const [artist, setartist] = useState(null);
    const [error, setError] = useState("");

    const fetchArtistData = async () => {
        try {
            const response = await axios.get(ARTIST_API_ENDPOINT)
            // console.log(response.data)
            const {data: { artist }} = response
            setartist(artist)
        } catch (error) {
            setError(error.mesasge)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchArtistData();
    }, [])

    return (
        <div className="arist">
            <h1 className="artist__header">이번 달의 artist</h1>
            <div className="artist__rank">
                {
                    artist &&
                        artist.map(item => (                            
                            <div className="artist__container" key={item.id}>
                                <div className="arist__left">
                                    <img className="artist__thumbnail" src={sampleProfile} alt="" />
                                </div>
                                <div className="arist__right">
                                    <h3 className="artist__nickname">{item.nickname}</h3>
                                    <p className="artist__introduction">{item.introduction}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Artist
