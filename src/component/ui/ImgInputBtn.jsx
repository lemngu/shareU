import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display: none;
`

const StyledButton = styled.label`
    margin: 0;
    padding: 4px 8px;
    height: ${props => props.height}px;
    color: ${props => props.color};
    font-size: 16px;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background-color: ${props => props.backColor};
    cursor: pointer;
    font-family: 'DungGeunMo';
    line-height: 16px;
`;

function ImgInputBtn({height = 24, color = "#222", backColor = "#fff", title = "button", onChange }){

    // const {height, color, backColor, title, onClick } = props;

    return (
        <>
            <StyledInput type="file" accept="image/*" onChange={onChange}/>
            <StyledButton   as="span"
                            height={height}
                            color={color}  
                            backColor={backColor}                    
                            onClick={() => document.querySelector('input[type="file"]').click()}>
                {title || "button"}
            </StyledButton>
        </>
    )
}

export default ImgInputBtn;