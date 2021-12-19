import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import '../Portfolio.css';
import {InputBox} from '../components/InputBox';
import PfList from '../components/PfList';
import {Count} from '../components/Count';

const PortfolioMain = styled.main`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
`;

export const Portfolio = ({pfList,setPfList}) => {
    return (
        <PortfolioMain>
            <InputBox pfList={pfList} setPfList={setPfList}/>
            <Count pfList={pfList}/>
            <PfList 
                pfList={pfList}
                setPfList={setPfList}
            />
        </PortfolioMain>
    );
}
