import React, { useEffect , useState , useRef} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

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
const EditInput = styled.input`
flex: 1; 
border: none; 
border-bottom: 1px solid #f1f3f5; 
padding: 5px; 
font-size: 1em; 
box-sizing: border-box;
`;

const PfItem = ({pfItem,pfList,setPfList}) => {
    const editInputRef = useRef(null);

    const [edited,setEdited] = useState(false);
    const [newText,setnewText] = useState(pfItem.title);//처음에는 기존의 값임 , 제목만 수정가능..

    //수정버튼으로 변경하기
    const onClickEditButton = () => 
    {
        setEdited(true);
    }

    //새로운 글자 세팅
    const onChangeEdit = (e) => {
        setnewText(e.target.value)
    }

    //서브밋시키기
    function onClickSubmitButton (){
        const nextpfList = pfList.map((item)=>(
            {
                ...item,
                title : item.id === pfItem.id ? newText : item.title
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
                        {
                            edited ? 
                            <EditInput
                                type="text"
                                value={newText}
                                ref={editInputRef}
                                onChange={onChangeEdit}
                            /> :
                            pfItem.title
                         }
                    </h1>
                    <div class="portfolio-line"></div>

                    <div class="portfolio-content"> 
                        <span class="portfolio-icon">
                            {sticky_note} <span class="portfolio-icon-text">{pfItem.project}</span>
                        </span>
                        <br/>
                        <span class="portfolio-icon">
                            {calendar_alt} <span class="portfolio-icon-text">{pfItem.date}</span>
                        </span>
                        <br/>
                        <span class="portfolio-icon">
                            {fa_cog} <span class="portfolio-icon-text">{pfItem.skill}</span>
                        </span>
                    </div>
                </div>
            { 
                edited ? 
                (<EditBtn type="button" onClick={onClickSubmitButton} > 👌 </EditBtn>) :
                (<EditBtn type="button" onClick={onClickEditButton}> ✏ </EditBtn>)
            }

        </div>
    );
}

export default PfItem;