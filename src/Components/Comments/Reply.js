import { Button, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react'
import 'Components/Comments/Reply.css'
import { useStateValue } from 'Services/StateProvider/StateProvider';
import axios from 'axios';
import { PROJECT_API_ENDPOINT } from 'Services/Api/Endpoint';
import moment from 'moment';

function Reply({path}) {
    const [text, setText] = useState("");
    const [{profile}, dispatch] = useStateValue();

    const handleComment = async (event) => {
        event.preventDefault();
        await axios.post(`${PROJECT_API_ENDPOINT}/${path}/`, {
            artist_nickname: profile.nickname,
            text: text,
            time: moment().toISOString()
        })
        .then((response) => {
            setText("")
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="reply">
            <TextareaAutosize
                id="textArea"
                placeholder="댓글 작성" // 로그인해야 댓글 작성 가능하게 만들기
                rowsMin={3}
                rowsMax={5}
                defaultValue={text}
                onChange={(value) => {
                setText(value.target.value);
                }}
            />
            <div className="panel">
                <div className="comment_as">
                Comment as{" "}
                <a href="" className="username">
                    {profile.nickname}
                </a>
                </div>
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={handleComment}>
                COMMENT
                </Button>
            </div>
        </div>
    )
}

export default Reply
