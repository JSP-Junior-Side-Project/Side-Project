import React from 'react'

function PostForm2({register, errors}) {


    return (
        <div className="postForm2">
            <h1>this is post form 2</h1>
            <div className="postForm2__description">
                <h4>프로젝트 설명</h4>
                <input 
                    type="text" 
                    {...register("desc", {
                        required: '필수 항목입니다.'
                    })}
                />
                {errors?.desc && <p role='alert'>{errors?.desc?.message}</p>}
            </div>
        </div>
    )
}

export default PostForm2
