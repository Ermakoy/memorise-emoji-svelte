<script>
</script>
<div class:is-flipped={$$props.isFlipped} on:click class="card">
    {#if $$props.isFlipped}
        {$$props.emoji}
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
    }
    .is-flipped {
        background-color: transparent;
    }
</style>