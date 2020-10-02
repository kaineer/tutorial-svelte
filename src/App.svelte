<script>
  let count = 0;
  $: doubled = count * 2;

  const handleClick = () => count += 1;
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} &times; 2 = {doubled}</p>
