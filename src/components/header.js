import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';

const Menu = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color:#f0f0f0;
padding-bottom:30px;
`;
const MenuBox = styled.ul`
margin : 0 auto;
margin-top:30px;
`;
const MenuList = styled.li`
list-style-type:none;
float:left;
margin-right:100px;
`;
const Btn = styled.button`
border: none; 
border-radius: 0; 
background-color: #d0ebff; 
color: #1c7ed6; 
height: 50px; 
width: 50px; 
font-weight: bold;
&:hover {
    cursor: pointer;
    background-color: #1f9dfa;
  }
`;

export const Header = () => {

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <Menu>
            <MenuBox>
                <MenuList>끄적끄적</MenuList>
                <MenuList>뷰티</MenuList>
                <MenuList>코딩</MenuList>
            </MenuBox>
        </Menu>
    );
}
