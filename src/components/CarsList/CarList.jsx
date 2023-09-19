import AddModalCars from 'components/AddModalCars/AddModalCars';
import CardCar from 'components/CardCar/CardCar';

const CarsList = ({
  filteredCars,
  handleCloseModal,
  handleOpenModal,
  isModalOpen,
}) => {
  return (
    <>
      <ul
        style={{
          display: 'grid',
          listStyleType: 'none',
          gridTemplateColumns:
            'repeat(4, 1fr)' /* Встановіть кількість стовпців, які вам потрібно */,
          gap: '16px',
        }}
      >
        {filteredCars.map(car => (
          <CardCar key={car.id} car={car} handleOpenModal={handleOpenModal} />
        ))}
      </ul>

      {isModalOpen && <AddModalCars onClose={handleCloseModal} />}
    </>
  );
};
export default CarsList;
