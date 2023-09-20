import React, { useEffect, useRef } from 'react';
import {
  ButtonRental,
  Img,
  Span,
  SpanAcces,
  SpanButton,
  SpanLabel,
  SpanTitle,
  Stroke,
  Wrapper,
  WrapperAcces,
  WrapperDescript,
  WrapperLabel,
  WrapperRent,
  WrapperTitle,
} from './ModalCars.styled';
import { formatMileAge } from 'components/FilterForm/filter';

const ModalCars = ({ onClose, car }) => {
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
  return (
    <Wrapper>
      <Img alt={car.make} src={car.img} />

      <WrapperTitle>
        <SpanTitle>
          {car.make} <SpanTitle model={true}>{car.model}</SpanTitle>
          {', '}
          {car.year}
        </SpanTitle>
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
            Id: {car.id}
          </SpanLabel>

          <SpanLabel ref={ref => (spanRefs.current[3] = ref)}>
            {' '}
            Year:
            {car.year}
          </SpanLabel>
          <SpanLabel ref={ref => (spanRefs.current[4] = ref)}>
            {' '}
            Type: {car.type}
          </SpanLabel>
          <SpanLabel ref={ref => (spanRefs.current[5] = ref)}>
            {' '}
            Fuel Consumption: {car.fuelConsumption}
          </SpanLabel>
          <SpanLabel ref={ref => (spanRefs.current[6] = ref)}>
            {' '}
            Engine Size: {car.engineSize}
          </SpanLabel>
        </Stroke>
      </WrapperLabel>
      <WrapperDescript>{car.description}</WrapperDescript>
      <WrapperAcces>
        <SpanAcces>Accessories and functionalities:</SpanAcces>
        <WrapperLabel>
          <Stroke>
            {car.accessories.map((item, i) => (
              <SpanLabel ref={ref => (spanRefs.current[i + 7] = ref)}>
                {item}
              </SpanLabel>
            ))}{' '}
            {car.functionalities.map((item, i) => (
              <SpanLabel
                ref={ref =>
                  (spanRefs.current[i + car.accessories.length + 7] = ref)
                }
              >
                {item}
              </SpanLabel>
            ))}
          </Stroke>
        </WrapperLabel>
      </WrapperAcces>
      <WrapperRent>
        <SpanAcces>Rental Conditions:</SpanAcces>
        <WrapperLabel>
          <Stroke>
            {car.rentalConditions.split('\n').map(item =>
              item.includes(':') ? (
                <>
                  <SpanButton>
                    {item.split(':')[0]}: <Span> {item.split(':')[1]}</Span>
                  </SpanButton>
                </>
              ) : (
                <SpanButton>{item}</SpanButton>
              )
            )}
            <SpanButton>
              Mileage:<Span>{formatMileAge(car.mileage)}</Span>
            </SpanButton>
            <SpanButton>
              Price: <Span>{car.rentalPrice}</Span>
            </SpanButton>
          </Stroke>
        </WrapperLabel>
      </WrapperRent>
      <ButtonRental
        type={'button'}
        onClick={() => window.open('tel:+380730000000', '_self')}
      >
        Rental Car
      </ButtonRental>
    </Wrapper>
  );
};

export default ModalCars;
