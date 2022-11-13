import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import dateFormat from "dateformat";
import logo from "./user-default-avatar.jpg";

const Header = () => {
  const current = new Date();
  const date = dateFormat(current, "mmmm dS, yyyy");

  return (
    <AppBar position="relative">
      <Toolbar sx={{ bgcolor: "white", color: "outline", boxshadow: "none" }}>
        <Typography
          variant="h6"
          color="outline"
          sx={{ color: "red", fontWeight: "bold" }}
          noWrap
        >
          KYRO
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 5 }}
        ></IconButton>
        <MenuIcon sx={{ color: "black", mr: 5 }} />

        <Typography
          variant="subtitle1"
          color="outline"
          sx={{ color: "black", fontSize: 13, fontWeight: "bold" }}
          noWrap
        >
          Good Morning, Adam
        </Typography>

        <Typography
          variant="subtitle1"
          color="outline"
          sx={{
            color: "grey",
            fontSize: 11,
            fontWeight: "normal",
          }}
          noWrap
        >
          <br></br>
          <br></br>
          {date}
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "red",
            color: "white",
            fontSize: 11,
            fontWeight: "bold",
            marginLeft: 60,
          }}
        >
          &#43; Add Project
        </Button>
        <Box
          component="img"
          sx={{
            marginLeft: 1,
          }}
          alt="Your logo."
          src={logo}
        />
        <Typography
          variant="subtitle1"
          color="outline"
          sx={{
            color: "black",
            fontSize: 13,
            fontWeight: "bold",
            marginLeft: 2,
          }}
          noWrap
        >
          Adam
        </Typography>
        <Typography
          variant="subtitle1"
          color="outline"
          sx={{ color: "grey", fontSize: 11, fontWeight: "normal" }}
        >
          <br></br>
          <br></br>
          <span style={{ marginLeft: -35 }}> Project manager</span>
          <span style={{ marginLeft: 10 }}>&#x25BC;</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
