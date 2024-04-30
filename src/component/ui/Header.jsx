import React from "react";
import styled from "styled-components";

import NavButton from "./NavButton";

const Wrapper = styled.header`
    margin: 0;
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LeftContain = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
`;

const SearchInput = styled.textarea`
    padding-left: 10px;
    width: 240px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-family: 'DungGeunMo';
    border: 2px solid #FF2626;
    resize: none;
    &:focus{
        outline: none;
    }
`

const SearchBtn = styled.button`
    width: 60px;
    height: 32px;
    background-color: #FF2626;
    color: #fff;
    border: none;
    font-size: 16px;
    font-family: 'DungGeunMo';
`

const AddLink = styled.a`
    color: #222;
    margin-left: 10px;
`

const RightContain = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

const MainBtn = styled.button`
    color: #222;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-family: 'DungGeunMo';
`

function Header(props){

    return (
        <Wrapper>
            <LeftContain>
                <SearchInput></SearchInput>
                <SearchBtn>검색</SearchBtn>
                <AddLink href="https://www.11st.co.kr/products/537356086">꿀고구마 5kg 만오천</AddLink>
            </LeftContain>

            <RightContain>
                <MainBtn>메인</MainBtn>
                <p>|</p>
                <MainBtn>내 미니홈피</MainBtn>
                <NavButton title="방문한 히스토리가 남아요" color={'#888'}></NavButton>
                <NavButton title="내모이보기 ▲"></NavButton>
                <NavButton title="바로가기 ▲"></NavButton>
                <NavButton title="랜덤"></NavButton>
                <NavButton title="로그아웃"></NavButton>
            </RightContain>
        </Wrapper>
    )
}

export default Header;