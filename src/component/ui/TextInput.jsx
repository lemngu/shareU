import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    margin: 0;
    padding: 0 10px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    font-size: ${props => props.fontSize}px;
    line-height: ${props => props.lineHeight}px;
    display: block;
    color: #222;
    border: 1px solid #b4b4b4;
    resize: none;
    font-family: 'DungGeunMo';

    &::placeholder {
        color: #b4b4b4;
    }

    &:focus {
        outline: none;
    }
`;

function TextInput(props){
    // ===== props 정의 =====
    // width: 입력 창의 길이
    // height: 입력 창의 높이
    // title: 
    // value: 나중에 관리될 state
    // placeholder: 입력창에 기본으로 보이는 텍스트
    // onChange: 변경시 실행될 이벤트
    const{width, height, fontSize, lineHeight, title, value, placeholder, onChange} = props;

    return <StyledTextArea  width={width || 20} 
                            height={height || 20} 
                            fontSize={fontSize || 20}
                            lineHeight={lineHeight || 20}
                            title={title} 
                            value={value} 
                            placeholder={placeholder} 
                            onChange={onChange}/>
}

export default TextInput;