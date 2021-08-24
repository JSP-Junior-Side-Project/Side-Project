import LinearStepper from 'Components/Form/LinearStepper';
import AccountForm from 'Components/Form/AccountForm';
import ProfileForm from 'Components/Form/ProfileForm';
import React, { useState } from 'react'
import { authService } from 'Services/myBase';
import { useStateValue } from 'Services/StateProvider/StateProvider';
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import 'Pages/Join.css'


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
        const {target: {alt}} = event;

        // axios GET request for each social
        if (alt === "google") {
            try {
                provider = new authService.GoogleAuthProvider();
                await authService()
                .signInWithPopup(provider)
            } catch (error) {
                setError(error.message)
            }

        } else if (alt === "github") {

        } else if (alt === "kakaotalk") {

        } else if (alt === "naver") {

        }
    }

    const nextPage = () => {
        if (isValid) {
            setPage(page+1)
        } else {
            
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
                                    <div className="button" onClick={nextPage}><p>다음</p></div>
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
                                    <div className="button" onClick={previousPage}><p>이전</p></div>
                                    <div className="button" type="submit"><p>제출</p></div>
                                </>
                            }
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="join__header">SIDE-PROJECT</h1>
                    <h4>간편하게 가입하세요!</h4>
                    <div className="join__social">
                        <div className="join__socialButton" onClick={socialClick} style={{backgroundColor:"#EA4435"}}>
                            <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_google.png" alt="google"></img>
                        </div>
                        <div className="join__socialButton" onClick={socialClick} style={{backgroundColor:"#FFFFFF"}}>
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"></img>
                        </div>
                        <div className="join__socialButton" onClick={socialClick} style={{backgroundColor:"#FAE100"}}>
                            <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_kakao.png" alt="kakaotalk"></img>
                        </div>
                        <div className="join__socialButton" onClick={socialClick} style={{backgroundColor:"#04CF5B "}}>
                            <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_naver.png" alt="naver"></img>
                        </div>
                    </div>
                </>
            )
        }
        </div>
    )
}

export default Join
