import React, {useState} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 4px 8px;
    width: 93px;
    height: 50px;
    font-size: 20px;
    font-family: 'DungGeunMo';
    border: 1px solid #222;
    border-left: none;
    border-radius: 0 12px 12px 0;
    color: ${props => (props.isActive ? '#222' : '#fff')};;
    background-color: ${props => (props.isActive ? '#fff' : '#218FB4')};
    cursor: pointer;
`;

function SideButton(props){

    const { title, onClick, isActive } = props;
    // const [path, setPath] = useState(window.location.pathname)

    // function update(){
    //     setPath(window.location.pathname)
    // }

    return (
        <StyledButton onClick={onClick} isActive={isActive}>
            {title || "게시판"}
        </StyledButton>
    )
}

export default SideButton;