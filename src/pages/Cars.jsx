import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../components/CarsList/CarList';
import { useEffect, useState } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { useOutletContext } from 'react-router-dom';
import { selectCars, selectFilter, selectIsLoading } from 'redux/selectors';
import FilterForm from 'components/FilterForm/FilterForm';

const Cars = () => {
  const [handleCloseModal, handleOpenModal, isModalOpen, dataCar] =
    useOutletContext();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filterObject = useSelector(selectFilter);
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const newFilteredCars = cars.filter(car => {
      for (const key in filterObject) {
        if (key === 'rentalPrice' && filterObject[key] !== '') {
          if (Number(car[key].replace('$', '')) > filterObject[key]) {
            return false;
          }
        } else if (key === 'minMileAge' && filterObject[key] !== '') {
          if (Number(car['mileage']) < filterObject[key]) {
            return false;
          }
        } else if (key === 'maxMileAge' && filterObject[key] !== '') {
          if (Number(car['mileage']) > filterObject[key]) {
            return false;
          }
        }
      }
      return true;
    });

    setFilteredCars(newFilteredCars);
  }, [filterObject, cars]);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <FilterForm cars={cars} />
      {isLoading && 'Loading...'}
      {filteredCars.length > 0 && (
        <CarsList
          filteredCars={filteredCars}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          isModalOpen={isModalOpen}
          dataCar={dataCar}
        />
      )}
    </>
  );
};
export default Cars;
