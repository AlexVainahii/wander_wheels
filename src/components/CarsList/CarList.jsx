import AddModalCars from 'components/AddModalCars/AddModalCars';
import CardCar from 'components/CardCar/CardCar';
import { useEffect, useState } from 'react';
import { Span } from './CarList.styled';

const CarsList = ({
  filteredCars,
  handleCloseModal,
  handleOpenModal,
  isModalOpen,
  dataCar,
}) => {
  const [countPage, setCountPage] = useState(
    Math.floor(filteredCars.length / 8)
  );
  const [page, setPage] = useState(1);
  useEffect(() => {
    setCountPage(Math.floor(filteredCars.length / 8));
  }, [filteredCars]);
  return (
    <>
      <ul
        style={{
          display: 'grid',
          listStyleType: 'none',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {filteredCars.map(
          (car, i) =>
            i <= page * 8 - 1 && (
              <CardCar
                key={car.id}
                car={car}
                handleOpenModal={handleOpenModal}
              />
            )
        )}
      </ul>
      <Span
        visible={page <= countPage ? true : false}
        onClick={() => {
          if (page <= countPage) setPage(prev => prev + 1);
        }}
      >
        Load more
      </Span>

      {isModalOpen && <AddModalCars onClose={handleCloseModal} car={dataCar} />}
    </>
  );
};
export default CarsList;
