<script>
    export let isFlipped;
    export let emoji
</script>

<div class:is-flipped={isFlipped} on:click class="card">
    {#if isFlipped}
        {emoji}
    {/if}
</div>

<style>
    .card {
        display: flex;

        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;

        background-color: hotpink;

        font-size: 6em;
    }
    .is-flipped {
        background-color: transparent;
    }
</style>