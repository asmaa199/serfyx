import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandlogo';
import { Button } from '../button';

import {Link} from 'react-router-dom';
import { Marginer } from '../marginer';
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";


const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};

`;

const NavItemsContainer = styled.div`
     height:100%;
     display: flex;
     align-items: center;
`;

const AnchorLink = styled(Link)`
     font-size: 16px;
     color: #fff;
     cursor: pointer;
     text-decoration: none;
     outline: none;
     transition: all 200ms ease-in-out;

     &:hover {
        filter: contrast(0.6); 
     }

`;

const Seperator = styled.div`
    min-height:35%;
    width: 1px;
    background-color: #fff;
`; 

export function Navbar(props) {
    const { useTransparent } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  

    return <NavbarContainer useTransparent={useTransparent}>
        <BrandLogo />
        <NavItemsContainer> 
        {!isMobile && <AnchorLink>Specialists Portal</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />}
         <Marginer direction="horizontal" margin={10} />
         <Link to="/customer/access/signup">
            <Button size={11}>Register</Button>
         </Link>
        <Marginer direction="horizontal" margin={8} />
        <AnchorLink to="/customer/access/signin">Login</AnchorLink>
       
        </NavItemsContainer>
    </NavbarContainer>
}