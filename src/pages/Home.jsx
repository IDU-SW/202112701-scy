import React , {useState} from 'react';
import styled from 'styled-components';
import {Header} from '../components/Header';
import {Main} from '../components/Main';

const Homepage = styled.div`
    min-width : 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Home = () => {
    const [pfList, setPfList] = useState([]); //전체 포트폴리오 리스트

    return (
        <Homepage>
           <Header pfList={pfList} setPfList={setPfList}></Header>
        </Homepage>
    );
}

export default Home;