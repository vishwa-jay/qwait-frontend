import { Avatar, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getVendorCategory } from "../../store/category/categoryAction";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ICat } from "../../typings/interfaces/ICatState";
import CustomCard from "../CustomCard/custom-card";
import { getVendorBranch } from "../../store/vendor/vendorAction";
import { IVendorBranch } from "../../typings/interfaces/IVendorState";
import { useNavigate } from "react-router-dom";
import { CUS_QUEUE_ROUTE } from "../../constants/routes";

const CusHome = () => {
  const dispatch = useAppDispatch();
  const [selectedCat, setSelectedCat] = useState<ICat>();
  const navigate = useNavigate();
  const { catResponse } = useAppSelector((state) => state.category);
  const { venResponse} = useAppSelector((state)=>state.vendor);
  const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

  const handleOnClick = (selected: ICat) => {
    setSelectedCat(selected);
  };

  const handleOnBranchClick =(selectedBranch: IVendorBranch) =>{
    navigate(`${CUS_QUEUE_ROUTE}/${selectedBranch.id}`);
  }

  useEffect(() => {
    dispatch(getVendorCategory());
  }, []);

  useEffect(()=>{
    dispatch(getVendorBranch({
      search: "",
      cat: selectedCat?.id || 0
    }))
  },[selectedCat])

  return (
    <>
      <Grid
        container
        sx={{ height: "100px", backgroundColor: "#c59dcb" }}
      ></Grid>

      <Grid
        container
        sx={{ maxHeight: "calc(100vh-250px)", overflow: "scroll" }}
        justifyContent={"center"}
      >
        {!selectedCat ? (
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
            <Button variant="outlined" onClick={() =>setSelectedCat(undefined)}>
                  Go To Categories
              </Button>
              <Typography variant="h4">
                Selected: {selectedCat.category_name}
              </Typography>

              {venResponse && venResponse.length > 0 && venResponse.map((b)=>{
                return <CustomCard handleOnClick={(e) => handleOnBranchClick(b)}>
                <Grid container justifyContent={"center"}>
                  <Grid item xs={12} className="heroSectionImgContainer">
                    <img
                      src={`${imgBaseUrl}${b.image || "defaultVendor.png"}`}
                      alt=""
                      className="heroSectionImg"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: "center"}}>{b.branch_name}</Grid>
                  <Grid item xs={12} sx={{ textAlign: "center"}}>{b.vendor.vendor_name}</Grid>
                </Grid>
              </CustomCard>
              })}

              { venResponse && venResponse.length < 1 && <Typography variant="h5">Sorry! No Vendors Found!</Typography>}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default CusHome;
