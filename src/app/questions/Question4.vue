<template>
  <div class="question">
    <h3 class="question__title">
      6. Укажите, пожалуйста, количество окон, которое необходимо просчитать
    </h3>

    <div class="question__content">
      <input type="number" v-model="windowCount" />
      <div class="question__slider">
        <div>1</div>
        <el-slider
          v-model="windowCount"
          :show-tooltip="false"
          :max="25"
          :min="1"
        ></el-slider>
        <div>25</div>
      </div>
    </div>
  </div>
</template>

<script>
import { questionRequests } from "./questionRequests.state.js";
export default {
  computed: {
    windowCount: {
      set(val) {
        questionRequests.windowCount = val;
      },
      get() {
        return questionRequests.windowCount;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.question {
  &__content {
    padding: 0 15px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    > input {
      width: 166px;
      height: 70px;
      background: #d8d8d8;
      border-radius: 10px;
      border: none;
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #2a3135;
      opacity: 0.3;
      margin: auto;
      //-webkit-appearance: none !important;
      -moz-appearance: textfield !important;
    }
  }

  &__slider {
    display: flex;
    gap: 10px;
    > div:nth-of-type(1),
    > div:nth-last-child(1) {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      text-align: right;
      color: #2a3135;
      word-break: normal;
    }
  }
}

@media screen and (max-width: 750px) {
  .question {
    &__content {
      padding: 0 15px;
      margin-top: 32px;
      margin-bottom: 10px;
      > input {
        width: 110px;
        height: 40px;
        font-size: 17px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .question {
    &__content {
      padding: 0 15px;
      margin-top: 32px;
      margin-bottom: 10px;
      > input {
        width: 40px;
        height: 30px;
        font-size: 12px;
      }
    }

    &__slider {
      > div:nth-of-type(1),
      > div:nth-last-child(1) {
        font-size: 12px;
        line-height: 29px;
      }
    }
  }
}
</style>
