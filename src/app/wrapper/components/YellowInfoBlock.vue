<template>
  <div class="info-block">
    <div class="info-block__title">После расчёта Вы получите:</div>

    <div class="info-block__content">
      <div>
        <div>
          <img src="../../../assets/images/yellowBlock/gift.svg" />
        </div>
        <div>
          Подарок ценой
          <p>до 5 000 руб.</p>
          за ваши ответы
        </div>
      </div>
      <div>
        <div>
          <img src="../../../assets/images/yellowBlock/estimation.svg" />
        </div>
        <div>
          <p>3 варианта</p>
          сметы по вашим параметрам
        </div>
      </div>
      <div>
        <div>
          <img
            src="../../../assets/images/yellowBlock/business-and-finance.svg"
          />
        </div>
        <div>
          <p>30% скидка</p>
          на все варианты
        </div>
      </div>
    </div>

    <div class="info-block__text">
      А также детальное описание всех типов окон и методы их применения.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info-block {
  padding: 30px;
  position: absolute;
  top: calc((100% - 463px) / 2);
  right: calc(50% + 275px);
  width: 292px;
  height: 463px;
  background: linear-gradient(90deg, #fec026 0%, #ffd52f 100%);
  box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 1;
  &__title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #2a3135;
  }
  &__text {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: #2a3135;
  }

  &__content {
    margin: 30px 0 10px 0;
    > div {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      > div:nth-of-type(1) {
        width: 54px;
        height: 54px;
        border: none;
        border-radius: 50%;
        background: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > div:nth-of-type(2) {
        width: 168px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16.8px;
        display: flex;
        align-items: center;
        color: #2a3135;
        display: block;
        > p {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          margin: 2px;
        }
      }
    }
  }
}

@media screen and (max-width: 1185px) {
  .info-block {
    order: 1;
    position: relative;
    width: calc(50% - 15px);
    top: 0;
    left: 0;
    display: flex;
    left: 0;
    flex-direction: column;
    justify-content: space-around;

    &__content {
      margin: 30px 0 10px 0;
      > div {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        align-items: center;
        > div:nth-of-type(2) {
          width: 100%;
          height: max-content;
          > p {
            display: inline-block;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 890px) {
  .info-block {
    width: calc(60% - 10px);
    padding: 20px;
  }
}
@media screen and (max-width: 785px) {
  .info-block {
    width: calc(55% - 10px);
  }
}
@media screen and (max-width: 690px) {
  .info-block {
    width: calc(52% - 10px);
  }
}
@media screen and (max-width: 595px){
  .info-block {
    width: 100%;
    padding: 30px;}
}
</style>
