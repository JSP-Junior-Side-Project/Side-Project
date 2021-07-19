import React, { useEffect, useState } from 'react'
import 'Components/Comments/Comment.css';
import Reply from 'Components/Comments/Reply';
import { useStateValue } from 'Services/StateProvider/StateProvider';

function Comment({id, projectId, comment}) {
    const [replying, setReplying] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [{profile}, dispatch] = useStateValue();

    useEffect(() => {
        if (comment.replies?.length > 2) {
            setHidden(true)
        }

    }, [comment.replies])
    return (
        <div id={id}>
        {
            hidden ? (
                <button 
                    className="showMore"
                    onClick={() => {
                        setHidden(true)
                    }}>
                        Show More Replies
                </button>
            ) : (
                <div className="comment">
                    <div className="comment__top">
                        <span
                            id="minimize"
                            onClick={() => {
                                setMinimized(!minimized);
                            }}>
                            {minimized ? "[+]" : "[-]"}
                        </span>
                        <span id="username">{comment.artist_nickname}</span>
                        <span id="time">{comment.time}</span>
                    </div>
                    <div className="comment__body" id={minimized ? "hidden" : ""}>
                        {comment.text}
                    </div>
                    <div className="comment__action" id={minimized ? "hidden" : ""}>
                        {
                            profile.nickname === comment.artist_nickname ? (
                                <div id="myComment">
                                    <span id="action">Delete</span>
                                    <span id="action">Edit</span>
                                </div>
                            ) : (
                                <div id="artistComment">
                                    <span
                                        id="action"
                                        className={replying ? "selected" : ""}
                                        onClick={() => {
                                            setReplying(!replying);
                                        }}>
                                            Reply
                                    </span>
                                    <span id="action">Report</span>
                                </div>
                            )
                        }
                    </div>
                    {replying && <Reply id={minimized ? "hidden" : ""} path={`${projectId}/comments/${comment.id}/replies`}/>}
                    {
                        comment.replies && 
                        comment.replies.map((_,i) => (
                            <Comment id={minimized ? "hidden" : ""} comment={comment.replies[i]} />
                        ))
                    }
                </div>
            )
        }
        </div>
    )
}

export default Comment
