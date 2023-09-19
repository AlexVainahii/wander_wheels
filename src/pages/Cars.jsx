import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../components/CarsList/CarList';
import { useEffect, useState } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { useOutletContext } from 'react-router-dom';
import { selectCars, selectFilter } from 'redux/selectors';
import FilterForm from 'components/FilterForm/FilterForm';

const Cars = () => {
  const [handleCloseModal, handleOpenModal, isModalOpen] = useOutletContext();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
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
        } else if (filterObject[key] !== '' && filterObject[key] !== car[key]) {
          return false;
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
      <CarsList
        filteredCars={filteredCars}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
export default Cars;
