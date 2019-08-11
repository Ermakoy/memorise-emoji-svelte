<script>
  import { writable } from "svelte/store";

  import Card from "./Card.svelte";
  import { emojis } from "./emoji";

  const opened = writable([]);
  const guessed = writable([]);

  opened.subscribe(cardIndexes => {
    if (cardIndexes.length === 2) {
      const [first, second] = cardIndexes;
      if (emojis[first] === emojis[second]) {
        guessed.update(prev => prev.concat(cardIndexes));
        setTimeout(() => {
          alert("success");
        }, 700);
        opened.set([]);
      } else {
        setTimeout(() => {
          alert("Not correct");
          opened.set([]);
        }, 700);
      }
    }
  });

  const flipCard = i => () =>
    $opened.length < 2 &&
    !$opened.includes(i) &&
    !$guessed.includes(i) &&
    opened.update(prev => prev.concat(i));
</script>

<style>
  .container {
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    grid-gap: 30px;
  }
</style>

<div class="container">
  {#each emojis as emoji, i}
    <Card
      isFlipped={$opened.includes(i) || $guessed.includes(i)}
      on:click={flipCard(i)}
      {emoji} />
  {/each}
</div>
