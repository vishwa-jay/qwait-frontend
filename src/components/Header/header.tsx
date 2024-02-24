import React, { useState } from "react";
import { Box, Grid, Avatar, Typography, IconButton, Button } from "@mui/material";
import { StyledAppBar, StyledToolbar } from "./header.components";
import useLoggedUser from "../../hooks/useLoggedUser";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UserProfilePopOver from "../UserProfilePopOver/userProfilePopOver";
import PopOver from "../Popover/popover";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { logout } from "../../store/auth/authAction";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";

type HeaderProps = {
  handleToggle : (open: boolean) => void
}

const Header = (props: HeaderProps) => {
  const user = useLoggedUser();
  const dispatch = useDispatch();
  //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  //const [open, setOpen] = useState(true);
  
  //const { profileResponse } = useSelector((state: AppState) => state.profile);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleDrawerToggle = () => {
  //   setOpen((open) => !open);
  //   props.handleToggle(open);
  // };

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return (
    <>
      <Box data-testid="header">
        <StyledAppBar data-testid="app-bar" position="fixed">
          <StyledToolbar sx={{paddingLeft: "0px !important"}}>
            <Grid container sm={12} xs={12}>
              <img src={logo} width={200}/>
            </Grid>
            <Grid container sm={12} xs={12} justifyContent="flex-end" alignItems="center" gap={1} sx={{paddingTop: "10px"}}>
              <Grid item xs={12} justifyContent={"flex-end"}>
                <Typography
                  sx={{
                    color: "#fff",
                    marginLeft: "20px",
                    marginRight: "20px",
                    alignItems: "center",
                    textAlign: "end",
                    fontSize: "14px"
                  }}
                >Logged as: {user?.name}
                </Typography>
              </Grid>
              <Grid item justifyContent={"flex-end"} display={"flex"} gap={1}>
                <Button variant="outlined" sx={{color: "#fff", borderColor: "#fff"}} startIcon={<SettingsOutlinedIcon />}>
                  Settings
                </Button>
                <Button variant="outlined" sx={{color: "#fff", borderColor: "#fff"}} onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
              
              {/* <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton> */}
              {/* <PopOver handleClose={handleClose} anchorEl={anchorEl}>
                <UserProfilePopOver handleClose={handleClose} />
              </PopOver> */}
            </Grid>
          </StyledToolbar>
        </StyledAppBar>
      </Box>
    </>
  );
};

export default Header;
