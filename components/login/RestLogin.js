import React from 'react';

// material-ui
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

// project imports
import useScriptRef from '../../hooks/useScriptRef';

// assets
import User from '@material-ui/icons/SupervisedUserCircle';
import Key from '@material-ui/icons/VpnKey';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//============================|| API JWT - LOGIN ||============================//

const RestLogin = (props, { ...others }) => {
  const router = useRouter();
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          const setAsFailed = (error) => {
            setStatus({ success: false });
            setErrors({ submit: error });
            setSubmitting(false);
          };
          try {
            axios
              .post(process.env.API_URL + '/v1/auth/login', {
                user: values.email,
                password: values.password
              })
              .then(function (response) {
                if (response?.status === 200 && response.data.data.access_token) {
                  if (scriptedRef.current) {
                    setStatus({ success: true });
                    setSubmitting(false);
                  }
                  localStorage.setItem('access_token', response.data.data.access_token);
                  router.push('/dashboard');
                } else {
                  setAsFailed(response.data.msg);
                }
              })
              .catch(function (error) {
                setAsFailed(error.message);
              });
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setAsFailed(err.message);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="text"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                startAdornment={
                  <IconButton aria-label="user icon" edge="start">
                    <User />
                  </IconButton>
                }
              />
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                startAdornment={
                  <IconButton aria-label="user icon" edge="start">
                    <Key />
                  </IconButton>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="Remember me"
              />
            </Stack>
            {errors.submit && (
              <Box
                sx={{
                  mt: 3
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box
              sx={{
                mt: 2
              }}
            >
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                Ingresar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestLogin;
