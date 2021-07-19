import LinearStepper from 'Components/Form/LinearStepper';
import AccountForm from 'Components/Form/AccountForm';
import ProfileForm from 'Components/Form/ProfileForm';
import React, { useState } from 'react'
import { authService } from 'Services/myBase';
import { useStateValue } from 'Services/StateProvider/StateProvider';
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import 'Pages/Join.css'
import { updateAccount, updateProfile } from 'Services/Api/api';


function Join() {
    let provider;
    const [{user}, dispatch] = useStateValue();
    const [page, setPage] = useState(0);
    const [error, setError] = useState("");
    const { register, handleSubmit, formState:{errors, isValid} } = useForm();
    const [certified, setCertified] = useState(false); // 계좌인증

    const pages = [
        '프로필 정보',
        '결제 관련 정보'
    ]

    const socialClick = async (event) => {
        const {target: {name}} = event;

        // axios GET request for each social
        if (name === "google") {
            try {
                provider = new authService.GoogleAuthProvider();
                await authService()
                .signInWithPopup(provider)
            } catch (error) {
                setError(error.message)
            }

        } else if (name === "github") {

        } else if (name === "kakaotalk") {

        } else if (name === "naver") {

        }
    }

    const nextPage = () => {
        if (!isValid) {
            setPage(page+1)
        }
    }

    const previousPage = () => {
        setPage(page-1)
    }

    const onSubmit = async (data) => {
        console.log(data)
        // 폼데이터로 처리.
    }

    return (
        <div className="join">
        {
            user ? (
                <>
                    <Prompt when={true} message="프로필 정보 기입을 취소하시겠습니까? 기존 기입된 정보는 모두 삭제됩니다." />
                    <h1>개인 정보 입력란</h1>
                    <LinearStepper steps={pages} currentStep={page} />
                    <div className="join__form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                page === 0 && 
                                <>
                                    <ProfileForm 
                                        register={register} 
                                        errors={errors}
                                    />
                                    <button onClick={nextPage}>다음</button>
                                </>
                            }
                            {
                                page === 1 && 
                                <>
                                    <AccountForm 
                                        register={register} 
                                        errors={errors} 
                                        certified={certified}
                                    />
                                    <button onClick={previousPage}>이전</button>
                                    <button type="submit">제출</button>
                                </>
                            }
                        </form>
                    </div>
                </>
            ) : (
                <div className="join__social">
                    <h1>간편 회원가입</h1>
                    <div>
                        {/* google login */}
                        <button name="google" onClick={socialClick}>Google</button>
                        {/* github login */}
                        <button name="github" onClick={socialClick}>Github</button>
                        {/* kakaotalk login */}
                        <button name="kakaotalk" onClick={socialClick}>Kakaotalk</button>
                        {/* naver login */}
                        <button name="naver" onClick={socialClick}>Naver</button>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default Join
