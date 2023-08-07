import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MainWrite() {
  const navigate = useNavigate();
  const backButtonHandler = ()=>{
    navigate("/")
  }
    return (
        <>
            <StWriteHeader>
                <div>
                    <button onClick={backButtonHandler}>back</button>
                </div>
                <div>
                    구룹 만들기
                </div>
                <div>
                    <button>확인</button>
                </div>
            </StWriteHeader>

            <StWriteBody>
                <div>
                    <input />
                    <button>image</button>
                </div>
                <div>
                    함께한 추억 장소
                    <input placeholder='지역' />
                </div>
                <div>
                    함께한 추억 기간
                    <input type="date" placeholder='2023-08-02' /> ~ 
                    <input type="date" placeholder='2023-08-03' />
                </div>
                <div>
                    함께한 친구들
                    <input placeholder='친구 아이디' />
                </div>
            </StWriteBody>
        </>
    )
}

const StWriteHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f8f8f8;
`;

const StWriteBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export default MainWrite;
