<template>
  <input
    type="checkbox"
    :checked="val"
  />
  <label></label>
</template>

<script>
export default {
  props: ["val"],
};
</script>

<style lang="scss" scoped></style>
