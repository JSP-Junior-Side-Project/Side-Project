import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router';
import { useStateValue } from 'Services/StateProvider/StateProvider';

function PostForm3({register, errors}) {

    return (
        <div className="postForm3">
            <div className="postForm3__price">
                <h4>가격 (VAT 포함)</h4>
                <input 
                    type="number" 
                    {...register("price", {
                        required: '필수 항목입니다.',
                        valueAsNumber: true,
                        min: {
                            value: 5000,
                            message: '5000원 이하는 불가합니다.'
                        }
                    })} 
                />
            </div>
        </div>
    )
}

export default PostForm3
