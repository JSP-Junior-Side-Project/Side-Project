import React from 'react'
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import { CATEGORY } from 'Components/Category';


function PostForm1({register, errors}) {
    const [open, setOpen] = useState(false);
    const [selectedCid, setSelectedCid] = useState("");

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = (event) => {
        setOpen(true);
    }
    
    const handleChange = (event) => {
        event.preventDefault();
        setSelectedCid(event.target.value);
    }

    return (
        <div className="postForm1">
            <div className="postForm1__title">
                <h4>프로젝트명</h4>
                <input 
                    type="text" 
                    placeholder="프로젝트명을 입력해주세요." 
                    {...register("title", {
                        required: '필수 항목입니다.',
                        maxLength: {
                            value: 200,
                            message: '200자 이내로 작성해주세요.'
                        }
                    })}
                />
                {errors?.title && <p role='alert'>{errors?.title?.message}</p>}
            </div>
            <div className="postForm1__category">    
                <InputLabel>카테고리</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                    value={selectedCid}
                    {...register("cid", {
                        required: '필수 항목입니다.'
                    })}
                >
                    {
                        CATEGORY.map((item) => (
                            <MenuItem
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </MenuItem>
                        ))
                    }
                </Select>
                {errors?.cid && <p role='alert'>{errors?.cid?.message}</p>}
            </div>
        </div>
    )
}

export default PostForm1
