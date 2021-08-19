import LinearStepper from 'Components/Form/LinearStepper';
import PostForm1 from 'Components/Form/PostForm1';
import PostForm2 from 'Components/Form/PostForm2';
import PostForm3 from 'Components/Form/PostForm3';
import PostForm4 from 'Components/Form/PostForm4';
import PostForm5 from 'Components/Form/PostForm5';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import 'Pages/Post.css';

function Post() {
    const [page, setPage] = useState(0);
    const { register, handleSubmit, formState:{errors, isValid, isValidating} } = useForm();

    const pages = [
        '기본 정보',
        '프로젝트 설명',
        '가격 설명',
        '이미지 및 영상 등록',
        '파일 등록'
    ]
    const nextPage = () => {
        if (isValid) {
            setPage(page+1)
        }
    }
    
    const previousPage = () => {
        setPage(page-1)
    }

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="post">
            <Prompt when={true} message="프로젝트 업로드를 취소하시겠습니까? 기존 기입된 정보는 모두 삭제됩니다." />
            <h1>프로젝트 등록하기</h1>
            <LinearStepper steps={pages} currentStep={page}/>
            <div className="post__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        page === 0 && 
                        <>
                            <PostForm1 
                                register={register}
                                errors={errors}
                            />
                            <div className="post__button">
                                <div onClick={nextPage}>
                                    <p>다음</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        page === 1 && 
                        <>
                            <PostForm2 
                                register={register}
                                errors={errors}
                            />
                            <div className="post__button">
                                <div onClick={previousPage}>
                                    <p>이전</p>
                                </div>
                                <div onClick={nextPage}>
                                    <p>다음</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        page === 2 && 
                        <>
                            <PostForm3 
                                register={register}
                                errors={errors}
                            />
                            <div className="post__button">
                                <div onClick={previousPage}>
                                    <p>이전</p>
                                </div>
                                <div onClick={nextPage}>
                                    <p>다음</p>
                                </div>
                            </div>
                        </>
                    }
                    {
                        page === 3 && 
                        <>
                            <PostForm4
                                register={register}
                                errors={errors}
                                isValidating={isValidating}
                            />
                            <div className="post__button">
                                <div onClick={previousPage}>
                                    <p>이전</p>
                                </div>
                                <div onClick={nextPage}>
                                    <p>다음</p>
                                </div>
                            </div>
                        </>
                    }
                    {/* {
                        page === 4 && 
                        <>
                            <PostForm5
                                register={register}
                                errors={errors}
                                isValidating={isValidating}
                            />
                            <div className="post__button">
                                <div onClick={previousPage}>
                                    <p>이전</p>
                                </div>
                                <div onClick={nextPage}>
                                    <p>다음</p>
                                </div>
                            </div>
                        </>
                    } */}
                    
                </form>
                
            </div>
        </div>
    )
}

export default Post