<template>
  <div>
    <input type="text" />
    <div v-for=" obj of config" :key="obj.name">
      <label for="obj.label">
          {{obj.label}}
      </label>
      <input type="text" id="obj.label">
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoComplete",
  props: {
    config: null,
  },
};
</script>

<style>
</style>