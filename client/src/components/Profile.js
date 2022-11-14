import "./Profile.css";
import { useState } from "react";
import { isEmpty } from "lodash";
import axios from "axios";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Profile = (props) => {

  const { userData = {}, displayNameFunction, mobileNoFunction, getUserDetails } = props;
  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [lastName, setLastName] = useState(userData.lastName || "");
  const [displayName, setDisplayName] = useState(userData.displayName || "");
  const [email, setEmail] = useState(userData.email || "");
  const [phone1, setPhone1] = useState(userData.phone1 || "");
  const [phone2, setPhone2] = useState(userData.phone2 || "");
  const [location, setLocation] = useState(userData.location || "");

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

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value)
  };

  const onChangeDisplayName = (e) => {
    setDisplayName(e.target.value)
    displayNameFunction(e.target.value)
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  };

  const onChangePhone1 = (e) => {
    setPhone1(e.target.value)
    mobileNoFunction(e.target.value)
  };

  const onChangePhone2 = (e) => {
    setPhone2(e.target.value)
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value)
  };

  const onSubmit = async () => {
    try {
      if (!isEmpty(firstName) && !isEmpty(lastName) &&
        !isEmpty(displayName) && !isEmpty(location) &&
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) &&
        (/^\d{10}$/).test(phone1) &&
        (/^\d{10}$/).test(phone2)) {

        let data = { firstName, lastName, displayName, email, phone1, phone2, location }
        let config = {
          method: 'post',
          url: 'http://localhost:8000/updateUser',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        await axios(config);
        props.refreshProfile()
      }
      else {
        console.log("Validation error !")
      }
    }
    catch (e) {
      console.log("Error", JSON.stringify(e.message));
    }
  };

  const onReset = () => {
    props.refreshProfile()
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
            required={true}
            defaultValue={firstName}
            onChange={onChangeFirstName}
            error={isEmpty(firstName) ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            label="Last-Name"
            name="lastName"
            required={true}
            defaultValue={lastName}
            onChange={onChangeLastName}
            error={isEmpty(lastName) ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="displayName"
            name="displayName"
            label="Display Name"
            required={true}
            defaultValue={displayName}
            onChange={onChangeDisplayName}
            error={isEmpty(displayName) ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            required={true}
            defaultValue={email}
            onChange={onChangeEmail}
            error={(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? false : true)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone1"
            name="phone1"
            label="Phone No(Work)"
            type="number"
            required={true}
            defaultValue={phone1}
            onChange={onChangePhone1}
            error={/^\d{10}$/.test(phone1) ? false : true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone2"
            name="phone2"
            label="Phone No(Work)"
            type="number"
            defaultValue={phone2}
            required={true}
            onChange={onChangePhone2}
            error={/^\d{10}$/.test(phone2) ? false : true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            name="location"
            label="Location"
            required={true}
            defaultValue={location}
            onChange={onChangeLocation}
            error={isEmpty(location) ? true : false}
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
        onClick={onReset}
      >
        Reset
      </Button>
    </>
  );
};
export default Profile;
