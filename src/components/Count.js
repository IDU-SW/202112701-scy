import React from 'react';
import styled from 'styled-components';

export const Count = ({pfList}) => {
   return (
    <div>전체 : {pfList.filter( item => !item.deleted).length }</div>
   )
}
