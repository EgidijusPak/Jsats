function ciklas() {
  for (let i = -10; i <= 0; i++) {
    console.log(i);
  }
}
ciklas();

const numbers = [10, 2, 3, 6, 1, 24, 13, 0, -10, -2];

function filtered(arr) {
  return arr.filter((num) => num > 5);
}
console.log(filtered(numbers));

const kelione = {
  marsrutas: "Vilnius-Kaunas",
  data: "2024-11-21",
  kaina: 47.5,
};
console.log(
  `Keliones ${kelione.marsrutas} numatyta data ${kelione.data} ir jos kaina ${kelione.kaina}`
);

console.log(Object.entries(kelione));
