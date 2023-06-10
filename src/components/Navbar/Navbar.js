import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons';
import Navbar2 from './Navbar2/Navbar2.js';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const Logo = styled.img`
border-radius:50%;
  width: 60px;
  height: auto;
`;

const SearchBar = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  padding: 8px 15px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NavbarIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: auto;
  margin-left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <Logo
          src="https://th.bing.com/th/id/OIP.z5BunubXhyNZwQ6uls0NqAHaH_?pid=ImgDet&rs=1"
          alt="Logo"
        />
        <SearchBar type="text" placeholder="Search" />
        <LoginButton>Login</LoginButton>
        <NavbarIconsContainer>
          <Icon
            onClick={() => {
              Navigate('/Wishlist');
            }}
            src="https://cdn1.iconfinder.com/data/icons/dangdut/32/Add_to_Favorite-512.png"
            alt="Wishlist"
          />
          {/* <AiFillHeart /> */}
          <Icon
            onClick={() => {
              Navigate('/Cart');
            }}
            src="https://th.bing.com/th/id/R.de4a62e2667a27333cd5f4e94256c712?rik=u7h2vidMygPQWw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_287768.png&ehk=gjxmWBhI4ci6TZX2yh%2fwM82jFQk2HCYJIoYpsY9iEt0%3d&risl=&pid=ImgRaw&r=0"
            alt="Cart"
          />
        </NavbarIconsContainer>
      </NavbarContainer>
      <Navbar2 />
    </>
  );
};

export default Navbar;
