import "./Profile.css";
import { useRef } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Profile = () => {
  const formRef = useRef();

  const styles = {
    marginLeft: "300px",
    marginTop: "-470px",
  };
  const Formstyles = {
    display: "flex",
    marginTop: "-5px",
    marginLeft: "300px",
    m: 1,
    width: "60ch",
  };
  const changeName = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = () => {
    console.log(formRef.current.getFieldValue());
  };
  return (
    <>
      <Typography
        style={styles}
        sx={{ color: "black", fontSize: 14, fontWeight: "bold" }}
        variant="subtitle1"
        gutterBottom
      >
        My Profile
      </Typography>

      <Grid container spacing={3} style={Formstyles}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First-Name"
            name="firstName"
            defaultValue="&#9787;"
            onChange={changeName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            label="Last-Name"
            name="lastName"
            defaultValue="&#9787;"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="displayName"
            name="displayName"
            label="Display Name"
            defaultValue="&#9861;"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            defaultValue="&#128231;"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phno"
            name="phno"
            label="Phone No(Work)"
            defaultValue="&#9990;"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phono"
            name="phono"
            label="Phone No(Work)"
            defaultValue="&#9990;"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            name="location"
            label="Location"
            defaultValue="&#9729;"
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          bgcolor: "red",
          color: "white",
          fontSize: 11,
          fontWeight: "bold",
          marginLeft: 60,
          marginTop: 8,
        }}
        onClick={onSubmit}
      >
        Save Changes
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "red",
          color: "white",
          fontSize: 11,
          fontWeight: "bold",
          marginLeft: 76,
          marginTop: 11,
        }}
      >
        Reset
      </Button>
    </>
  );
};
export default Profile;
