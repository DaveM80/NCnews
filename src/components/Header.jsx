import React from 'react';
import TopNav from './TopNav';
import {StyledHeader} from './styles/StyledHeader';
import LocalHostLogo from './LocalHostLogo';


function Header(props) {
    return (
        <StyledHeader>
            <LocalHostLogo/>
            <p>Logged in as: {
                props.username
            }</p>
            <TopNav/>


        </StyledHeader>
    );
}

export default Header;
