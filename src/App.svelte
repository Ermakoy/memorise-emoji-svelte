<script context="module">
	const randomEmoji = require('random-emoji');

	const shuffleArray = arr =>
	arr
		.map(a => [Math.random(), a])
		.sort((a, b) => a[0] - b[0])
		.map(a => a[1]);

	function getInitialEmoji(count = 8) {
		const emojiArray = randomEmoji.random({ count });
		return shuffleArray([...emojiArray, ...emojiArray]);
	}

	const chunk = (input, size) => input.reduce(
		(arr, item, idx) =>
		idx % size === 0
			? [...arr, [item]]
			: [...arr.slice(0, -1), [...arr.slice(-1)[0], item]],
		[]
	);

	let cards = getInitialEmoji()
</script>
<script>
	import Card from './Card'
	export let name;
	function flipCard(){

	}
</script>

<div>
	{#each cards as card}
		<Card isFlipped={card.isFlipped} on:click={flipCard} emoji={card.emoji}/>
	{/each}
</div>
