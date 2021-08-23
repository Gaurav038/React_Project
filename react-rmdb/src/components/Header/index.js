import React from 'react';

import {Link} from 'react-router-dom';
import Logo1 from '../../images/react-movie-logo.svg';
import Logo2 from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={Logo1} alt="rmdb-logo" />
            </Link>
            <TMDBLogoImg src={Logo2} alt="TMDB-logo" />
        </Content>
    </Wrapper>
);

export default Header;