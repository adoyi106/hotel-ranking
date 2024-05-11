import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Hotel from "../features/Hotel";
import Header from "./Header";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
function AppLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: "#f9fafb" }}>
        <Header />
        {/* <main */}
        <Container
          style={{
            // backgroundColor: "#f9fafb",
            padding: {
              xs: "2rem 0.6rem 2.4rem",
              sm: "4rem 4.6rem 6.4rem",
            },
          }}
        >
          <div
            style={{
              maxWidth: "120rem",
              margin: "0 auto",
              paddingTop: "1.8rem",
            }}
          >
            <Hotel />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default AppLayout;
