import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
   border: none;
   outline:none;
   color:#fff;
   padding: 7px 1.4em;
   font-size: ${({size}) => size ? size + 'px' : "18px"};
   font-weight: 600;
   border-radius:10px;
   background-color:#008080;
   cursor:pointer;
   transition: all 200ms ease-in-out;

   &:hover{
    background-color:#40e0d0;
   }

   &:focus {
       outline:none;
   }
`;

export function Button(props) {
    const {size} = props;
    return <ButtonWrapper size={size} className={props.className}>
        {props.children}
    </ButtonWrapper>
}