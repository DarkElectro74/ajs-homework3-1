import heroes from './array.js';

function comparison(x, y) {
  return (y.health - x.health);
}

export default function sortOfArray(array) {
  return array.sort(comparison);
}

sortOfArray(heroes);