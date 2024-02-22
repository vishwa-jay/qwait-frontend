import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  height: '100px',
  position: 'static',
  backgroundColor: '#8c3c99',
  display: "flex",
  flex: 1
}));

export const StyledToolbar = styled(Toolbar)({
  '@media (min-width: 0px)': {
    minHeight: '65px'
  },
  '@media (min-width: 744px)': {
    minHeight: '65px'
  },
});




