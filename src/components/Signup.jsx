import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signupUser } from "../redux/slice/signupSlice";
import { useDispatch, useSelector, connect } from "react-redux";
import { useEffect } from "react";
const theme = createTheme();

const Signup = ({serverErrors})=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    formik.setErrors(serverErrors);
  }, [serverErrors]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      college: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(/^[1-9][0-9]{9}$/, "Phone number is not valid")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string().required("Required"),
      college: Yup.string().required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          "Password must contain at least 8 characters, one uppercase letter, and one digit"
        )
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (value) => {
      dispatch(signupUser())
      // axios
      // .post('http://127.0.0.1:8000/auth/signup/', value)
      // .then((response) => {
      //   navigate("/sign-in");
      // })
      // .catch((error) => {
      //   console.log(error.response.data);
      //   var errors = {}
      //   for (const key in error.response.data) {
      //     errors[key]=error.response.data[key][0]
      //     }
      //   formik.setErrors(errors)
      // });
      // signupUser(value)
      // console.log("Form submitted successfully");
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched(e.target.name, true, false);
  };

  const handleBlur = (e) => {
    formik.handleBlur(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  label="Full Name"
                  autoFocus
                  value={formik.values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Mobile Number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Address"
                  fullWidth
                  name="address"
                  value={formik.values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="College"
                  fullWidth
                  name="college"
                  value={formik.values.college}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    formik.touched.college && Boolean(formik.errors.college)
                  }
                  helperText={formik.touched.college && formik.errors.college}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Comfirm Password"
                  type="password"
                  id="conformpassword"
                  autoComplete="comfirm-password"
                  value={formik.values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  serverErrors: state.signupUser.serverErrors,
});

export default connect(mapStateToProps)(Signup);