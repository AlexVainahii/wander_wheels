import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "../../redux/selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/favorites/favoritesSlice";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavorites);
  console.log("favoriteCars :>> ", favoriteCars);
  const toggleFavorite = (id) => {
    favoriteCars.includes(id)
      ? dispatch(deleteFavorite(id))
      : dispatch(addFavorite(id));
  };
  return (
    <div>
      {cars.length === 0 ? (
        <p>No cars</p>
      ) : (
        <ul>
          {cars.map((car) => {
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
