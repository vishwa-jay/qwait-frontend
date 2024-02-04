import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, LinearProgress } from "@mui/material";
import { StyledContentBox, StyledMainContentDiv } from "./layout.components";
//import useIsAuthenticated from "../../hooks/useIsAuthenticated";
// import { AppState } from "../../store/reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
// import NavBar from "../NavBar/navBar";
// import Header from "../Header/header";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../../hooks/useIsAuthenticated";
// import { getFeatureListByRole } from "../../store/actions/featureAction";
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // const { response, errors, loading } = useSelector(
  //   (state: AppState) => state.user
  // );

  const handleDrawerToggle = (open: boolean) => {
    setOpen(open);
  };

  // useEffect(() => {
  //   if (response?.data) {
  //     dispatch(
  //       getFeatureListByRole(
  //         response?.data.profile.company_id,
  //         response?.data.role
  //       )
  //     );
  //   }
  // }, [response]);

  return (
    <>
      <Grid container sx={{}}>
        <StyledMainContentDiv
          id="main-content"
          data-testid="main-content"
          open={true}
          noSideNav={true}
          sx={{width: "calc(100%)"}}
        >
          <StyledContentBox>{props?.children}</StyledContentBox>
        </StyledMainContentDiv>
      </Grid>
    </>
  );
}
