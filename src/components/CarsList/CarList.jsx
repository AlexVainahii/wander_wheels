import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectFavorites,
  selectFilter,
} from "../../redux/selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/favorites/favoritesSlice";
import FilterForm from "../FilterForm/FilterForm";
import { useEffect, useState } from "react";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavorites);
  const filterObject = useSelector(selectFilter);
  const [filteredCars, setFilteredCars] = useState(cars);
  const toggleFavorite = (id) => {
    favoriteCars.includes(id)
      ? dispatch(deleteFavorite(id))
      : dispatch(addFavorite(id));
  };
  useEffect(() => {
    const newFilteredCars = cars.filter((car) => {
      for (const key in filterObject) {
        if (key === "rentalPrice" && filterObject[key] !== "") {
          if (Number(car[key].replace("$", "")) > filterObject[key]) {
            return false;
          }
        } else if (key === "minMileAge" && filterObject[key] !== "") {
          if (Number(car["mileage"]) < filterObject[key]) {
            return false;
          }
        } else if (key === "maxMileAge" && filterObject[key] !== "") {
          if (Number(car["mileage"]) > filterObject[key]) {
            return false;
          }
        } else if (filterObject[key] !== "" && filterObject[key] !== car[key]) {
          return false;
        }
      }
      return true;
    });

    setFilteredCars(newFilteredCars);
  }, [filterObject, cars]);
  return (
    <div>
      <FilterForm cars={cars} />
      {filteredCars.length === 0 ? (
        <p>No cars</p>
      ) : (
        <ul>
          {filteredCars.map((car) => {
            return (
              <li key={car.id}>
                <span>
                  {car.make} : {car.model}
                </span>
                <button onClick={() => toggleFavorite(car.id)}>
                  {favoriteCars.includes(car.id) ? "-" : "+"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default CarsList;
