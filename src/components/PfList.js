import React from 'react';
import PfItem from './PfItem';
import styled from 'styled-components';

const ListBox = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
`;
const ListTitle = styled.p`
font-weight: bold;
margin: 0;
}
`;
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column; 
justify-content: center;
 padding: 0;
`;

const PfList = ({title,pfList,setPfList,checkedList}) => {
    
    return(
        <ListBox>
            <ListTitle>{title}</ListTitle>
            <List>
               {pfList && //pfList가 있을때만 함
                pfList.map((item)=>
                { 
                    //받아온 checkList값에 따라 내용 출력
                    if(checkedList !== item.done) return null;

                    //삭제된 포트폴리오는 출력하지 않음
                    if(item.deleted) return null;

                    return (
                        <PfItem 
                            key={item.id}
                            pfItem={item}
                            pfList={pfList}
                            setPfList={setPfList}
                            checked={checkedList}
                        />
                    )
                }
                )}
            </List>
        </ListBox>
    );
}

export default PfList;