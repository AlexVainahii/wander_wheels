import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';
import {
  ContainerFilter,
  Input,
  Label,
  Select,
  SelectDown,
  SuggestionsList,
  WrapperMake,
  WrapperUl,
  LabelI,
  LabelE,
  ButtonSearch,
  WrapperButton,
  ButtonReset,
} from './FilterForm.styled';
import Down from '../../images/chevron-down.svg';

import { LuFilterX } from 'react-icons/lu';
import { formatMileAge, initialFilters, findMinMaxByField } from './filter';

const initialFocus = {
  make: false,
  rentalPrice: false,
};

const FilterForm = ({ cars }) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ ...initialFilters });
  const [uniqueCars, setUniqueCars] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState({});
  const [setIsFocused] = useState({ ...initialFocus });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [make, setMake] = useState('Enter the text');
  const [rentalPrice, setRentalPrice] = useState('$');
  const [minMaxMileAge, setMinMaxMileAge] = useState({});
  const wrapperRef = useRef(null);
  const wrapperPriceRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpenPrice(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenPrice]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    const uniqueCarsWithCount = (arr, field) => {
      const counts = {};

      arr.forEach(car => {
        const value = car[field];

        if (!counts[value]) {
          counts[value] = 0;
        }

        let matchesFilter = true;

        for (const key in filters) {
          if (key !== 'make' && filters[key] !== '') {
            if (key === 'rentalPrice') {
              if (Number(car[key].replace('$', '')) > filters[key]) {
                matchesFilter = false;
              }
            } else if (key === 'minMileAge') {
              if (Number(car['mileage']) < filters[key]) {
                matchesFilter = false;
              }
            } else if (key === 'maxMileAge') {
              if (Number(car['mileage']) > filters[key]) {
                matchesFilter = false;
              }
            } else if (filters[key] !== car[key]) {
              matchesFilter = false;
            }
          }
        }

        if (matchesFilter) {
          counts[value]++;
        }
      });

      const result = Object.entries(counts).map(([value, count]) => ({
        [field]: value,
        count,
      }));

      return result.sort((a, b) => a[field].localeCompare(b[field]));
    };

    const uniqueCarsData = uniqueCarsWithCount(cars, 'make');
    const minMaxPriceData = findMinMaxByField(cars, 'rentalPrice');
    const minMaxMileAgeData = findMinMaxByField(cars, 'mileage');
    setUniqueCars(uniqueCarsData);
    setMinMaxPrice(minMaxPriceData);
    setMinMaxMileAge(minMaxMileAgeData);
  }, [cars, filters]);

  const handleSelectChange = event => {
    let { id, value } = event.target;

    if (id === 'rentalPrice') {
      setIsFocused(prevFocused => ({
        ...prevFocused,
        [id]: value !== '',
      }));
    } else if (id === 'minMileAge' || id === 'maxMileAge') {
      const numbers = value.match(/\d+/g);

      if (numbers) {
        value = numbers.join('');
      } else {
        value = '';
      }
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      [id]: value,
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (filters.minMileAge === '' && filters.maxMileAge !== '') {
      if (
        filters.maxMileAge >= minMaxMileAge.min &&
        filters.maxMileAge <= minMaxMileAge.max
      ) {
        dispatch(changeFilter(filters));
      } else {
        alert(
          `Invalid mileage range. Please check your input from ${minMaxMileAge.min} to ${minMaxMileAge.max}`
        );
      }
    } else if (filters.minMileAge !== '' && filters.maxMileAge === '') {
      if (
        filters.minMileAge >= minMaxMileAge.min &&
        filters.minMileAge <= minMaxMileAge.max
      ) {
        dispatch(changeFilter(filters));
      } else {
        alert(
          `Invalid mileage range. Please check your input from ${minMaxMileAge.min} to ${minMaxMileAge.max}`
        );
      }
    } else if (
      filters.minMileAge !== '' &&
      filters.maxMileAge !== '' &&
      filters.minMileAge >= minMaxMileAge.min &&
      filters.minMileAge <= minMaxMileAge.max &&
      filters.minMileAge <= filters.maxMileAge &&
      filters.maxMileAge >= minMaxMileAge.min &&
      filters.maxMileAge <= minMaxMileAge.max &&
      filters.minMileAge <= filters.maxMileAge
    ) {
      dispatch(changeFilter(filters));
    } else if (filters.minMileAge === '' && filters.maxMileAge === '') {
      dispatch(changeFilter(filters));
    } else {
      alert(
        `Invalid mileage range. Please check your input from ${minMaxMileAge.min} to ${minMaxMileAge.max}`
      );
    }
  };
  const resetSubmit = () => {
    setFilters({ ...initialFilters });
    setRentalPrice('$');
    setMake('Enter the text');
    dispatch(changeFilter({}));
  };

  const handleOpen = e => {
    e.stopPropagation();
    e.target.getAttribute('data-rentalprice')
      ? setIsOpenPrice(true)
      : setIsOpen(true);
  };
  const handleSelect = e => {
    if (e.target.getAttribute('data-disabled') === 'false') {
      if (e.target.getAttribute('data-rentalprice')) {
        setRentalPrice(e.target.getAttribute('value') + '$');
        setFilters(prev => {
          return {
            ...prev,
            rentalPrice:
              e.target.getAttribute('value') === '$'
                ? ''
                : e.target.getAttribute('value'),
          };
        });
        setIsOpenPrice(false);
      } else {
        setMake(e.target.getAttribute('value'));
        setFilters(prev => {
          return {
            ...prev,
            make:
              e.target.getAttribute('value') === 'Enter the text'
                ? ''
                : e.target.getAttribute('value'),
          };
        });
        setIsOpen(false);
      }
    } else setIsOpen(true);
  };
  const handleInputClick = e => {
    e.stopPropagation();
  };

  return (
    <ContainerFilter>
      <form style={{ display: 'flex' }}>
        <WrapperMake>
          <Label htmlFor="make">Car brand</Label>
          <SelectDown
            alt={'down'}
            src={Down}
            onClick={e => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
            isOpen={isOpen}
          />
          <Select
            id="make"
            value={make}
            onFocus={handleOpen}
            onChange={handleSelectChange}
            onClick={handleInputClick}
          />
          <WrapperUl isOpen={isOpen} ref={wrapperRef}>
            <SuggestionsList className="scrollable-ul">
              <li
                key={'allcars'}
                value={'Enter the text'}
                onClick={handleSelect}
              >
                All Cars
              </li>
              {uniqueCars.map(car => (
                <li
                  key={car.make}
                  value={car.make}
                  data-disabled={car.count === 0 ? true : false}
                  onClick={handleSelect}
                  style={{
                    color: `${
                      car.count === 0 ? 'rgba(18, 20, 23, 0.2)' : '#121417'
                    }`,
                  }}
                >
                  {car.count === 0 ? car.make : `${car.make} (${car.count})`}
                </li>
              ))}
            </SuggestionsList>
          </WrapperUl>
        </WrapperMake>
        <WrapperMake>
          <Label htmlFor="rentalPrice" rentalPrice={true}>
            Price/ 1 hour{' '}
          </Label>
          <SelectDown
            alt={'down'}
            src={Down}
            onClick={e => {
              e.stopPropagation();
              setIsOpenPrice(prev => !prev);
            }}
            isOpen={isOpenPrice}
          />
          <Select
            id="rentalPrice"
            rentalPrice={true}
            data-rentalprice={true}
            value={rentalPrice}
            onFocus={handleOpen}
            onClick={handleInputClick}
            onChange={handleSelectChange}
          />
          <WrapperUl
            rentalPrice={true}
            isOpen={isOpenPrice}
            ref={wrapperPriceRef}
          >
            <SuggestionsList className="scrollable-ul">
              <li
                data-rentalprice={true}
                key={'allprice'}
                value={''}
                onClick={handleSelect}
              >
                All Price
              </li>
              {Array.from(
                { length: (minMaxPrice.max - minMaxPrice.min) / 10 + 1 },
                (_, index) => (
                  <li
                    data-rentalprice={true}
                    key={index}
                    data-disabled={false}
                    value={minMaxPrice.min + index * 10}
                    onClick={handleSelect}
                  >
                    {minMaxPrice.min + index * 10}
                  </li>
                )
              )}
            </SuggestionsList>
          </WrapperUl>
        </WrapperMake>
        <WrapperMake>
          <Label htmlFor="minMileAge">Сar mileage / km</Label>
          <div>
            <LabelI htmlFor="minMileAge">From </LabelI>
            <Input
              id="minMileAge"
              value={formatMileAge(filters.minMileAge)}
              onChange={handleSelectChange}
            ></Input>

            <LabelE htmlFor="maxMileAge">To </LabelE>
            <Input
              id="maxMileAge"
              value={formatMileAge(filters.maxMileAge)}
              onChange={handleSelectChange}
            ></Input>
          </div>
        </WrapperMake>
        <WrapperButton>
          <ButtonSearch type="onSubmit" onClick={handleSubmit}>
            Search
          </ButtonSearch>
        </WrapperButton>
      </form>
      <ButtonReset onClick={resetSubmit}>
        <LuFilterX />
      </ButtonReset>
    </ContainerFilter>
  );
};
export default FilterForm;
