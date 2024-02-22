import { List, ListItemButton, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { StyledPopover } from './popover.components';

interface IPopOverProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children?: ReactNode;
}

const PopOver =(props: IPopOverProps) => {
  const { anchorEl, handleClose, children } = props;
  const open = Boolean(anchorEl);
  const id = open ? 'basic-popover' : undefined;

  return (
    <>
      <StyledPopover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </StyledPopover>
    </>
  );
}

export default PopOver;
