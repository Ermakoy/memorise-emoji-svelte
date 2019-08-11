<script>
    export let isFlipped;
</script>

<div class:is-flipped={isFlipped} on:click class="card">
    {$$props.emoji}
</div>