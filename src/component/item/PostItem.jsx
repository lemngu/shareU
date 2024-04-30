import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex: 560px 120px 140px;
    align-items: flex-start;
    justify-content; center;
    border-bottom: 1px dotted #bebebe;
    cursor: pointer;
    background: translate;  
    line-height: 44px;
    &:hover{
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    margin: 0;
    padding-left: 20px;
    font-size: 16px;
    width: 540px;
`;

const WritterText = styled.p`
    margin: 0
    padding: 0;
    font-size: 16px;
    width: 120px;
    text-align: center;
`;

const DateText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 140px;
    text-align: center;
`;


function PostItem(props){
    const {post, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
            <WritterText>{post.writter}</WritterText>
            <DateText>{post.date}</DateText>
        </Wrapper>
    );
}

export default PostItem;