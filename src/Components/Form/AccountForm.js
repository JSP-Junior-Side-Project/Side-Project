import React, { useState } from 'react'
import { Prompt } from 'react-router'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

function AccountForm({register, errors, certified}) {

    const handleClick = (event) => {
        event.preventDefault();
        // 은행 코드 조회 api
    }
     
    return (
        <div className="accountForm">
            {/* <form className="accountForm__form" onSubmit={handleSubmit(onSubmit)}> */}
                <Prompt when={true} message="프로필 정보 기입을 취소하시겠습니까? 기존 기입된 정보는 모두 삭제됩니다." />
                <div className="accountForm__left">
                    <div className="accountForm__bank">
                        <p>수익금/출금 은행</p>
                        <input 
                            type="text" 
                            {...register("bank",
                            {
                                required: '필수 항목입니다.'
                            })} 
                        />
                        {errors.bank && <p role='alert'>{errors.bank.message}</p>}
                        <IconButton aria-label="search bank" onClick={handleClick}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <div className="accountForm__account">
                        <p>계좌번호</p>
                        <input 
                            type="text" 
                            {...register("account", 
                            {
                                required: '필수 항목입니다.'
                            })} 
                        />
                        <button>계좌 인증</button>
                    </div>
                </div>
                <div className="accountForm__right">
                    <div className="accountForm__tax">
                        <p>판매 시 '세금' 관련 유의사항</p>
                        <div>
                            {/* 유의사항 주루루룩.... */}
                            <p>세금 떼어가니까 수익금 중 몇프로는 이러쿵 저러쿵...</p>
                        </div>
                    </div>
                    <div className="accountForm__termsCondition">
                        <input type="checkbox" name="termsCondition"/>
                        <p>사이드 프로젝트 판매홍보 대행 약관을 확인하였으며, 동의합니다</p>
                    </div>
                </div>
        </div>
    )
}

export default AccountForm