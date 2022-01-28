<template>
  <div class="question">
    <div class="question__title">3. Выберите дополнительную фурнитуру</div>

    <div class="question__content">
      <div
        class="accessories"
        v-for="el in accessories"
        :key="el.title"
        @click="changeType(el)"
      >
        <img :src="require(`../../assets/images/question3/${el.img}`)" alt="" />
        <div>
          <input
            type="checkbox"
            @onclick="changeType(el)"
            :checked="el.isChecked"
          />
          <label></label>
        </div>
        <p>{{ el.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countSteps } from "../mainPage/countSteps.state";
import { questionRequests } from "./questionRequests.state.js";
export default {
  computed: {
    accessories() {
      return questionRequests.accessories;
    },
  },
  methods: {
    changeType(type) {
      if (type) {
        type.isChecked = !type.isChecked;
      }
      countSteps.isCanNewStep = questionRequests.accessories.some(
        (el) => el.isChecked === true
      );
      if (!countSteps.isCanNewStep) {
        countSteps.message = "Вы должны выбрать необходимую фурнитуру";
      } else countSteps.message = "";
    },
  },
  mounted() {
    this.changeType();
  },
};
</script>

<style lang="scss">
.question {
  &__content {
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
  }
}
.accessories {
  position: relative;
  margin-bottom: 10px;
  width: max-content;
  cursor: pointer;
  > div {
    position: absolute;
    right: -14px;
    top: 48px;
    label::before {
      background: #ffff;
    }
  }
  > p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #2a3135;
    margin: 7px 0 10px 0;
  }
}

@media screen and (max-width: 500px) {
  .question {
    &__content {
      margin-bottom: 10px;
    }
  }
  .accessories {
    width: 100%;
    > img {
      display: none;
    }
    > div {
      top: 0;
      right: 10px;
    }
  }
}
</style>
