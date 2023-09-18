import { useDispatch } from "react-redux";
import CarsList from "../components/CarsList/CarList";
import { useEffect } from "react";
import { fetchCars } from "../redux/cars/operations";

const Cars = () => {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectCars);
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <h1>Cars</h1>

      <CarsList />
    </>
  );
};
export default Cars;
