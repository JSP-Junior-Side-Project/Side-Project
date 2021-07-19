import { AccountCircle } from '@material-ui/icons';
import React from 'react'   
import { useState } from 'react'

function ProfileForm({register, errors}) {
    const [preview, setPreview] = useState("");

    const onFileChange = (event) => {
        const {target:{files}} = event;
        const theFile = files[0]
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent
            setPreview(result);
        }
    };

    const onClearPreview = () => {
        setPreview("");
    }

    return (
        <div className="profileForm">
            <div className="profileForm__left">
                <div className="profileForm__name">
                    <p>실명</p>
                    <input 
                        type="text"
                        {...register("name",
                        {
                            required: '필수 항목입니다.',
                            maxLength: {
                                value: 50,
                                message: '최대 50자 입니다.'
                            }
                        })} 
                    />
                    {errors?.name && <p role='alert'>{errors?.name?.message}</p>}
                </div>
                <div className="profileForm__nickname">
                    <p>닉네임</p>
                    <input 
                        type="text" 
                        {...register("nickname",
                        {
                            required: '필수 항목입니다.',
                            maxLength: {
                                value: 50,
                                message: '최대 50자 입니다.'
                            }
                        })} 
                    />
                    {errors?.nickname && <p role='alert'>{errors?.nickname?.message}</p>}
                </div>
                <div className="profileForm__email">
                    <p>이메일</p>
                    <input 
                        type="text" 
                        {...register("email",
                        {
                            required: '필수 항목입니다.',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: '올바른 이메일 형식이 아닙니다.'
                            },
                            maxLength: {
                                value: 50,
                                message: '최대 50자 입니다.'
                            }
                        })} 
                    />
                    {errors?.email && <p role='alert'>{errors?.email?.message}</p>}
                </div>
                <div className="profileForm__emailPolicy">
                    <input type="checkbox" {...register("checkbox")} />
                    <p>이메일 수신 동의</p>
                </div>
            </div>
            <div className="profileForm__right">
                <div className="profileForm__image">
                    <input 
                        type="file" 
                        accept="image/*" 
                        {...register("file")} 
                        onChange={onFileChange}
                    />
                    {preview ? (
                        <div>
                            <img src={preview} width="50px" height="50px" />
                            <button onClick={onClearPreview}>Clear</button>
                        </div>
                    ) : (
                        <div>
                            <AccountCircle />
                        </div>
                    )}
                </div>
                <div className="profileForm__introduction">
                    <input 
                        type="text" 
                        placeholder="자신을 간단히 소개해주세요."
                        {...register("introduction", 
                        {
                            maxLength: {
                                value: 200,
                                message: '200 자 이내로 작성해주세요.'
                            }
                        })}
                    />
                    {errors?.introduction && <p role='alert'>{errors?.introduction?.message}</p>}
                </div>
            </div>
        </div>
    )
}

export default ProfileForm