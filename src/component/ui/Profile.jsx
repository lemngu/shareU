import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    margin: 40px 0 0 40px;
    width: 400px;
    height: 860px;
    background-color: #FBFBFB;
    border-radius: 16px;
    color: #222222;
`;

const Container = styled.div`
    width: 380px;
    height: 760px;
    border: 1px solid #222222;
    border-radius: 16px;
    margin: auto;
    position: relative;
    background-color: #fff;
`;

const Visitor = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 0;
    padding: 64px 0 10px 0;
`;

const Box = styled.div`
    width: 300px;
    margin: 30px 40px 0 40px;
`;

const Today = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid #222222;
`;

const TodayText = styled.p`
    font-size: 16px;
    text-align: center;
    margin: auto;
    line-height: 40px;
`;

const ProfileImg = styled.img`
    width: 300px;
    height:  240px;
    object-fit: cover;
    text-align: center;
    margin-top: 10px;
`;

const MyIntro = styled.p`
    font-size: 16px;
    line-height: 20px;
    margin: 20px auto;
`;

const MyInfo = styled.div`
    position: absolute;
    bottom: 80px;
    width: 300px;
    height: 155px;
`;

const InfoTitle = styled.p`
    font-size: 12px;
    margin: auto;
`;

const InfoLine = styled.img`

`;

const InfoName = styled.p`
    font-size: 20px;
    margin: auto;
`;

const InfoGender = styled.p`
    font-size: 16px;
    margin: auto 10px;
`;

const InfoBirth = styled.p`
    font-size: 16px;
    margin: auto;
`;

const InfoBox = styled.div`
    display: inline-flex;
    align-items: flex-end;
    margin: 10px auto;
`;

const InfoEmail = styled.p`
    font-size: 14 px;
    margin: auto;
`;

const WaveBox = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 32px;
    font-size: 12px;
    background-color: white;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.25);
`;

const WaveText = styled.p`
    margin: 10px;
`;

const WaveBtn = styled.button`
    margin: 10px;
    border: 0;
    background-color: transparent;
`;

function Profile(props){

    return (
        <Wrapper>
            <Visitor>TODAY 22 | TOTAL 1000</Visitor>
            <Container>
                <Box>
                <Today><TodayText>TODAY IS... 먹고 자고</TodayText></Today>
                <ProfileImg src={process.env.PUBLIC_URL + "/" + "profileImage.jpg"}/>
                <MyIntro>아우 졸려..왤케 졸리냐zzZ<br/><br/>이따가 뭐 먹지, 햇반이나 먹어야겠다</MyIntro>
                <MyInfo>
                    <InfoTitle>▶ HISTORY</InfoTitle>
                    <InfoLine src={process.env.PUBLIC_URL + "/" + "infoLine.png"}/>
                    <InfoBox>
                        <InfoName>이민규</InfoName>
                        <InfoGender>(♂)</InfoGender>
                        <InfoBirth>2000.07.14</InfoBirth>
                    </InfoBox>
                    <InfoEmail>lmg0511@naver.com</InfoEmail>
                    <WaveBox>
                        <WaveText>파도타기</WaveText>
                        <WaveBtn>▼</WaveBtn>
                    </WaveBox>
                </MyInfo>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Profile;