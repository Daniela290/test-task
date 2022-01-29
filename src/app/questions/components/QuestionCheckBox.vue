<template>
  <input
    type="checkbox"
    :checked="value"
  />
  <label></label>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style lang="scss" scoped></style>
