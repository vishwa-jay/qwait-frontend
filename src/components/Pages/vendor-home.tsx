import { Box, Button, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { getQueueByQueueNo, getVendorsAllReservations } from "../../store/vendor/vendorAction";

const VendorHome = () =>{
    const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;
    const { authResponse } = useAppSelector((state) => state.auth);
    const { venAllReservationsResponse, currentServingNoResponse} = useAppSelector((state)=> state.vendor);
    const dispatch = useAppDispatch();

    const handleQueueStart = () =>{
        dispatch(getQueueByQueueNo({
            vendorId: authResponse.branch_id,
            qno: 1
        }));
    }

    useEffect(()=>{
        dispatch(getVendorsAllReservations(authResponse.branch_id));
    },[]);
    return <>
    <Grid
        container
        sx={{ minHeight: "300px", maxHeight: "calc(100vh-250px)" }}
        justifyContent={"center"}
        alignItems={"center"}
      >{JSON.stringify(currentServingNoResponse)}
        <Box sx={{backgroundColor: "#c59dcb", minHeight: "150px", padding: "20px", borderRadius:"10px", boxShadow: "0px 21px 41px -16px rgba(77,60,77,1)", marginTop:"10px"}}>
            <Typography variant="h5" sx={{marginY:"20px"}}>Clients are waiting...</Typography>
            <Box display={"flex"} flexDirection={"row"} gap={4}>
                <Box className="heroSectionImgContainer" >
                    <img src={`${imgBaseUrl}defaultVendor.png`} alt=""style={{borderRadius:"50%", border: "5px solid #8c3c99"}} className="heroSectionImg" />
                </Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h6">Currently your</Typography>
                    <Typography variant="h6">queue length is</Typography>
                    <Typography variant="h3">{venAllReservationsResponse}</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{minHeight: "120px", padding: "20px"}}>
            {/* <Typography variant="h5">Waiting Clients</Typography> */}
            {/* <Box display={"flex"} flexDirection={"row"} gap={3}>
                <Box>
                    <img src={`${imgBaseUrl}defaultVendor.png`} alt="" className="heroSectionImg" />
                </Box>
                <Box>
                    <Typography variant="h6">Currently your queue length is 10</Typography>
                </Box>
            </Box> */}
            <Button
                  variant="contained"
                  onClick={handleQueueStart}
                  fullWidth
                  sx={{
                    height: "80px",
                    minWidth: "120px",
                    maxWidth: "280px",
                    backgroundColor: "#8c3c99",
                  }}
                >
                  <Typography variant="h6">Start Queue</Typography>
                </Button>
        </Box>
    </Grid>
    </>;
}

export default VendorHome;