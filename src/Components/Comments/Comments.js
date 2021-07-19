import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Comment from './Comment'
import Reply from './Reply'

function Comments({projectId, comments}) {
    return (
        <Card>
            <Reply path={`${projectId}/comments`}/>
            {
                comments.map((_,i) => (
                    <Comment projectId={projectId} comment={comments[i]} />
                ))
            }
        </Card>
    )
}

export default Comments
