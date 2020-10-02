<script>
  import Nested from './Nested.svelte';
</script>

<style>
/* Эти стили применятся только к своей разметке */
p {
  color: crimson;
}
</style>

<p>Разметка из компонента App</p>
<Nested />
