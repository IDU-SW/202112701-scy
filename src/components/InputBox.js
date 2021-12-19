import React, {useState,useRef,useEffect} from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Inputbox = styled.div`
    margin-top:20px;
    padding:10px;
    width: 350px;
    border : 1px solid #000000; 
`;
const Inputbox_inp = styled.input`
flex: 1; 
border: none; 
border-bottom: 1px solid #f1f3f5; 
padding: 10px; 
height: 50px; 
box-sizing: border-box;
`;
const Btn = styled.button`
border: none; 
border-radius: 0; 
background-color: #d0ebff; 
color: #1c7ed6; 
height: 30px; 
width: 50px; 
font-weight: bold;
&:hover {
    cursor: pointer;
    background-color: #1f9dfa;
  }
`;

export const InputBox = ({pfList,setPfList}) => {
    const [title,setTitle] = useState('');
    const [project,setProject] = useState('');
    const [skill,setSkill] = useState('');
    const [portfolio,setPortfolio] = useState('');
    const inputRef = useRef(null);

    //정상동작 확인(pfList에 대해서)
    // useEffect(() => {
    //     console.log(pfList);
    // },[pfList])

    const TitleHandler = (e) => {
        setTitle(e.target.value);
    }

    const ProjectHandler = (e) => {
        setProject(e.target.value);
    }

    const SkillHandler = (e) => {
        setSkill(e.target.value);
    }

    const onClickBtn = () => {
        if(!title || !project || !skill)
        {
            alert('값이 빠졌습니다. 빈값을 확인하고 다시 입력해주세요');
            return false;
        }

        const today = new Date();

        const nextpfList = pfList.concat({
            id: pfList.length,
            title : title,
            project : project,
            skill : skill,
            date : today.getFullYear()+'-'+(today.getMonth() + 1)+'-'+today.getDate(),
            done : false
        })

        setPfList(nextpfList);

        //input값 초기화
        setTitle('');
        setProject('');
        setSkill('');
        
        // inputRef.current.focus(); //클릭 후 포커싱
        console.log(nextpfList);
    }

    return (
        <Inputbox>
            <p><b>포트폴리오 추가하기</b></p>
            제목 : <input type="text" name="title" ref={inputRef} onChange={TitleHandler} value={title}/> <br/>
            프로젝트명 : <input type="text" name="project" onChange={ProjectHandler} value={project}/> <br/>
            사용 스킬명 : <input type="text" name="skill" onChange={SkillHandler} value={skill}/> <br/>
            <Btn onClick={onClickBtn} type="submit">추가</Btn>
        </Inputbox>
    );
}
