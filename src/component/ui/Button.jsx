import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
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

function Button(props){

    const {height, color, backColor, title, onClick } = props;

    return (
        <StyledButton   height={height || 24}
                        color={color || "#222"}  
                        backColor={backColor || "#fff"}                    
                        onClick={onClick}>
                        {title || "button"}
        </StyledButton>
    )
}

export default Button;