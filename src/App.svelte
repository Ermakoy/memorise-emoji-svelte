<script>
  import Card from "./Card.svelte";
  import {writable} from 'svelte/store';
  import { emojis } from "./emoji";

  const opened = writable([]);
  const guessed = writable([]);
  opened.subscribe(cardIndexes => {
	if (cardIndexes.length === 2) {
      const [first, second] = cardIndexes;
      if (first === second) {
		guessed.update(prev => prev.concat(cardIndexes));
		setTimeout(() => {
		  alert("success");
		},1000)
        opened.set([]);
      } else {
        

        setTimeout(() => {
		  alert("Not correct");
          opened.set([]);
        }, 2000);
      }
	}
  })
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
      on:click={() => opened.update(prev => prev.concat(i))}
      emoji={emoji} 
	  />
  {/each}
</div>
