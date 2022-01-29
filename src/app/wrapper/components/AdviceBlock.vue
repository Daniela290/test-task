<template>
  <div class="advice-block">
    <div class="advice-block__message">
      Для более точного расчета стоимости выберите вариант, который вам больше
      подходит по цене
    </div>

    <div class="advice-block__author">
      <p>Инженер - замерщик</p>
      <p>Алексей</p>
    </div>

    <img src="../../../assets/images/adviceBlock/man.png" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.advice-block {
  position: absolute;
  top: calc((100% - 463px) / 2);
  left: calc(50% + 275px);
  width: 292px;
  height: 463px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
  border-radius: 10px;
  padding: 30px 30px 0px 30px;
  box-sizing: border-box;
  z-index: 1;

  &__message {
    width: 232px;
    height: 150px;
    border-radius: 10px;
    background: #2a3135;
    padding: 29px 25px 0 25px;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #f6f6f6;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 145px;
      left: 32px;
      border: 10px solid transparent;
      border-right: 10px solid #2a3135;
      border-top: 10px solid #2a3135;
      transform: rotate(-12deg);
    }
  }

  &__author {
    margin-top: 17px;
    > p:nth-of-type(1) {
      font-weight: bold;
    }

    > p:nth-of-type(2) {
      font-weight: normal;
    }

    > p {
      text-align: right;
      color: #2a3135;
      line-height: 22px;
      font-size: 16px;
      margin: 0;
    }
  }

  > img {
    position: absolute;
    bottom: 0;
  }
}

@media screen and (max-width: 1185px) {
  .advice-block {
    order: 2;
    position: relative;
    width: calc(50% - 15px);
    top: 0;
    left: 0;
    min-height: 245px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
      position: relative;
      width: 200px;
      height: 242px;
    }
    &__message {
      &::after {
        top: 124px;
      }
    }
  }
}
@media screen and (max-width: 890px) {
  .advice-block {
    width: calc(40% - 10px);
    &__message {
      padding: 19px 15px;
    }
  }
}
@media screen and (max-width: 785px) {
  .advice-block {
    width: calc(45% - 10px);
  }
}
@media screen and (max-width: 690px) {
  .advice-block {
    width: calc(48% - 10px);
  }
}
@media screen and (max-width: 595px) {
  .advice-block {
    order: 3;
    width: 100%;
  }
}
</style>
