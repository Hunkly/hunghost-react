import React, {useEffect, useState} from 'react';
import StyledHeader from './Header.styled';
import UserMenu from './UserMenu';
import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu';
import {CurrentSession} from "../../../store/currentSession/actionTypes";
import {connect} from "react-redux";
import {saveState} from "../../../store/localStorage";


let list: CurrentSession = JSON.parse(localStorage.getItem('state') || '{}');
saveState(list);


function Header() {
    const [logged, setLogged] = useState(list.isLogged);
    let one = true;

    useEffect(
        () => {
            list = JSON.parse(localStorage.getItem('state') || '{}');
            saveState(list);
            console.log('Header -> localStorage: ', list);
            if(one) {
                setLogged(list.isLogged);
            }
        }
    );

    return (
        <StyledHeader user={list.isLogged}>
            <div className = "header">
                <Container>
                    <div className = "header__subheader">
                        {logged ? <UserMenu/> : null}
                        <Logo user={logged}/>
                        {logged ? <Menu/> : null}
                    </div>
                </Container>
            </div>
        </StyledHeader>
    );
}

function mapStateToProps(state: CurrentSession){
    return {
        isLogged: state.isLogged,
        account: {
            login: state.account.login,
            password: state.account.password
        }
    }
}

export default connect(mapStateToProps)(Header)