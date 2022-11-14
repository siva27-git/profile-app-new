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

  useEffect(() => {
    getUserDetails()
  }, []);

  const getUserDetails = async () => {
    return await axios.get("http://localhost:8000/getUser")
      .then((response) => {
        setUserData(response.data)
        setMobileNo(response.data.phone1)
        setDispName(response.data.displayName)
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
      {
        userData && userData.firstName &&
        <>
          <Header />
          <Menu />
          <Profile userData={userData} displayNameFunction={displayNameFunction} mobileNoFunction={mobileNoFunction} getUserDetails={getUserDetails} />
          <Photo dispName={dispName} mobileNo={mobileNo} />
        </>
      }
    </div>
  );
};

export default App;
