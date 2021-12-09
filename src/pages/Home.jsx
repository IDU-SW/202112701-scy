import React , {useState} from 'react';
import styled from 'styled-components';
import {Header} from '../components/Header';

const Homepage = styled.div`
    min-width : 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Home = () => {
   // const [todoList, setTodoList] = useState([]);

    return (
        <Homepage>
           <Header></Header>
        </Homepage>
    );
}

export default Home;