import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");
  const [gender, setGender] = useState("");

  axios
    .post("/user", {
      firstName: name,
      email: email,
      password: password,
      confirmpassword: conpass,
      gender: gender,
    })
    .then((response) => {
      console.log(response);
      console.log("warmatebit daregistrirda");
    });

  const Click = () => {
    if (password !== conpass) {
      alert("password dont match");
    } else {
      console.log({
        name,
        email,
        password,
        conpass,
        gender,
      });
    }
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Click();
          }}
        >
          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            placeholder="Enter your name"
            required
          />
          <TextField
            fullWidth
            value={email}
            label="Email"
            required
            inputProps={{
              pattern: "[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}.[a-zA-Z]{2,4}",
            }}
            placeholder="Enter your email"
            onChange={(e) => setEamil(e.target.value)}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                onChange={(e) => setGender(e.target.value)}
                control={<Radio required />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                onChange={(e) => setGender(e.target.value)}
                control={<Radio required />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
            required
            label="Password"
            placeholder="Enter your password"
            inputProps={{ minLength: 5 }}
          />
          <TextField
            value={conpass}
            onChange={(e) => setConpass(e.target.value)}
            fullWidth
            type="password"
            required
            label="Confirm Password"
            placeholder="Confirm your password"
            inputProps={{ minLength: 5 }}
          />
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
            <IconButton>
              <Link href="/">
                <ArrowBackIcon />
              </Link>
            </IconButton>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
