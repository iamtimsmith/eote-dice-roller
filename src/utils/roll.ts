import dice from './dice.json';
import text from './result-text.json';

export const rollDice = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const handleRolls = (type: string, count: number) => {
  const rolls = [];
  for (let i = 0; i < count; i++) {
    const result = rollDice(dice[type].length);
    rolls.push(dice[type][result]);
  }
  return rolls;
};

export const getResultText = (
  number: number,
  type: 'primary' | 'secondary' | 'critical' | 'destiny'
) => {
  // If result is positive
  if (number >= 0) {
    // If result is 1, use singular
    if (number === 1) return `${number} ${text[type].pos[0]}`;
    return `${number} ${text[type].pos[1]}`;
  } else {
    if (number === -1) return `${Math.abs(number)} ${text[type].neg[0]}`;
    return `${Math.abs(number)} ${text[type].neg[1]}`;
  }
};

export const getNetResults = results => {
  let primary = 0; // Successes & failures
  let secondary = 0; // Advantages & threats
  let critical = 0; // Triumphs & Despairs
  let destiny = 0; // Triumphs & Despairs

  results.forEach(result => {
    primary += result.primary;
    secondary += result.secondary;
    critical += result.critical;
    destiny += result.destiny;
  });

  let text = [];
  if (primary !== 0) text.push(getResultText(primary, 'primary'));
  if (secondary !== 0) text.push(getResultText(secondary, 'secondary'));
  if (critical !== 0) text.push(getResultText(critical, 'critical'));
  if (destiny !== 0) text.push(getResultText(destiny, 'destiny'));

  if (text.length === 0) return 'The roll produced no results';
  return text.join(', ');
};

export default ({ green, purple, yellow, red, blue, black, white }) => {
  let result = [
    ...handleRolls('green', green),
    ...handleRolls('purple', purple),
    ...handleRolls('yellow', yellow),
    ...handleRolls('red', red),
    ...handleRolls('blue', blue),
    ...handleRolls('black', black),
    ...handleRolls('white', white),
  ];
  const net = getNetResults(result);
  return { result, net };
};
