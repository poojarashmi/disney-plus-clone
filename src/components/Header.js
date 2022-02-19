import React from 'react';
import styled from 'styled-components';

function Header() {
  return <Nav>
      {/* logo of the website */}
      <Logo src='/images/logo.svg'/>

      {/* Navigational Links */}
      <NavMenu>
        {/* Home */}
        <a>
            <img src='/images/home-icon.svg' alt='Home'/>
            <span>Home</span>
        </a>

        {/* Search */}
        <a>
            <img src='/images/search-icon.svg' alt='Search'/>
            <span>Search</span>
        </a>

        {/* Watchlist */}
        <a>
            <img src='/images/watchlist-icon.svg' alt='Watchlist'/>
            <span>Watchlist</span>
        </a>

        {/* Originals */}
        <a>
            <img src='/images/original-icon.svg' alt='Originals'/>
            <span>Originals</span>
        </a>

        {/* Movies */}
        <a>
            <img src='/images/movie-icon.svg' alt='Movies'/>
            <span>Movies</span>
        </a>

        {/* Series */}
        <a>
            <img src='/images/series-icon.svg' alt='Series'/>
            <span>Series</span>
        </a>
      </NavMenu>

      {/* User Profile */}
      <UserImg src='https://media-exp1.licdn.com/dms/image/C5103AQEwYNkF05c8WA/profile-displayphoto-shrink_800_800/0/1576724680683?e=1649289600&v=beta&t=VpOGu0AGkUpb8Iu8unNgkc49BI2dkURAxDfL8sbw0Zg' alt='Profile'/>
  </Nav>;
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        span{
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin: left center;
                opacity: 0;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }

        img{
            height: 20px;
        }
    }
`

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
`