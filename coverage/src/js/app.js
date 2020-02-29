function isCorrectHero({ name, health }) {
  const isCorrectArg = (name !== undefined) && (health !== undefined) && (+health >= 0);
  return isCorrectArg;
}

export default function sortHeroes(heroes) {
  const isCorrectArg = Array.isArray(heroes) && heroes.every((hero) => isCorrectHero(hero));
  if (!isCorrectArg) return null;

  heroes.sort((a, b) => +b.health - +a.health);
  return heroes;
}

const heroes = [
  { name: 'Мечник', health: 10 },
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
];

sortHeroes(heroes);
