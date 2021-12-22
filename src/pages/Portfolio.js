import React from 'react';
import styled from 'styled-components';
import '../Portfolio.css';
import {InputBox} from '../components/InputBox';
import PfList from '../components/PfList';
import {Count} from '../components/Count';
import Button from '@mui/material/Button';

const PortfolioMain = styled.main`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
`;

export const Portfolio = ({pfList,setPfList}) => {

    const onClickAllDelete = () => {
        if(window.confirm('정말 모든 포트폴리오를 지우겠습니까?'))
        {
            const allpfList = pfList.map((item)=>(
                {
                    ...item,
                    deleted : true 
                }
            ));
            setPfList(allpfList);
        }
    }

    return (
        <PortfolioMain>
            <InputBox pfList={pfList} setPfList={setPfList}/>
            <Count pfList={pfList}/>
            <Button variant="outlined" color="error" onClick={onClickAllDelete}>
                전체삭제
            </Button>
            <PfList 
                title={'진행중인 프로젝트'}
                pfList={pfList}
                setPfList={setPfList}
                checkedList={false}
            />
            <PfList 
                title={'완료된 프로젝트'}
                pfList={pfList}
                setPfList={setPfList}
                checkedList={true}
            />
        </PortfolioMain>
    );
}
