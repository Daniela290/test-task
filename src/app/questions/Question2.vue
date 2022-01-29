<template>
  <div class="question">
    <h3 class="question__title">2. Какой тип остекления интересует?</h3>

    <div class="question__content">
      <div
        class="type-glass"
        v-for="el in typeOfGlazing"
        :key="el.title"
        :class="{ 'type-glass--checked': el.isChecked }"
        @click="changeType(el)"
      >
        <p>{{ el.title }}</p>
        <div>
          <input
            name="glass"
            type="radio"
            @onclick="changeType(el)"
            :checked="el.isChecked"
          />
          <label></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countSteps } from "../mainPage/countSteps.state";
import { questionRequests } from "./questionRequests.state.js";
export default {
  computed: {
    typeOfGlazing() {
      return questionRequests.typeOfGlazing;
    },
  },
  methods: {
    changeType(type) {
      if (type) {
        questionRequests.typeOfGlazing.forEach((el) => (el.isChecked = false));
        type.isChecked = !type.isChecked;
      }
      countSteps.isCanNewStep = questionRequests.typeOfGlazing.some(
        (el) => el.isChecked === true
      );
      if (!countSteps.isCanNewStep) {
        countSteps.message = "Вы должны выбрать вид застекления";
      } else countSteps.message = "";
    },
  },
  mounted() {
    this.changeType();
  },
};
</script>

<style lang="scss" scoped>
.question {
  &__content {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 32px;
    margin-top: 28px;
    margin-bottom: 20px;
    align-items: center;
  }
}

.type-glass {
  width: 360px;
  height: 70px;
  box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
  border-radius: 10px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  cursor: pointer;
  > p {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #2a3135;
  }
  &--checked {
    background: linear-gradient(90deg, #fec026 0%, #ffd52f 100%);
  }

  > div {
    position: absolute;
    bottom: -14px;
    left: 168px;
  }
}

@media screen and (max-width: 500px) {
  .type-glass {
    width: 100%;
    height: 55px;
    padding: 10px 10px;

    > div {
      left: calc((100% - 20px) / 2);
    }
  }
}
</style>
