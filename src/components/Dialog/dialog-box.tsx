import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

interface DialogBoxProps {
    openDialog : boolean
    title? : string
    content? : ReactNode
    buttonText?: string
    handleClose : () => void
}
const DialogBox = (props: DialogBoxProps) =>{
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(()=>{
    setOpen(props.openDialog ? true : false);
  },[props.openDialog])

  useEffect(()=>{
    if(open == true){
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  },[open])

    return <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={props.handleClose}
    aria-labelledby="responsive-dialog-title"
  >
    {props.title && <DialogTitle id="responsive-dialog-title">
      {props.title}
    </DialogTitle>}
    <DialogContent dividers>
      {props.content && <DialogContentText>
        {props.content}
      </DialogContentText>}
    </DialogContent>
    <DialogActions>      
      <Button onClick={props.handleClose} autoFocus>
        {props.buttonText || "Okay"}
      </Button>
    </DialogActions>
  </Dialog>
}

export default DialogBox;