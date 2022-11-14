import React, { useState, useEffect } from 'react';
import axios from "axios";

import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Profile from "./Profile";
import Photo from "./Photo";

const App = () => {

  const [userData, setUserData] = useState({});
  const [mobileNo, setMobileNo] = useState("");
  const [dispName, setDispName] = useState("");
  const [showProfile, setShowProfile] = useState(false);


  useEffect(() => {
    getUserDetails()
  }, []);

  const refreshProfile = async () => {
    setShowProfile(false);
    await getUserDetails()
    setShowProfile(true)
  };

  const getUserDetails = async () => {
    return await axios.get("http://localhost:8000/getUser")
      .then((response) => {
        setUserData(response.data);
        setMobileNo(response.data.phone1);
        setDispName(response.data.displayName);
        setShowProfile(true);
      })
      .catch((error) => console.log(error))
  };

  const displayNameFunction = (displayName) => {
    setDispName(displayName)
  };

  const mobileNoFunction = (mobileNo) => {
    setMobileNo(mobileNo)
  };

  return (
    <div>
      <>
        <Header />
        <Menu />
        {showProfile && <Profile userData={userData} displayNameFunction={displayNameFunction} mobileNoFunction={mobileNoFunction} getUserDetails={getUserDetails} refreshProfile={refreshProfile} />}
        <Photo dispName={dispName} mobileNo={mobileNo} />
      </>

    </div>
  );
};

export default App;
