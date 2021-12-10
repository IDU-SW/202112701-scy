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
            <div class="content">
                <h1 id="about-me">About Me</h1>
                I love PHP 😍 «&nbsp;This can express me in one sentence. 😉<br/>
                Currently, I’m learning Vanila Javascript , React , Node.js <br/>
                I want to be a Front-end Web Developer

                <br/>

                <h1 id="career">Career</h1>
                <ul>
                    <li>First Company (2020/10 ~ ing)
                        <ul>
                            <li>1st B2B Open Market</li>
                            <li>PHP Web Developer</li>
                        </ul>
                    </li>
                </ul>

                <br/>

                <h1 id="interests">Interests</h1>
                I am interested in technology trends.<br/>
                I’m not afraid to learn languages.🤭<br/>
                I like to study many languages.<br/>
                I want to be a great at web development.<br/>
                In Php ,React ,Node.js …or else. 🧐

                <br/>
            </div>
        </About>
    );
}
