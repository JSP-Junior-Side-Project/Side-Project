import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
        // event.preventDefault();
        console.log(event)
        setSelectedCid(event.target.value);
    }

    return (
        <div className="postForm1">
            <div className="postForm1__title">
                <p>프로젝트명</p>
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
                <p>프로젝트 카테고리</p>
                <FormControl style={{margin:"1px"}}>
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
                        style={{
                            minWidth:"120px"
                        }}
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
                </FormControl>
                {errors?.cid && <p role='alert'>{errors?.cid?.message}</p>}
            </div>
        </div>
    )
}

export default PostForm1
