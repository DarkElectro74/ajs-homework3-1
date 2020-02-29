import sortHeroes from '../src/js/app';

test('sortHeroes() - result success', () => {
  const heroes = [
    { name: 'Мечник', health: 10 },
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
  ];
  const sortedHeroes = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];
  expect(sortHeroes(heroes)).toEqual(sortedHeroes);
});

test('heroes = undefined', () => {
  expect(sortHeroes()).toEqual(null);
});

test('heroes: not an array', () => {
  const heroes = 25;
  expect(sortHeroes(heroes)).toEqual(null);
});

test('heroes: not an array of heroes', () => {
  const heroes = [10, 100, 80];
  expect(sortHeroes(heroes)).toEqual(null);
});

test('heroes: array has an invalid hero', () => {
  const heroes = [
    { name: 'Мечник', health: 'critical' },
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
  ];
  expect(sortHeroes(heroes)).toEqual(null);
});
