<script>
  let promise = getRandomNumber();

  async function getRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Math.floor(Math.random() * 20 + 1)), 1000);
    });
  }

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}>
  Генерируем случайное число
</button>

<!-- replace this element -->
{#await promise}
  <p>...ждём, когда закончится timeout</p>
{:then number}
  <p>Получаем число {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
