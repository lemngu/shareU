import React from "react";
import styled from "styled-components";
import CommentItem from "../item/CommentItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content; center;
`;

function CommentList(props){
    const {comments} = props;

    return (
        <Wrapper>
            {comments.map((comment, index)=>{
                return(
                    <CommentItem key={comment.id} comment={comment}></CommentItem>
                )
            })}
        </Wrapper>
    );
}

export default CommentList; 