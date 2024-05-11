import { AppBar, Toolbar, Typography } from "@mui/material";

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: "#fff",
//   },
// });
function Header() {
  //   const classes = useStyles();
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "white", color: "black" }}
    >
      <Toolbar>
        <Typography variant="h6">Hotel Ranker</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
