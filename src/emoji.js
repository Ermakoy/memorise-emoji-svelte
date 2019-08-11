import randomEmoji from 'random-emoji';
import { writable } from 'svelte/store'

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

function getInitialEmoji(count = 8) {
  const emojiArray = randomEmoji
    .random({ count })
    .map(({ character }) => character);
  return shuffleArray([...emojiArray, ...emojiArray]);
}

const emojis = getInitialEmoji();

export { 
    emojis,
    // opened,
    // guessed,
}