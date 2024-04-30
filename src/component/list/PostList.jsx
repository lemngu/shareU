import React from "react";
import styled from "styled-components";
import PostItem from "../item/PostItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content; center;
`;

function PostList(props){
    const {posts, onClickItem} = props;

    // props.onClickItem == goPost(id)

    // function goPost(id){
    //     // id만 알면 글로 이동하는 기능을 넣을 것
    // }

    return (
        <Wrapper>
            {posts.map((post, index)=>{
                return(
                    <PostItem   key={post.id} 
                                post={post} 
                                onClick={()=>onClickItem(post)}></PostItem>
                )
            })}
        </Wrapper>
    );
}

export default PostList; 