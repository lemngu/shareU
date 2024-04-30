import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 4px 8px;
    margin-left: 10px;
    font-size: 16px;
    font-family: 'DungGeunMo';
    border: none;
    background-color: #fff;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);
    color: ${props => props.color};
    cursor: pointer;
    line-height: 16px;
`;

function NavButton(props){

    const {title, color} = props;

    return (
        <StyledButton   color={color || '#222'}>
            {title || "button"}
        </StyledButton>
    )
}

export default NavButton;