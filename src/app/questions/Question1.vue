<template>
  <div class="question">
    <div class="question__title">
      1. Укажите, пожалуйста, куда планируете ставить Окна?
    </div>
    <div class="question__content">
      <div
        class="type-room"
        v-for="el in typeOfRooms"
        :key="el.title"
        @click="changeType(el)"
      >
        <img :src="require(`../../assets/images/question1/${el.img}`)" alt="" />
        <div>
          <input
            type="checkbox"
            @onclick="changeType(el)"
            :checked="el.isChecked"
          />
          <label></label>
          <p>{{ el.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countSteps } from "../mainPage/countSteps.state";
import { questionRequests } from "./questionRequests.state.js";
export default {
  data() {
    return {
      // typeOfRooms: [
      //   {
      //     img: "ph1.jpg",
      //     title: "частный дом",
      //     isChecked: false,
      //   },
      //   {
      //     img: "ph2.jpg",
      //     title: "панельный дом",
      //     isChecked: false,
      //   },
      //   {
      //     img: "ph3.jpg",
      //     title: "кирпичный дом",
      //     isChecked: false,
      //   },
      //   {
      //     img: "ph4.jpg",
      //     title: "элитный жил.комплекс",
      //     isChecked: false,
      //   },
      //   {
      //     img: "ph5.jpg",
      //     title: "бизнес-центр / офисное здание",
      //     isChecked: false,
      //   },
      //   {
      //     img: "ph6.jpg",
      //     title: "балкон",
      //     isChecked: false,
      //   },
      // ],
    };
  },
  methods: {
    changeType(type) {
      if (type) {
        type.isChecked = !type.isChecked;
      }
      countSteps.isCanNewStep = questionRequests.typeOfRooms.some(
        (el) => el.isChecked === true
      );
      if (!countSteps.isCanNewStep) {
        countSteps.message = "Вы должны выбрать хотя бы 1 вид помещений";
      } else countSteps.message = "";
    },
  },
  mounted() {
    this.changeType();
  },
  computed: {
    typeOfRooms() {
      return questionRequests.typeOfRooms;
    },
  },
};
</script>

<style scoped lang="scss">
.question {
  &__content {
    display: flex;
    flex-wrap: wrap;
  }
}
.type-room {
  width: 150px;
  height: 156px;
  box-sizing: border-box;

  > img {
    cursor: pointer;
  }
  > div {
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #2a3135;
      margin: 0;
    }
  }
}

@media screen and (max-width: 670px) {
  .question {
    &__content {
      gap: 15px;
    }
  }
  .type-room {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 410px) {
  .type-room {
    > div {
      margin-top: 0px;
      flex-direction: row;
      justify-content: flex-start;
      gap: 15px;
      > p {
        text-align: start;
      }
    }
    > img {
      display: none;
    }
    height: max-content;
    width: 100%;
  }
}
</style>
