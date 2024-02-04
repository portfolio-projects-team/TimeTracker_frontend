import React, { useState } from 'react';
import { Link, Box, Text, Button, Stack } from '@chakra-ui/react';

import { NavBarContainer } from './NavContainer';
import Logo from '../Logo/logo';

interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ children, to = '/' }) => {
  return (
    <Link href={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};

interface MenuLinksProps {
  isOpen: boolean;
  isGuest: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen, isGuest }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {isGuest && (
          <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/dashboard">Dashboard</MenuItem>
            <MenuItem to="/signin">Sign In</MenuItem>
            <MenuItem to="/signup" isLast>
              <Button>Create Account</Button>
            </MenuItem>
          </>
        )}

        {!isGuest && <MenuItem to="/logout">Logout</MenuItem>}
      </Stack>
    </Box>
  );
};

const NavBar: React.FC<{ isGuest: boolean }> = ({ isGuest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo
        w="100px"
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} isGuest={isGuest} />
    </NavBarContainer>
  );
};

export default NavBar;
