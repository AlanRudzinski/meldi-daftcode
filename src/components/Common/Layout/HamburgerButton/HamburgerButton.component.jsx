import React from 'react';

import {Hamburger, Box, Line} from './HamburgerButton.styles'

const HamburgerButton = ({ menuOpen, handleClick }) => (
  <Hamburger type="button" onClick={() => handleClick()}>
    <Box>
      <Line menuOpen={menuOpen} />
    </Box>
  </Hamburger>
);

export default HamburgerButton;