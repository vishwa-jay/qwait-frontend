import { Avatar, Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getVendorCategory } from "../../store/category/categoryAction";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ICat } from "../../typings/interfaces/ICatState";
import CustomCard from "../CustomCard/custom-card";
import { getVendorBranch } from "../../store/vendor/vendorAction";
import { IVendorBranch } from "../../typings/interfaces/IVendorState";
import { useNavigate } from "react-router-dom";
import { CUS_QUEUE_ROUTE } from "../../constants/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getAllReservations } from "../../store/queue/queueAction";
import SearchBox from "../SearchBox/search-box";

const CusHome = () => {
  const dispatch = useAppDispatch();
  const [selectedCat, setSelectedCat] = useState<ICat>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const { catResponse } = useAppSelector((state) => state.category);
  const { venResponse } = useAppSelector((state) => state.vendor);
  const { authResponse } = useAppSelector((state) => state.auth);
  const { allCusReserveResponse } = useAppSelector((state) => state.queue);
  const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

  const handleOnClick = (selected: ICat) => {
    setSelectedCat(selected);
  };

  const handleOnBranchClick = (selectedBranch: IVendorBranch) => {
    navigate(`${CUS_QUEUE_ROUTE}/${selectedBranch.id}`);
  };

  const handleSearch = (value: any) =>{
    setSearchTerm(value);
    dispatch(
      getVendorBranch({
        search: value,
        cat: selectedCat?.id || 0,
      })
    );
  }

  useEffect(() => {
    dispatch(getVendorCategory());
    authResponse && dispatch(getAllReservations(authResponse.id));
  }, []);

  useEffect(() => {
    dispatch(
      getVendorBranch({
        search: searchTerm,
        cat: selectedCat?.id || 0,
      })
    );
  }, [selectedCat]);

  return (
    <>
      <Grid
        container
        sx={{ minHeight: "120px", backgroundColor: "#c59dcb", padding: "10px" }}
      >
        <Grid item xl={8} md={8} xs={12} display={"flex"} flexDirection={"row"} alignContent={"center"} sx={{ height: "100px", marginX: "auto", marginBottom:1}} >
        <Typography variant="h5" sx={{ maxWidth:"150px", display: "flex", alignItems: "center"}}>Ongoing Reservations</Typography>
        <Box display={"flex"} flexDirection={"row"} alignContent={"center"} sx={{overflowX: "auto"}} className="scrollbar">
          {allCusReserveResponse &&
            allCusReserveResponse.map((res: any) => {
              return (
                <Box display={"flex"} flexDirection={"row"} sx={{marginX: "3px", minWidth: "200px",maxWidth: "200px",}}>
                  <Chip
                    sx={{
                      backgroundColor: "#fff",
                      fontSize: "16px",
                      padding: "5px",
                      maxWidth: "200px",
                      "&.MuiChip-root": { height: "90%" },
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                      },
                    }}
                    label={`No:${res.queueno} at ${res.vendorbranch.branch_name} - ${res.vendorbranch.vendor.vendor_name}`}
                    onClick={() =>
                      navigate(`${CUS_QUEUE_ROUTE}/${res.vendorbranch.id}`)
                    }
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xl={4} md={4} xs={12} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent= "end" >
          <Box sx={{ height: "50px", display: "flex", justifyContent: "center", width:"100%" }}><SearchBox onChange={(value) => handleSearch(value)} /></Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ maxHeight: "calc(100vh-250px)", overflow: "scroll" }}
        justifyContent={"center"}
      >
        {!selectedCat && searchTerm == "" ? (
          <>
            <Grid item xs={12} sx={{ padding: "15px 15px" }}>
              <Typography variant="h4">Categories</Typography>
            </Grid>
            {catResponse &&
              catResponse.map((cat: ICat) => {
                return (
                  <CustomCard handleOnClick={(e) => handleOnClick(cat)}>
                    <Grid container justifyContent={"center"}>
                      <Grid item xs={12} className="heroSectionImgContainer">
                        <img
                          src={`${imgBaseUrl}${cat.img}`}
                          alt=""
                          className="heroSectionImg"
                        />
                      </Grid>
                      <Grid item>{cat.category_name}</Grid>
                    </Grid>
                  </CustomCard>
                );
              })}
          </>
        ) : (
          <>
            <Grid item xs={12} sx={{ padding: "15px 15px" }}>
              <Button
                variant="contained"
                onClick={() =>{
                  setSelectedCat(undefined);
                  setSearchTerm("");
                }}
                startIcon={<ArrowBackIcon />}
              >
                Go To Categories
              </Button>
              <Typography variant="h4">
                Selected: {selectedCat && selectedCat.category_name}
              </Typography>

              <Grid container display={"flex"} flexDirection={"row"}>
              {venResponse &&
                venResponse.length > 0 &&
                venResponse.map((b) => {
                  return (
                    <CustomCard handleOnClick={(e) => handleOnBranchClick(b)}>
                      <Grid container justifyContent={"center"}>
                        <Grid item xs={12} className="heroSectionImgContainer">
                          <img
                            src={`${imgBaseUrl}${
                              b.image || "defaultVendor.png"
                            }`}
                            alt=""
                            className="heroSectionImg"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                          {b.branch_name}
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                          {b.vendor.vendor_name}
                        </Grid>
                      </Grid>
                    </CustomCard>
                  );
                })
              }
              </Grid>
              {venResponse && venResponse.length < 1 && (
                <Typography variant="h5">Sorry! No Vendors Found!</Typography>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default CusHome;
