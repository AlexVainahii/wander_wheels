export const formatMileAge = num => {
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
export const initialFilters = {
  make: '',
  rentalPrice: '',
  minMileAge: '',
  maxMileAge: '',
};
export const findMinMaxByField = (arr, field) => {
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
