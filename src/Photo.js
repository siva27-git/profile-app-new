import profile from "./profile.png";

import Typography from "@mui/material/Typography";

const Photo = () => {
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
        Rudhved Rithulan
      </Typography>
      <Typography
        variant="subtitle1"
        color="outline"
        sx={{ color: "black", fontSize: 13, fontWeight: "normal" }}
        noWrap
      >
        Good Morning, Adam
      </Typography>
    </div>
  );
};
export default Photo;
