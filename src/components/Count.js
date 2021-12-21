import React from 'react';
import styled from 'styled-components';

export const Count = ({pfList}) => {
   return (
    <div>전체 : {pfList.filter( item => !item.deleted).length } / 진행중인 프로젝트 : {pfList.filter( item => !item.deleted && !item.done).length }</div>
   )
}
