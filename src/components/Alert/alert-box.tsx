import { Alert, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export interface AlertBoxProps {
  message: string;
  severity: "success" | "warning" | "info" | "error";
  showAlert?: boolean;
}

const AlertBox = (props: AlertBoxProps) => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(props.showAlert ? true : false);
  },[props.showAlert])

  useEffect(()=>{
    if(show == true){
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  },[show])

  if (!show) {
    return <></>;
  }
  return <Alert severity={props.severity} action={
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        setShow(false);
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  }>{props.message}</Alert>;
};

export default AlertBox;
