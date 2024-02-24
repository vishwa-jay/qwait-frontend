import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import {
  getCurrentServingNum,
  getNextNum,
  getUserCurrentReservation,
  reserveQueue,
} from "../../store/queue/queueAction";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { VENDOR_SEARCH_ROUTE } from "../../constants/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FieldContainer from "../FieldContainer/field-container";
import AlertBox from "../Alert/alert-box";
import DialogBox from "../Dialog/dialog-box";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const CusQueue = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendorId = id ? parseInt(id) : 0;
  const dispatch = useAppDispatch();
  const {
    queueResponse,
    queueResponseLoading,
    queueResponseError,
    reserveQueueResponse,
    reserveQueueError,
    currentReserveResponse,
    currentReserveError,
  } = useAppSelector((state) => state.queue);
  const { venResponse } = useAppSelector((state) => state.vendor);
  const { authResponse } = useAppSelector((state) => state.auth);
  const selectedVendor = venResponse?.find((x) => x.id === vendorId);
  const [dialogOpen, setDialogOpen] = useState(true);
  const [queueStarted, setQueueStarted] = useState<undefined | boolean>();
  const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

  const handleReserveQueue = () => {
    queueResponse &&
      dispatch(
        reserveQueue({
          vendor_user_id: vendorId,
          cus_user_id: authResponse.id || 0,
          queueno: queueResponse.next + 1,
        })
      );
  };

  const goToVendors = () => {
    navigate(VENDOR_SEARCH_ROUTE);
  };

  useEffect(() => {
    id && dispatch(getNextNum(vendorId));
    id && dispatch(getCurrentServingNum(vendorId));
    authResponse && dispatch(
      getUserCurrentReservation({
        vendor_user_id: vendorId,
        cus_user_id: authResponse.id || 0,
      })
    );
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      id && dispatch(getNextNum(vendorId));
      id && dispatch(getCurrentServingNum(vendorId));
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (queueStarted === undefined && queueResponse && queueResponse.active) {
      queueResponse.active.queueno == 0
        ? setQueueStarted(false)
        : queueResponse.active.queueno > 0 && setQueueStarted(true);
    }

    if (queueStarted === false && queueResponse && queueResponse.active) {
      queueResponse.active.queueno > 0 && setQueueStarted(true);
    }
  }, [queueResponse]);

  useEffect(() => {
    if (reserveQueueError) {
      setDialogOpen(true);
    }
  }, [reserveQueueError]);

  useEffect(()=>{
    if(currentReserveResponse){
      id && dispatch(getNextNum(vendorId));
      id && dispatch(getCurrentServingNum(vendorId));
    }
  },[currentReserveResponse])

  return (
    <>
      <Grid
        container
        sx={{ padding: "5px", minHeight: 120 }}
        display={"flex"}
        justifyContent={"flex-start"}
      >
        <Grid item lg={4} md={6} sm={8} xs={12} display={"flex"}>
          <FieldContainer label="">
            <Button
              variant="contained"
              onClick={() => goToVendors()}
              startIcon={<ArrowBackIcon />}
              sx={{ height: "50px" }}
            >
              Go To Vendors
            </Button>
          </FieldContainer>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <FieldContainer label="">
            {queueStarted !== undefined && queueStarted == false ? (
              <>
                <Typography variant="h5" textAlign={"center"}>
                  {"Your Queue Has Not Started Yet! But you can pick a number."}
                </Typography>
                <Typography variant="h6" textAlign={"center"}>
                  {"Please wait until the vendor start to serve"}
                </Typography>
              </>
            ) : (
              queueStarted !== undefined &&
              queueStarted == true && (
                <>
                  <Typography variant="h5">
                    {
                      "Your vendor started to serve the queue! please wait for your turn!"
                    }
                  </Typography>
                </>
              )
            )}
          </FieldContainer>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ minHeight: "250px" }}
        justifyContent={"center"}
        display={"flex"}
      >
        <Grid item lg={4} md={6} sm={8} xs={12} display={"flex"}>
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
            {queueResponse && (
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                  bgcolor: "#58bad8",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  sx={{ textAlign: "center", padding: 4, paddingTop: 3 }}
                >
                  <Typography variant="h5">{"Now Serving"}</Typography>
                  {queueResponse.active &&
                  (queueResponse.active.queueno == 0 ||
                    queueResponse.active.queueno > 0) ? (
                    <>
                      <Typography variant="h2">
                        {queueResponse.active.queueno}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress
                          size={64}
                          sx={{ color: "#fff", marginTop: "8px" }}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </Avatar>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ minHeight: "250px" }}
        justifyContent={"center"}
        display={"flex"}
      >
        <Grid item lg={4} md={6} sm={8} xs={12} display={"flex"}>
          <Grid sm={6} xs={12} display={"flex"} sx={{ margin: "auto" }}>
            {queueResponse && (
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                  bgcolor: "#43bc7b",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  sx={{ textAlign: "center", padding: 4, paddingTop: 3 }}
                >
                  <Typography variant="h5">{"Next Available No"}</Typography>
                  {queueResponse.next >= 0 && queueResponse.active ? (
                    <Typography variant="h2">
                      {queueResponse.next + 1}
                    </Typography>
                  ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress
                        size={64}
                        sx={{ color: "#fff", marginTop: "8px" }}
                      />
                    </Box>
                  )}
                </Box>
              </Avatar>
            )}
          </Grid>
          <Grid
            sm={6}
            xs={12}
            sx={{ margin: "auto", justifyContent: "center" }}
          >
            {currentReserveResponse && (
              <Grid
                item
                xs={12}
                sx={{ minHeight: "50px", textAlign: "center" }}
              >
                <Alert
                  icon={<PersonPinIcon sx={{ fontSize: 42 }} />}
                  severity="success"
                >
                  <Typography variant="h5">{`You Reserved No: ${currentReserveResponse}`}</Typography>
                </Alert>
                {selectedVendor &&
                  selectedVendor.duration > 0 &&
                  `${selectedVendor.duration}min Per Person, Approximately in ${
                    (Number(currentReserveResponse) -
                      ((queueResponse && queueResponse.active?.queueno) || 0) -
                      1) *
                    selectedVendor.duration
                  }min after the Queue started`}
              </Grid>
            )}
            {currentReserveError && (
              <Grid
                item
                xs={12}
                sx={{ minHeight: "50px", textAlign: "center" }}
              >
                <Alert icon={false} severity="info">
                  <Typography variant="h6">
                    {currentReserveError.response.data.message}
                  </Typography>
                </Alert>
              </Grid>
            )}
            {!currentReserveResponse && (
              <Grid item xs={12} sx={{ textAlign: "center", marginTop: 1 }}>
                <Button
                  variant="contained"
                  onClick={handleReserveQueue}
                  fullWidth
                  sx={{
                    height: "80px",
                    minWidth: "120px",
                    maxWidth: "280px",
                    backgroundColor: "#8c3c99",
                  }}
                >
                  <PersonPinIcon sx={{ fontSize: 42, marginRight: 2 }} />
                  <Typography variant="h6">Reserve Now</Typography>
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {reserveQueueError && (
        <DialogBox
          title="Queue Reserving"
          content={reserveQueueError.response.data.message}
          handleClose={() => setDialogOpen(false)}
          openDialog={dialogOpen}
          buttonText="I understand"
        />
      )}
    </>
  );
};

export default CusQueue;
