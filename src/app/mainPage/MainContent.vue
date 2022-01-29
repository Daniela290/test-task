<template>
  <div class="main-content">
    <div class="main-content__title">
      <p>Получите предварительный просчет стоимости,</p>
      <p>ответив на 6 простых вопросов за 1 минуту</p>
    </div>

    <div class="main-content__wrapper">
      <div class="steps-count">
        <p>Шаг {{ currentStep }} из 4</p>

        <el-progress
          :percentage="percentage"
          :stroke-width="18"
          :show-text="false"
        />
        <div class="steps-count__progress">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <transition name="componentTransition" mode="out-in" appear>
        <component :is="currentPage"></component>
      </transition>

      <div class="steps-btn">
        <button
          @click="goBack"
          :disabled="disabledBtnGoBack"
          class="steps-btn--active"
        >
          назад
        </button>
        <el-popover
          placement="top"
          :content="btnMessage"
          :disabled="isShowTooltip"
          v-model:visible="showTooltip"
        >
          <template #reference>
            <button
              @click="goAhead"
              :class="{ 'steps-btn--active': isShowTooltip }"
              @mouseover="showTooltip = true"
              @mouseout="showTooltip = false"
            >
              {{ textOfBtnToAhead }}
            </button>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { countSteps } from "./countSteps.state";
import Question1 from "../questions/Question1.vue";
import Question2 from "../questions/Question2.vue";
import Question3 from "../questions/Question3.vue";
import Question4 from "../questions/Question4.vue";
import { CLEAR_REQUESTS } from "../questions/questionRequests.state";
export default {
  data() {
    return {
      percentage: 25,
      showTooltip: false,
    };
  },
  components: {
    Question1,
    Question2,
    Question3,
    Question4,
  },
  computed: {
    currentPage() {
      return "Question" + countSteps.step;
    },
    currentStep() {
      return countSteps.step;
    },
    disabledBtnGoBack() {
      if (countSteps.step === 1) return true;
      return false;
    },
    btnMessage() {
      return countSteps.message;
    },
    isShowTooltip() {
      return countSteps.isCanNewStep;
    },
    textOfBtnToAhead() {
      return countSteps.step === 4 ? "готово" : "далее";
    },
  },
  methods: {
    goAhead() {
      if (countSteps.isCanNewStep) {
        this.percentage += 25;
        if (countSteps.step < 4) countSteps.step++;
        else if (countSteps.step === 4) {
          CLEAR_REQUESTS();
          countSteps.step = 1;
          this.percentage = 25;
        }
        if (this.percentage > 100) {
          this.percentage = 100;
        }
        countSteps.isCanNewStep = true;
        this.showTooltip = false;
      } else this.showTooltip = true;
    },
    goBack() {
      this.percentage -= 25;
      if (countSteps.step > 0) countSteps.step--;
      if (this.percentagee < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style lang="scss">
.componentTransition-enter-active,
.componentTransition-leave-active {
  transition: all 100ms linear;
  transform: scale(1, 1);
  opacity: 1;
}
.componentTransition-enter-from,
.componentTransition-leave-to,
.componentTransition-enter-to,
.componentTransition-leave-from {
  opacity: 0;
  transform: scale(0, 0);
}

.main-content {
  width: 1005px;
  height: 766px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
  border-radius: 10px;
  padding: 50px 67px;
  box-sizing: border-box;
  position: relative;
  &__title {
    > p {
      text-align: center;
      text-transform: uppercase;
      color: #2a3135;
      margin: 0;
      word-break: break-word !important;
      word-wrap: normal;
      transition: all 700ms;
    }
    > p:nth-of-type(1) {
      font-weight: 800;
      font-size: 30px;
      line-height: 48px;
    }
    > p:nth-of-type(2) {
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
    }
  }

  &__wrapper {
    width: 497px;
    margin: auto;
  }
}
.steps-count {
  margin-top: 30px;
  position: relative;
  > p {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #2a3135;
    margin: 0 0 10px 0;
  }

  .el-progress-bar__inner {
    background-color: #ffc930;
    border-radius: 30px 0px 0px 30px;
    border: 1px solid #ffffff;
  }

  .el-progress-bar__outer {
    background: #f6f6f6;
  }

  &__progress {
    position: absolute;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    bottom: 0;

    > div {
      background: transparent;
      border: 1px solid #ffffff;
      height: 16px;
      width: calc(100% / 4);

      &:nth-of-type(1) {
        border-radius: 30px 0px 0px 30px;
      }
      &:nth-last-child(1) {
        border-radius: 0px 30px 30px 0px;
      }
    }
  }
}
.steps-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  position: absolute;
  bottom: 50px;
  left: 0;
  > button {
    width: 165px;
    height: 50px;
    background: #c0c3c5;
    border-radius: 4px;
    border: none;
    transition: 200ms ease-in-out;

    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;

    &:disabled {
      background: #dfe1e2;
      cursor: no-drop;
      color: #ffffff;
    }
  }
  &--active:hover {
    background: linear-gradient(90deg, #fec026 0%, #ffd52f 100%);
    color: #2a3135;
  }
}

@media screen and (max-width: 1185px) {
  .main-content {
    order: 3;
    width: 100%;
    height: auto;
    box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
    border-radius: 10px;
    padding: 50px 67px 150px 67px;
  }
}
@media screen and (max-width: 670px) {
  .main-content {
    &__wrapper {
      width: 100%;
    }
  }
}
@media screen and (max-width: 595px) {
  .main-content {
    order: 2;
  }
}
@media screen and (max-width: 500px) {
  .main-content {
    padding: 40px 30px 90px 30px;
    &__title {
      > p:nth-of-type(1) {
        font-size: 25px;
        line-height: 37px;
      }
      > p:nth-of-type(2) {
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
  .steps-btn {
    bottom: 30px;
    gap: 10px;
    flex-wrap: wrap;
    > button {
      width: 110px;
      height: 36px;
      font-weight: 600;
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 390px) {
  .main-content {
    &__title {
      > p:nth-of-type(1) {
        font-size: 22px;
        line-height: 37px;
      }
      > p:nth-of-type(2) {
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
}
</style>
