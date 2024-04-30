import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import SideBtn from "../item/SideButton";

// import data from "../../data.json";   // 더이상 쓰지 않음
import {db} from "../../firebase"     // firebase 설정 가져오기

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainTitle = styled.div`
    display: block;
    width: 100%;
`

const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 820px;
    height: 420px;
    overflow: auto;
`;

const MainText = styled.p`
    font-size: 20px;
    color: #218FB4;
    margin: 0 0 15px 0;
`;

const MainLine = styled.hr`
    border: 1px solid #E4E4E4;
    margin: 0;
`;

const MainTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    max-width: 820px;
    height: 50px;
    background-color: #f4f4f4;
    margin-top: 30px;
`;

const SubBox = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 30px;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #d4d4d4;
`;

const SubText = styled.p`
    margin: 0 10px;
    line-height: 30px;
`;

const SubBtn = styled.button`
    margin: 0 10px;
    padding: 0;
    border: 0;
    background-color: transparent;
    line-height: 30px;
`;

const SearchBox = styled.div`
    margin: 0;
    padding: 10px;
    display: flex;
`;

const SearchInput = styled.div`
    margin-right: 10px;
`

const PostBox = styled.div`
    margin: 0;
`

const PostHead = styled.div`
    display: flex;
    flex: 540px 120px 140px;
    align-items: flex-start;
    justify-content; center;
    border-top: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
    text-align: center;
    line-height: 44px;
    margin-top: 40px;
`

const TitleText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 540px;
`;

const WritterText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 120px;
`;

const DateText = styled.p`
    margin-right: 12px;
    padding: 0;
    font-size: 16px;
    width: 140px;
`;

const MainBottom = styled.div`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
    width: 820px;
`

const PageNum = styled.div`
`


function MainPage(props){
    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(function(){
        let tempData = []
        db.collection('post').get().then(function(qs){
            qs.forEach(function(doc){
                tempData.push(doc.data())
            })
            setData(tempData);
        })
    }, [])

    return (
        <Wrapper>
            <MainTitle>
                <MainText>게시판 | 목록</MainText>
                <MainLine/>
            </MainTitle>

                <MainTop>
                    <SubBox>
                        <SubText>소소한 일상</SubText>
                        <SubBtn>▼</SubBtn>
                    </SubBox>
                    <SearchBox>
                        <SearchInput>
                            <TextInput  width={260}
                                        height={24}
                                        fontSize={16}
                                        lineHeight={24}
                                        placeholder={"검색할 내용을 입력하세요"}/>
                        </SearchInput>
                        <Button title="검색하기"/>
                    </SearchBox>
                </MainTop>

                <PostHead>
                    <TitleText>제목</TitleText>
                    <WritterText>작성자</WritterText>
                    <DateText>작성일</DateText>
                </PostHead>
            <Container>
                <PostBox>
                    <PostList posts={data} onClickItem={(p)=>{navigate('/post/'+p.id)}}></PostList>
                </PostBox>
            </Container>
            <MainBottom>
                    <div></div>
                    <PageNum></PageNum>
                    <Button title="글쓰기" onClick={()=>{navigate('/write')}}/>
            </MainBottom>
        </Wrapper>
    );
}

export default MainPage;