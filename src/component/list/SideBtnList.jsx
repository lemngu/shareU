import React, {useState, useEffect} from "react";
import styled from "styled-components";

import SideButton from "../item/SideButton";

import {db} from "../../firebase"

import { useLocation, useNavigate } from "react-router-dom";


const Wrap = styled.div`
    position: absolute;
    top: 20px;
    right: -93px;
`
const Container = styled.div`
    display: block;
    width: 93px;

    & > * {
        margin-bottom: 10px;
    }
`


function SideBtnList(props){

    const {post} = props;

    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname

    const [isActive, setIsActive] = useState(false);

    const [data, setData] = useState([]);

    
    useEffect(()=> {
        setIsActive(path === "/");
    }, [location]);

    // "/post"를 포함하고 있다면 실행하라는 useEffect
    useEffect(()=> {
        setIsActive(path.startsWith("/post"));
    }, [location]);


    useEffect(function(){
        let tempData = []
        db.collection('post').get().then(function(qs){
            qs.forEach(function(doc){
                tempData.push(doc.data())
            })
            setData(tempData);
        })
    }, []);

    return (
        <div>
            <Wrap>
                <Container>
                    <SideButton     title="게시판" 
                                    isActive={path ==="/"}
                                    onClick={()=>{ 
                                        if (path !== "/") {
                                            navigate("/");
                                        }
                                    }}
                    />
                    <SideButton     title="게시글" 
                                    isActive={path.startsWith("/post")}
                                    onClick={()=>{ 
                                        if (!path.startsWith("/post")) {
                                            navigate("/post/1");
                                        }
                                    }}
                    />
                    <SideButton     title="글쓰기" 
                                    isActive={path === "/write"}
                                    onClick={()=>{ 
                                        if (path !== "/write") {
                                            navigate("/write");
                                        }
                                    }}
                    />
                </Container>
            </Wrap>
        </div>
    )
}


export default SideBtnList;