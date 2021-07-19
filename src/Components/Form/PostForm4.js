import { CircularProgress, Fade, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router';
import { useStateValue } from 'Services/StateProvider/StateProvider'

function PostForm4({register, errors, isValidating}) {
    const [radioValue, setRadioValue] = useState("youtube");

    // const onSubmit = async (data) => {
    //     setLoading(true)
    //     const attachments = {}
    //     Object.keys(data).forEach((key) => {
    //         if (key !== "youtube") {
    //             attachments[key]=data[key][0]
    //         }
    //     })
    //     console.log(attachments)
    //     await dispatch({
    //         type: 'UPLOAD_PROJECT',
    //         post: {
    //             data: { 
    //                 youtube: data.youtube,
    //                 ...post.data,
    //             },
    //             attachments: Object.values(attachments)
    //         }
    //     })
    //     setLoading(false)
    //     nextPage();
    // }

    const handleChange = (event) => {
        setRadioValue(event.target.value);
    }

    return (
        <div className="postForm4">
            <div className="postForm4__media">
                <input 
                    type="file"
                    accept="image/*" 
                    {...register("image1")}
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    {...register("image2")}
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    {...register("image3")}
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    {...register("image4")}
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    {...register("image5")}
                />
                { radioValue === "youtube" ? (
                    <input 
                        type="text"
                        {...register("youtube", {
                            required: '필수 항목입니다.',
                            pattern: {
                                value: /\S+www.youtube.com\S+ /,
                                message: "올바른 유튜브 링크가 아닙니다."
                            },
                            validate: {
                                checkUrl: async () => await axios.get(),
                                message: "올바른 유튜브 링크가 아닙니다."
                            }
                        })}
                    />
                    ,isValidating && <CircularProgress/>
                ) : (
                    <input 
                        type="file" 
                        accept="video/*" 
                        {...register("video")}
                    />
                )}
                <RadioGroup name="video_type" value={radioValue} onChange={handleChange}>
                    <FormControlLabel value="none" control={<Radio/>} label="영상 없음" />
                    <FormControlLabel value="youtube" control={<Radio/>} label="유튜브 링크" />
                    <FormControlLabel value="video" control={<Radio/>} label="비디오 파일" />
                </RadioGroup>
            </div>
        </div>
    )
}

export default PostForm4
