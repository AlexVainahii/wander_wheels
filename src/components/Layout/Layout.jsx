import { Outlet } from 'react-router-dom';
import {
  ContainerMain,
  Container,
  Navigation,
  NavigationLink,
} from './Layout.styled';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const defaultTheme = createTheme();
const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataCar, setDataCar] = useState(null);
  const handleOpenModal = newCar => {
    setDataCar(newCar);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh', backgroundColor: '#fff' }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={15}
          md={15}
          sx={{
            height: '100vh',
            '@media (max-width: 480px)': {
              backgroundAttachment: 'fixed',
              overflow: 'auto',
            },
          }}
        >
          <Container style={{ padding: '0 20px' }}>
            <ContainerMain>
              <Navigation>
                <NavigationLink to="/">Home</NavigationLink>

                <div style={{ display: 'flex' }}>
                  <NavigationLink to="/cars">Cars </NavigationLink>
                  <NavigationLink to="/favoriteCars">
                    Favorite cars
                  </NavigationLink>
                </div>
              </Navigation>
            </ContainerMain>
          </Container>
          <ContainerMain>
            <Outlet
              context={[
                handleCloseModal,
                handleOpenModal,
                isModalOpen,
                dataCar,
              ]}
            />
          </ContainerMain>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Layout;
