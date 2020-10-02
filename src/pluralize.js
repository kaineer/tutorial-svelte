// src/pluralize.js

const pluralize = (n, one, few, many) => {
  let result = one;
  let units = n % 10;
  let before100 = n % 100;

  if (units !== 1 || before100 === 11) {
    if (units >= 2 && units <= 4 && (before100 < 10 || before100 >= 20)) {
      result = few;
    } else {
      result = many;
    }
  }

  return result;
};

export {pluralize};
