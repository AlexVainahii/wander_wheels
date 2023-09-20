import { ContainerHome } from 'components/Layout/Layout.styled';
import { ButtonRental } from 'components/ModalCars/ModalCars.styled';

const Home = () => {
  return (
    <ContainerHome>
      <h1>Wander Wheels.</h1>
      <h2>"Easy Rentals, Wide Choices, Smooth Rides!"</h2>
      <ButtonRental
        type={'button'}
        onClick={() => window.open('tel:+380730000000', '_self')}
        style={{ marginLeft: '1000px' }}
      >
        Rental Car
      </ButtonRental>
    </ContainerHome>
  );
};
export default Home;
