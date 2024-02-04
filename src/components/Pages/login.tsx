import { Box, Button, TextField } from "@mui/material";
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
    <Box sx={{display: "flex", justifyContent: "center", alignContent: "center", height: "calc(100vh - 40px)"}}>
      <Box sx={{ width: "400px", margin: "auto" }}>
        {!user.authResponse ?
        <FormContainer formTitle="Please Login Here">
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

                <Button variant="contained" color="success" type="submit" disabled={!props.isValid || user.authResponseLoading}>
                  Login
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
    </Box>
  );
};

export default Login;
