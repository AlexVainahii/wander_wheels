import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'redux/favorites/favoritesSlice';
import { selectFavorites } from 'redux/selectors';
import {
  ButtonMore,
  FillHeartBtn,
  HeartBtn,
  Img,
  SpanLabel,
  SpanTitle,
  Stroke,
  WrapperLabel,
  WrapperText,
  WrapperTitle,
} from './CardCar.styled';
import NoFoto from '../../images/231.jpg';
import { useEffect, useRef } from 'react';
import AddModalCars from 'components/AddModalCars/AddModalCars';

const CardCar = ({ car, handleOpenModal, isModalOpen, handleCloseModal }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);
  const spanRefs = useRef([]);

  useEffect(() => {
    const spans = spanRefs.current;

    spans[spans.length - 1].classList.add('end-of-row');
    for (let i = 1; i < spans.length; i++) {
      const currentSpan = spans[i];
      const prevSpan = spans[i - 1];

      if (currentSpan.offsetTop !== prevSpan.offsetTop) {
        spans[i - 1].classList.add('end-of-row');
      }
    }
  }, []);
  const toggleFavorite = id => {
    favoriteCars.includes(id)
      ? dispatch(deleteFavorite(id))
      : dispatch(addFavorite(id));
  };
  const minLengthAccessories = arr => {
    let min = arr[0];
    arr.forEach(item => {
      if (item.length < min.length) {
        min = item;
      }
    });
    return min;
  };
  return (
    <>
      <li
        key={car.id}
        style={{
          width: '274px',
          height: '426px',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        {favoriteCars.includes(car.id) ? (
          <FillHeartBtn onClick={() => toggleFavorite(car.id)} />
        ) : (
          <HeartBtn onClick={() => toggleFavorite(car.id)} />
        )}

        <Img
          src={car.img ? car.img : NoFoto}
          alt={`${car.make} ${car.model}`}
        />
        <WrapperText>
          <WrapperTitle>
            <SpanTitle>
              {car.make}
              {car.make.toString().length +
                car.model.toString().length +
                car.year.toString().length >
              30 ? null : (
                <>
                  {' '}
                  <SpanTitle model={true}>{car.model}</SpanTitle>
                </>
              )}
              {', '}
              {car.year}
            </SpanTitle>

            <SpanTitle>{car.rentalPrice}</SpanTitle>
          </WrapperTitle>
          <WrapperLabel>
            <Stroke>
              <SpanLabel ref={ref => (spanRefs.current[0] = ref)}>
                {car.address.split(', ')[car.address.split(', ').length - 2]}
              </SpanLabel>
              <SpanLabel ref={ref => (spanRefs.current[1] = ref)}>
                {car.address.split(', ')[car.address.split(', ').length - 1]}
              </SpanLabel>
              <SpanLabel ref={ref => (spanRefs.current[2] = ref)}>
                {car.rentalCompany}
              </SpanLabel>

              <SpanLabel ref={ref => (spanRefs.current[3] = ref)}>
                {' '}
                {car.type}
              </SpanLabel>
              <SpanLabel ref={ref => (spanRefs.current[4] = ref)}>
                {car.model}
              </SpanLabel>
              <SpanLabel ref={ref => (spanRefs.current[5] = ref)}>
                {car.id}
              </SpanLabel>
              <SpanLabel ref={ref => (spanRefs.current[6] = ref)}>
                {minLengthAccessories(car.accessories)}
              </SpanLabel>
            </Stroke>
          </WrapperLabel>
          <ButtonMore onClick={() => handleOpenModal(car)}>
            Learn More
          </ButtonMore>
        </WrapperText>
      </li>
      {isModalOpen && <AddModalCars onClose={handleCloseModal} car={car} />}
    </>
  );
};
export default CardCar;
