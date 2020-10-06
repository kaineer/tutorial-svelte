<script>
  import Inner from './Inner.svelte';

  const handleMessage = (event) => {
    alert(event.detail.text);
  };
</script>

<Inner on:message={handleMessage} />
<!--
  Кроме того:
   имя события может содержать точку, например
-->
