import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../Portfolio.css';
import {InputBox} from '../components/InputBox';
import PfList from '../components/PfList';

const PortfolioMain = styled.main`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
`;

export const Portfolio = () => {
    const [pfList, setPfList] = useState([]); //전체 포트폴리오 리스트

    const sticky_note = <FontAwesomeIcon icon={faStickyNote} />
    const calendar_alt = <FontAwesomeIcon icon={faCalendarAlt} />
    const fa_cog = <FontAwesomeIcon icon={faCog} />

    return (
        <PortfolioMain>
            <InputBox pfList={pfList} setPfList={setPfList}/>
            <PfList 
                pfList={pfList}
                setPfList={setPfList}
            />
        </PortfolioMain>
    );
}
