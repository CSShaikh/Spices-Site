import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const NavItemsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  padding: 8px 15px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DropdownMenuItem = styled.li`
  padding: 8px 15px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navbar2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const Navigate = useNavigate();
  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavbarContainer>
      <DropdownContainer>
        <DropdownButton onClick={handleDropdownClick}>Products</DropdownButton>
        <DropdownMenu open={dropdownOpen}>
          <DropdownMenuItem>Ground Spices</DropdownMenuItem>
          <DropdownMenuItem>Blended Spices</DropdownMenuItem>
          <DropdownMenuItem>Whole Spices</DropdownMenuItem>
        </DropdownMenu>
      </DropdownContainer>
      <NavItemsContainer>
        <NavItem>Shop</NavItem>
        <NavItem
          onClick={() => {
            Navigate('/');
          }}
        >
          Home
        </NavItem>
        <NavItem
          onClick={() => {
            Navigate('/AboutUs');
          }}
        >
          About Us
        </NavItem>
        <NavItem
          onClick={() => {
            Navigate('/ContactUs');
          }}
        >
          Contact Us
        </NavItem>
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar2;
