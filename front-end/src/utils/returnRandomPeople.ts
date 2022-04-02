import { randomPeople } from '../mock/randomPeople';

export function returnRandomPeople () {
  const min = 0;
  const max = randomPeople.length;
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;

  return randomPeople[randomIndex];
}