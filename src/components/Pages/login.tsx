import { Box, Button, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { ILogin } from "../../typings/interfaces/ILogin";
import { useEffect, useState } from "react";
import FieldContainer from "../FieldContainer/field-container";
import FormContainer from "../FormContainer/form-container";
import { INVALID_EMAIL_MSG, REQUIRED_MSG, TRAILING_SPACES_MSG } from "../../constants/common";
//import { loginUser } from "../../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
//import { AppState } from "../../store/reducers/rootReducer";
import AlertBox from "../Alert/alert-box";
import { sxMainMessage } from "../Layout/commonSx";
import { Link } from "react-router-dom";
import { VENDOR_SEARCH_ROUTE } from "../../constants/routes";
import { authenticate } from "../../store/auth/authAction";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../assets/logo-white-bg.png";
const useStyles = makeStyles({
  
  
});
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(REQUIRED_MSG)
    .trim(TRAILING_SPACES_MSG)
    .email(INVALID_EMAIL_MSG)
    .matches(
      RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      INVALID_EMAIL_MSG
    ),
  password: Yup.string().required(REQUIRED_MSG),
});

const Login = () => {
  const classes = useStyles();
  const [value, setValue] = useState<ILogin>({ email: "", password: "" });
  const user = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();

  const handleLogin = (value: ILogin) => {
    value && dispatch(authenticate(value));
  };

  // useEffect(()=>{
  //   //alert(JSON.stringify(user.response));
   
  // },[user])

  return (
    
      <Box className="boxstly" sx={{ display: "flex", marginLeft: "10%", alignContent: "center",  width: "80%", height:"auto"}}>
      
        <Box className="form" sx={{ width: "500px", margin: "auto"}}>
            <div><img className="logo" src={logo} width={50}/></div>
            <Typography variant="h5" sx={{color:"#8C3C99", fontWeight:"700"}}>
                Queue Management System
            </Typography>
            <Typography variant="h6" sx={{color:"#8C3C99", fontWeight:"700", marginTop: "4%", marginLeft: "40%", marginBottom: "4%", alignContent: "center"}}>
                Login
            </Typography>
            <Typography sx={{color:"#8C3C99", fontWeight:"700"}}>Welcome Back ! Please login to account.</Typography>
            {!user.authResponse ?           
            <FormContainer className="form" formTitle="" sx={{border: "none"}}>
               
              <Formik
                initialValues={value}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
              >
                {(props) => (
                  <Form>
                    <FieldContainer label="Email" sx={{marginBottom:3}}>
                      <TextField
                        name="email"
                        size="small"
                        placeholder={"Email"}
                        fullWidth
                        value={props.values.email}
                        error={props.errors.email === undefined ? false : true}
                        helperText={props.errors.email}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer label="Password">
                      <TextField
                        name="password"
                        type="password"
                        size="small"
                        placeholder={"Password"}
                        fullWidth
                        value={props.values.password}
                        error={props.errors.password === undefined ? false : true}
                        helperText={props.errors.password}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>

                    <Button sx={{background:"#8C3C99", width:"200px", marginRight:"20px"}} variant="contained"  type="submit" disabled={!props.isValid || user.authResponseLoading}>
                      Login
                    </Button>
                    <Button sx={{background:"#fff", color:"#8C3C99", '&:hover': {                        
                        color: '#fff',
                      }, width:"200px", border:"1px solid #8C3C99"}} 
                      variant="contained"  type="submit" disabled={!props.isValid || user.authResponseLoading}>
                      Sign Up
                    </Button>
                  </Form>
                )}
              </Formik>
              <FieldContainer label="">
              {user.authResponseError && <AlertBox message={user.authResponseError.response.data.error} severity="error" showAlert /> } 
              </FieldContainer>
            
            </FormContainer>
            : 
            <FieldContainer label="" sx={sxMainMessage}>You are already logged! Go to <Link to={VENDOR_SEARCH_ROUTE}>Home</Link></FieldContainer>
          }
          
        </Box>
        <Box className="purple" sx={{ backgroundColor: "#CF9DD7", width: "650px", overflow:"hidden" }}>
          <div className="image">
            <img className="banner" src={require('../../assets/queue1.png')} />
          </div>
        </Box>
      </Box>
    
  );
};

export default Login;
