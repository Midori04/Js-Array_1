const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddetall = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(oddetall);

const partall = arr.filter(number => {
  return number % 2 === 0;
});

console.log(partall);
