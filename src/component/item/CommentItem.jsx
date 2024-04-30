import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 780px;
    height: 40px;
    display: flex;
    background: #f4f4f4;
    line-height: 40px;

    // &:hover{
    //     background: lightgrey;
    // }
`;

const CommentWritterBox = styled.div`
    width: 100px;
    height: 40px;
    margin: 0;
    padding: auto 0 auto 20px;
`

const CommentWritter = styled.p`
    margin: auto 0 auto 20px;
    font-size: 14px;
    color: #218FB4;
`

const CommentTextBox = styled.div`
    height: 40px;
    padding: auto 0 auto 20px;
    display: flex;
    align-items: center;
`

const ContentText = styled.p`
    margin: auto 0 auto 20px;
    font-size: 16px;
    white-space: pre-wrap;
`;

const ContentDate = styled.p`
    font-size: 16px;
    color: #888;
`

function CommentItem(props){
    const {writter, comment} = props;

    return (
        <Wrapper>
            <CommentWritterBox>
                <CommentWritter>{comment.user}</CommentWritter>
            </CommentWritterBox>
            <CommentTextBox>
                <ContentText>{comment.content}</ContentText>
                <ContentDate>{comment.date}</ContentDate>
            </CommentTextBox>
        </Wrapper>
    );
}

export default CommentItem;