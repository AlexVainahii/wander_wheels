import { Outlet } from "react-router-dom";
import { Container, Navigation, NavigationLink } from "./Layout.styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";

const defaultTheme = createTheme();
const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={15}
          md={15}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",

            overflow: "hidden",
            height: "100vh",
            "@media (max-width: 480px)": {
              backgroundAttachment: "fixed",
              overflow: "auto",
            },
          }}
        >
          <Container style={{ padding: "0 20px" }}>
            <Navigation>
              <NavigationLink to="/">Home</NavigationLink>

              <div style={{ display: "flex" }}>
                <NavigationLink to="/cars">Cars </NavigationLink>
                <NavigationLink to="/favoriteCars">
                  Favorite cars
                </NavigationLink>
              </div>
            </Navigation>
          </Container>

          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Layout;
