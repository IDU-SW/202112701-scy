import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import '../Main.css';

const About = styled.main`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
`;

export const Main = () => {
    return (
        <About>
            <div class="about">
                <div class="profile">
                    <img className="selfie" alt="ChaeYeon Son" src={`${process.env.PUBLIC_URL}/zepeto.jpg`}/>
                    <div class="info">
                        <div class="title">ChaeYeon Son</div>
                        <div class="description">PHP web developer</div>
                    </div>
                </div>
            </div>
        </About>
    );
}
