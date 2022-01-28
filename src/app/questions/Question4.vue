<template>
  <div class="question">
    <div class="question__title">
      6. Укажите, пожалуйста, количество окон, которое необходимо просчитать
    </div>

    <div class="question__content">
      <input type="number" v-model="windowCount" />
      <div class="question__slider">
        <div>1</div>
        <el-slider
          v-model="windowCount"
          :show-tooltip="false"
          :max="25"
          :min="1"
          @input="inp"
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

      font-family: Open Sans;
      font-style: normal;
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
      outline: none;
    }
  }

  &__slider {
    display: flex;
    gap: 10px;
    > div:nth-of-type(1),
    > div:nth-last-child(1) {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      text-align: right;
      color: #2a3135;
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

    &__slider {
      display: flex;
      gap: 10px;
      > div:nth-of-type(1),
      > div:nth-last-child(1) {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 29px;
        text-align: right;
        color: #2a3135;
      }
    }
  }
}

@media screen and (max-width: 50px) {
  .question {
    &__content {
      padding: 0 15px;
      margin-top: 32px;
      margin-bottom: 10px;
      > input {
        width: 40px;
        height: 22px;
        font-size: 9px;
      }
    }

    &__slider {
      display: flex;
      gap: 10px;
      > div:nth-of-type(1),
      > div:nth-last-child(1) {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 29px;
        text-align: right;
        color: #2a3135;
      }
    }
  }
}
</style>
