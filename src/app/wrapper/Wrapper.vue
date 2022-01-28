<template>
  <div class="wrapper">
    <YellowInfoBlock />
    <MainContent />
    <AdviceBlock />
  </div>
</template>

<script>
import AdviceBlock from "./components/AdviceBlock.vue";
import YellowInfoBlock from "./components/YellowInfoBlock.vue";
import MainContent from "../mainPage/MainContent.vue";
export default {
  components: { AdviceBlock, YellowInfoBlock, MainContent },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 30px 20px;
}
@media screen and (max-width: 1185px) {
  .wrapper {
   // flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
