import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../ui/Button";
import ImgInputBtn from "../ui/ImgInputBtn";
import TextInput from "../ui/TextInput";

import { db } from "../../firebase";


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    z-index: 1;
    max-width: 820px;
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

const WriteContainer = styled.div`
    margin-top: 40px;
    height: 560px;
    overflow-x: hidden;
    overflow-y: auto;   
`

const SelectContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;

    & > * {
        border: 1px solid #222;
        margin-right: 10px;
    }
    & > *:first-child {
        margin-right: 0;
    }
`

const BtnContainer = styled.div`
    padding: 10px;
    margin-top: 20px;
    background-color: #f0f0f0;
    max-height: 80px;

    & > * {
        margin-left: 10px;
        border: 1px solid #222;
    }

    & > *:first-child {
        margin-left: 0;
    }

    & > *:nth-child(2) {
        margin-left: 0;
        border: 1px solid #222;
    }

    & > *:nth-child(7) {
        margin-left: 0;
        border: none;
    }
`

const TextBtnContainer = styled.div`
    margin-top: 6px;

    & > * {
        margin-left: 10px;
        border: 1px solid #222;
    }

    & > *:first-child {
        margin-left: 0;
    }
`

const ContentInput = styled.div`
    margin-top: 20px;
`

const ImagePreview = styled.img`
    width: 750px;
    object-fit: cover;
    text-align: center;
    margin-top: 20px;
`

const WriteBottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

function PostWritePage(props){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const selectedIamge = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setImage(base64String);
        }
        reader.readAsDataURL(selectedIamge);
        setImage(URL.createObjectURL(selectedIamge));
    };

    useEffect(() => {
        axios.get('http://geolocation-db.com/json/')
        .then((res) =>{
            const ip = res.data.IPv4;
            axios.get(`http://ipinfo.io/${ip}/json`)
            .then((response) => {
                let city = response.data.city;
                city = city.split("-si")[0];
                setLocation(city); //위치명 설명
            })
            .catch((error) => {
                console.error("Error fetching location:", error);
            })
        })
        .catch((error) => {
            console.error("Error fetching IP:", error);
        })
    }, []);

    return (
        <Wrapper>
            <Container>
                <MainText>게시판 | 글 등록</MainText>
                <MainLine/>

            <WriteContainer>
                <TextInput  width={790}
                            height={40}
                            lineHeight={40}
                            placeholder={"제목을 적어주세요"}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>

                <SelectContainer>
                    <Button title="다이어리 속지 ▼"/>
                    <Button title="기분선택 ▼"/>
                </SelectContainer>

                <BtnContainer>
                    <ImgInputBtn title="이미지" onChange={handleImageChange}/>
                    <Button title="동영상"/><Button title="리뷰"/><Button title="음악링크"/><br/>
                    <TextBtnContainer>
                        <Button title="글꼴효과 ▼"/><Button title="글꼴 ▼"/><Button title="크기 ▼"/>
                        <Button title="가"/><Button color={"#b4b4b4"} title="가"/><Button color={"#D74646"} title="가"/><Button color={"#fff"} backColor={"#D74646"} title="가"/>
                    </TextBtnContainer>
                </BtnContainer>



                <ContentInput>
                    {image && <ImagePreview src={image} alt="Preview"/>}
                    <TextInput  width={790}
                                height={480}
                                lineHeight={40}
                                placeholder={"기록을 적어주세요"}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}/>
                                
                </ContentInput>
            </WriteContainer>

            <WriteBottomBox>
                <Button title="목록" onClick={()=>{navigate('/')}}/>
                <Button title="확인" 
                        onClick={function(){
                                const timerecord = new Date();
                                const timestamp = timerecord.getTime().toString();

                                const year = timerecord.getFullYear();
                                const month = timerecord.getMonth() + 1;
                                const date = timerecord.getDate();

                                // 4월 표기를 04로 표기하는 방법 == 한 자리 숫자를 두자리로 표현
                                const formattedMonth = month < 10 ? '0' + month : month;
                                const formattedDate = date < 10 ? '0' + date : date;


                                console.log('년도:' + year, '월:' + formattedMonth, '일:' + formattedDate);

                                db.collection('post').doc(timestamp).set({
                                    id: timestamp,
                                    writter: location,
                                    date: year + '.' + formattedMonth + '.' + formattedDate,
                                    title: title,
                                    content: content,
                                    comments: [],
                                    image: image
                                }).then(function(){
                                    navigate('/')
                                })
                            }}/>
            </WriteBottomBox>
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;