import React, { useEffect , useState , useRef} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const ItemName = styled.span`
    flex: 1;
    ${({chk}) => {
        return chk === true ? 
        'font-style: italic; text-decoration: line-through; color: #868e96;'
        : null;
    }}
`;
const EditBtn = styled.button`
    border: none; 
    border-radius: 0; 
    height: 36px; 
    width: 36px; 
    margin-right: 3px;
    background-color: inherit;
    &:hover {
        cursor: pointer;
        background-color: #d0ebff;
      }
`;
const DelBtn = styled.button`
    border: none; 
    border-radius: 0; 
    height: 36px; 
    width: 36px; 
    background-color: inherit;
    &:hover {
        cursor: pointer;
        background-color: #d0ebff;
      }
`;
const EditInput = styled.input`
flex: 1; 
border: 1px solid black; 
padding: 5px; 
font-size: 1em; 
box-sizing: border-box;
`;
const CheckBox = styled.input`
    margin-right: 10px;
`;
const PfItem = ({pfItem,pfList,setPfList,checked}) => {
    const editInputRef = useRef(null);

    const [edited,setEdited] = useState(false);
    const [newTitle,setnewTitle] = useState(pfItem.title);//처음에는 기존의 값
    const [newProject,setnewProject] = useState(pfItem.title);//처음에는 기존의 값
    const [newSkill,setnewSkill] = useState(pfItem.title);//처음에는 기존의 값

    const onClickDelete = () => {
        if(window.confirm('해당 포트폴리오를 지우겠습니까?'))
        {
            const nextpfList = pfList.map((item)=>(
                {
                    ...item,
                    deleted : item.id === pfItem.id ? true : item.deleted
                }
            ));
            setPfList(nextpfList);
        }
    }

    const onChangeChk = () => {
        //리스트를 돌리면서 해당하는 id값인 경우 done을 반대로 처리함.
        //아니라면 그냥 done 값 유지
        const nextpfList = pfList.map((item) => (
            {
                ...item,
                done : item.id === pfItem.id ? !item.done : item.done
            }
        ));
        //다시 리스트 값 설정
        setPfList(nextpfList);
    };

    //수정버튼으로 변경하기
    const onClickEditButton = () => 
    {
        setEdited(true);
    }

    //새로운 글자 세팅
    const onChangeEditTitle = (e) => {
        setnewTitle(e.target.value);
    }

    const onChangeEditProject = (e) => {
        setnewProject(e.target.value);
    }

    const onChangeEditSkill = (e) => {
        setnewSkill(e.target.value);
    }

    //서브밋시키기
    function onClickSubmitButton (){
        const nextpfList = pfList.map((item)=>(
            {
                ...item,
                title : item.id === pfItem.id ? newTitle : item.title,
                project : item.id === pfItem.id ? newProject : item.project,
                skill : item.id === pfItem.id ? newSkill : item.skill
            }
        ));
        setPfList(nextpfList); //새롭게 리스트 수정

        setEdited(false); // 수정상태에서 다시 읽기로 변경
    }

    useEffect(()=> {
        if (edited)
        {
            editInputRef.current.focus();
        }
    },[edited]);
    
    const sticky_note = <FontAwesomeIcon icon={faStickyNote} />
    const calendar_alt = <FontAwesomeIcon icon={faCalendarAlt} />
    const fa_cog = <FontAwesomeIcon icon={faCog} />

    return (
        <div class="portfolio-item">
                <div>
                    <h1 class="portfolio-title">
                    <CheckBox onChange={onChangeChk} checked={pfItem.done} type="checkbox" />
                        {
                            edited ? 
                            <EditInput
                                name="title"
                                type="text"
                                value={newTitle}
                                ref={editInputRef}
                                onChange={onChangeEditTitle}
                            /> :
                           <ItemName chk={checked}>{pfItem.title}</ItemName>
                         }
                    </h1>
                    <div class="portfolio-line"></div>

                    <div class="portfolio-content"> 
                        <span class="portfolio-icon">
                            {sticky_note} <span class="portfolio-icon-text">
                            {
                                edited ? 
                                    <EditInput
                                        name="project"
                                        type="text"
                                        value={newProject}
                                        onChange={onChangeEditProject}
                                    /> :
                                    <ItemName chk={checked}>{pfItem.project}</ItemName>
                            }
                         </span>
                        </span>
                        <br/>
                        <span class="portfolio-icon">
                            {calendar_alt} <span class="portfolio-icon-text">{pfItem.date}</span>
                        </span>
                        <br/>
                        <span class="portfolio-icon">
                            {fa_cog} <span class="portfolio-icon-text">
                            {
                                edited ? 
                                    <EditInput
                                        name="skill"
                                        type="text"
                                        value={newSkill}
                                        onChange={onChangeEditSkill}
                                    /> :
                                    <ItemName chk={checked}>{pfItem.skill}</ItemName>
                            }
                            </span>
                        </span>
                    </div>
                </div>
            { 
                //완료된 프로젝트는 수정 불가
                !pfItem.done ? 
                    edited ? 
                    (<EditBtn type="button" onClick={onClickSubmitButton} > 👌 </EditBtn>) :
                    (<EditBtn type="button" onClick={onClickEditButton}> ✏ </EditBtn>)
                : null
            }
            <DelBtn type="button" onClick={onClickDelete}> 🗑 </DelBtn>
        </div>
    );
}

export default PfItem;