import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';
import {
  ContainerFilter,
  Input,
  Label,
  Select,
  WrapperMake,
} from './FilterForm.styled';
const initialFilters = {
  make: '',
  rentalPrice: '',
  minMileAge: '',
  maxMileAge: '',
};
const initialFocus = {
  make: false,
  rentalPrice: false,
};
const FilterForm = ({ cars }) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ ...initialFilters });
  const [uniqueCars, setUniqueCars] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState({});
  const [isFocused, setIsFocused] = useState({ ...initialFocus });

  const [minMaxMileAge, setMinMaxMileAge] = useState({});
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

    if (id === 'make') {
      setIsFocused(prevFocused => ({
        ...prevFocused,
        [id]: value !== '',
      }));
    } else if (id === 'rentalPrice') {
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
    console.log('filters2 :>> ', filters);
  };
  const resetSubmit = () => {
    setFilters({ ...initialFilters });
    dispatch(changeFilter({}));
  };

  const findMinMaxByField = (arr, field) => {
    if (arr.length === 0) {
      return { min: undefined, max: undefined };
    }

    return arr.reduce((result, item) => {
      let value = 0;
      if (field === 'rentalPrice') {
        value = Number(item[field].replace('$', ''));
      } else value = item[field];
      if (value < result.min || result.min === undefined) {
        result.min = value;
      }

      if (value > result.max || result.max === undefined) {
        result.max = value;
      }

      return result;
    }, {});
  };
  const formatMileAge = num => {
    const numString = num.toString();
    if (numString.length <= 3) {
      return numString;
    }

    const parts = [];
    for (let i = numString.length - 1, j = 1; i >= 0; i--, j++) {
      parts.unshift(numString[i]);
      if (j % 3 === 0 && i !== 0) {
        parts.unshift(',');
      }
    }

    return parts.join('');
  };
  return (
    <ContainerFilter>
      <form style={{ display: 'flex' }}>
        <WrapperMake>
          <Label htmlFor="make">Car brand</Label>
          <Select id="make" value={filters.make} onChange={handleSelectChange}>
            <option value="">
              {isFocused.make ? 'All Cars' : 'Enter the text'}
            </option>
            {uniqueCars.map(car => (
              <option
                key={car.make}
                value={car.make}
                disabled={car.count === 0 ? true : false}
              >
                {car.count === 0 ? car.make : `${car.make} (${car.count})`}
              </option>
            ))}
          </Select>
        </WrapperMake>
        <div>
          <label htmlFor="rentalPrice">Price/ 1 hour </label>
          <select
            id="rentalPrice"
            value={filters.rentalPrice}
            onChange={handleSelectChange}
          >
            <option value="">
              {' '}
              {isFocused.rentalPrice ? 'All Price' : 'Enter the text'}
            </option>
            {Array.from(
              { length: (minMaxPrice.max - minMaxPrice.min) / 10 + 1 },
              (_, index) => (
                <option key={index} value={minMaxPrice.min + index * 10}>
                  {minMaxPrice.min + index * 10}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label htmlFor="minMileAge">From </label>
          <input
            id="minMileAge"
            value={formatMileAge(filters.minMileAge)}
            onChange={handleSelectChange}
          ></input>
          <label htmlFor="maxMileAge">To </label>
          <Input
            id="maxMileAge"
            value={formatMileAge(filters.maxMileAge)}
            onChange={handleSelectChange}
          ></Input>
        </div>

        <button type="onSubmit" onClick={handleSubmit} />
      </form>
      <button style={{ width: '20px', height: '20px' }} onClick={resetSubmit} />
    </ContainerFilter>
  );
};
export default FilterForm;
