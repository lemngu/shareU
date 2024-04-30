import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

import {db} from "../../firebase"     // firebase 설정 가져오기

import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 820px;
    height: 640px;
    overflow-x: hidden;
    overflow-y: auto;
`;

const PostTitle = styled.div`
    padding: 0 20px;
    background-color: #DEDEDE;
`;

const Post = styled.div`
    margin: 20px;
`

const PostContainer = styled.div`
    // background-color: #ececec;
`;

const TitleText = styled.p`
    font-size: 20px;
    line-height: 60px;
`;

const ContentText = styled.p`
    font-size: 18px;
    line-height: 42px;
    white-space: pre-wrap;
`;

const ContextImg = styled.img`
    width: 750px;
    object-fit: cover;
    text-align: center;
    margin-top: 20px;
`;

const OpenSetBox = styled.div`
    margin: 40px 0 0 0;
    color: #888;
    font-size: 14px;
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #fff;
    border-top: 1px sollid #b4b4b4;
    border-bottom: 1px sollid #b4b4b4;
`

const OpenSetTitle = styled.p`
    margin: auto 0 auto 20px ;
`

const OpenSetText = styled.p`
    margin: auto 10px;
`

const CommentLabelBox = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #f4f4f4;
    border-bottom: 1px sollid #b4b4b4;
`;

const CommentLabelImg = styled.img`
    width: 14px;
    height: 14px;
    margin: auto 0 auto 20px;
`

const CommentLabel = styled.p`
    margin-left: 8px;
`;

const CommentNum = styled.p`
    color: #218FB4;
    margin-left: 8px;
`;

const CommentMeContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    backgoround-color: #f4f4f4;
`

const CommentMeBox = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
`

const CommentMyName = styled.p`
    color: #218FB4;
    margin: auto 0 auto 20px;
`

const CommentBtn = styled.div`
    margin: auto;
`

const ListBtn = styled.div`
    width: 820px;
    margin-top: 20px;
`


function PostViewPage(props){
    const navigate = useNavigate();
    const postId = useParams().id;

    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        comments: [],
    }) // 초기값

    const [commentCount, setCommentCount] = useState(0);

    useEffect(function(){
        db.collection('post').doc(postId).get().then(function(doc){ // 현재 id로 읽기
            setPost(doc.data()) // 읽은 내용으로 state 변경
            setCommentCount(doc.data().comments.length);
        })
    }, []) //비어있는 거 중요

    // const post = data.find((item)=>{
    //     return item.id == postId;
    // });

    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <Container>
                <PostTitle>
                        <TitleText>{post.title}</TitleText>
                </PostTitle>

                <Post>
                    <PostContainer>
                        <ContextImg src={post.image}/>
                        <ContentText>{post.content}</ContentText>
                        {/* <ContextImg src={process.env.PUBLIC_URL + "/" + "ContextImage.jpg"}/> */}
                    </PostContainer>

                    <OpenSetBox>
                        <OpenSetTitle>공개설정 :</OpenSetTitle>
                        <OpenSetText>공개</OpenSetText>
                    </OpenSetBox>

                    <CommentLabelBox>
                        <CommentLabelImg src={process.env.PUBLIC_URL + "/" + "CoLaImg.png"}/>
                        <CommentLabel>댓글</CommentLabel>
                        <CommentNum>{commentCount}</CommentNum>
                    </CommentLabelBox>

                    <CommentMeContainer>
                        <CommentMeBox>
                            <CommentMyName>mg</CommentMyName>
                        </CommentMeBox>
                        <TextInput  width={572}
                                height={24}
                                lineHeight={24}
                                fontSize={16}
                                value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <CommentBtn>
                            <Button title="확인"
                                onClick={function(){
                                    const timerecord = new Date();
                                    const timestamp = timerecord.getTime().toString();
                                    const user = timestamp.slice(-3);

                                    const year = timerecord.getFullYear();
                                    const month = timerecord.getMonth() + 1;
                                    const date = timerecord.getDate();
                                    const hour = timerecord.getHours();
                                    const minute = timerecord.getMinutes();

                                    // 한 자리 숫자를 두자리로 표현
                                    const formattedMonth = month < 10 ? '0' + month : month;
                                    const formattedDate = date < 10 ? '0' + date : date;
                                    const formattedHour = hour < 10 ? '0' + hour : hour;
                                    const formattedMinute = minute < 10 ? '0' + minute : minute;

                                    let tempComments = post.comments
                                    tempComments.push({
                                        id: (postId + '_' + timestamp),
                                        user: user,
                                        date: '(' + year + '.' + formattedMonth  + '.' + formattedDate + '-' + formattedHour + ':' + formattedMinute + ')',
                                        content: comment
                                    })

                                    db.collection('post').doc(postId).update({
                                        comments: tempComments
                                    }).then(function(){
                                        setComment('')
                                    })
                            }}/>
                        </CommentBtn>
                    </CommentMeContainer>

                    <CommentList comments={post.comments}/>
                </Post>
            </Container>
            <ListBtn>
            <Button title="목록" onClick={()=>{navigate('/')}}></Button>
            </ListBtn>
        </Wrapper>
    );
}

export default PostViewPage;