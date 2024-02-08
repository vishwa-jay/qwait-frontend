import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import {
  getCurrentServingNum,
  getNextNum,
} from "../../store/queue/queueAction";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

const CusQueue = () => {
  const { id } = useParams();
  const vendorId = id ? parseInt(id) : 0;
  const dispatch = useAppDispatch();
  const { queueResponse, queueResponseLoading } = useAppSelector(
    (state) => state.queue
  );
  const { venResponse } = useAppSelector((state) => state.vendor);
  const selectedVendor = venResponse?.find((x) => x.id === vendorId);
  const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

  const reserveQueue = () => {};

  useEffect(() => {
    id && dispatch(getNextNum(vendorId));
    id && dispatch(getCurrentServingNum(vendorId));
  }, []);

  return (
    <>
      <Grid
        container
        sx={{ height: "250px"}}
        justifyContent={"center"}
        display={"flex"}
      >
        <Grid item sm={6} xs={12} display={"flex"}>
          <Grid sm={6} xs={12} sx={{ margin: "auto" }}>
            <Grid item xs={12} className="heroSectionImgContainer">
              <img
                src={`${imgBaseUrl}${
                  selectedVendor?.image || "defaultVendor.png"
                }`}
                alt=""
                className="heroSectionImg"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="h5">
                {selectedVendor?.branch_name}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="h6">
                {selectedVendor?.vendor.vendor_name}
              </Typography>
            </Grid>
          </Grid>
          <Grid sm={6} xs={12} display={"flex"} sx={{ margin: "auto" }}>
            {queueResponse &&
              queueResponse.active &&
              queueResponse.active.queueno > 0 && (
                <>
                  <Avatar sx={{}}>
                    {
                      <>
                        <Typography variant="h5">{"Now Serving"}</Typography>
                        <Typography variant="h5">
                          {queueResponse.active?.queueno}
                        </Typography>
                      </>
                    }
                  </Avatar>
                </>
              )}

            {queueResponse &&
              queueResponse.active &&
              queueResponse.active.queueno == 0 && (
                <Avatar sx={{ width: 200, height: 200, margin: "auto", bgcolor: "#58bad8"}}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  sx={{ textAlign: "center", padding: 4, paddingTop:3 }}
                >
                  <Typography variant="h5">{"Your Queue Has Not Started Yet!"}</Typography>
                </Box>
              </Avatar>
              )}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ height: "250px"}}
        justifyContent={"center"}
        display={"flex"}
      >
        <Grid item sm={6} xs={12} display={"flex"}>
          <Grid sm={6} xs={12} display={"flex"} sx={{ margin: "auto"}}>
            {queueResponse && (
              <Avatar sx={{ width: 200, height: 200, margin: "auto", bgcolor: "#43bc7b"}}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  sx={{ textAlign: "center", padding: 4, paddingTop:3 }}
                >
                  <Typography variant="h5">{"Next Available No"}</Typography>
                  <Typography variant="h2">{queueResponse.next + 1}</Typography>
                </Box>
              </Avatar>
            )}
          </Grid>
          <Grid sm={6} xs={12} display={"flex"} sx={{ margin: "auto", justifyContent: "center"}}>
            <Button
              variant="contained"
              onClick={reserveQueue}
              sx={{ height: "50px", width: "200px" }}
            >
              Reserve Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CusQueue;
