import profile from "./profile.png";

import Typography from "@mui/material/Typography";

const Photo = (props) => {

  const { dispName = "", mobileNo = "" } = props || {}

  const stylesPhoto = {
    marginLeft: "80%",
    marginTop: "-385px",
  };
  return (
    <div style={stylesPhoto}>
      <img src={profile} alt="profile"></img>
      <Typography
        variant="h6"
        color="outline"
        align="center"
        textAlign={"center"}
        display={"flex"}
        sx={{ color: "black", fontWeight: "bold" }}
        noWrap
      >
        {dispName}
      </Typography>
      <Typography
        variant="subtitle1"
        color="outline"
        sx={{ color: "black", fontSize: 13, fontWeight: "normal" }}
        noWrap
      >
        {mobileNo}
      </Typography>
    </div>
  );
};
export default Photo;
