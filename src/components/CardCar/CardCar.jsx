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

const CardCar = ({ key, car, handleOpenModal }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);
  const toggleFavorite = id => {
    favoriteCars.includes(id)
      ? dispatch(deleteFavorite(id))
      : dispatch(addFavorite(id));
  };
  const minLengthAccessories = arr => {
    let min = arr[0];
    arr.array.forEach(item => {
      if (item.length < min.length) {
        min = item;
      }
    });
    return min;
  };
  return (
    <>
      <li
        key={key}
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

        <Img src={car.img} alt={`${car.make} ${car.model}`} />
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
            <Stroke type={true}>
              <SpanLabel type={'first'}>
                {car.address.split(', ')[car.address.split(', ').length - 2]}
              </SpanLabel>
              <SpanLabel>
                {car.address.split(', ')[car.address.split(', ').length - 1]}
              </SpanLabel>
              <SpanLabel type={'last'}>{car.rentalCompany}</SpanLabel>
            </Stroke>
            <Stroke>
              <SpanLabel type={'first'}>{car.type}</SpanLabel>
              <SpanLabel>{car.model}</SpanLabel>
              <SpanLabel>{car.id}</SpanLabel>
              <SpanLabel type={'last'}>
                {minLengthAccessories(car.accessories)}
              </SpanLabel>
            </Stroke>
          </WrapperLabel>
          <ButtonMore onClick={handleOpenModal}>Learn More</ButtonMore>
        </WrapperText>
      </li>
    </>
  );
};
export default CardCar;
