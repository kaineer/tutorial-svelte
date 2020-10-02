<script>
  let count = 0;

  import {pluralize} from './pluralize';

  const handleClick = () => {
    count += 1;
  };
</script>

<button on:click={handleClick}>
  Кнопку нажали {count} {pluralize(count, 'раз', 'раза', 'раз')}
</button>
