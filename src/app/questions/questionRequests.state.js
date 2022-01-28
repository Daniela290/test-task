import { reactive } from "vue";

export const questionRequests = reactive({
    typeOfRooms: [
        {
          img: "ph1.jpg",
          title: "частный дом",
          isChecked: false,
        },
        {
          img: "ph2.jpg",
          title: "панельный дом",
          isChecked: false,
        },
        {
          img: "ph3.jpg",
          title: "кирпичный дом",
          isChecked: false,
        },
        {
          img: "ph4.jpg",
          title: "элитный жил.комплекс",
          isChecked: false,
        },
        {
          img: "ph5.jpg",
          title: "бизнес-центр / офисное здание",
          isChecked: false,
        },
        {
          img: "ph6.jpg",
          title: "балкон",
          isChecked: false,
        },
    ],
    typeOfGlazing: [{
        title: "Тёплое",
        isChecked: false        
    },{
        title: "Холодное",
        isChecked: false        
    },{
        title: "не знаю, в чем разница,нужна консультация",
        isChecked: false        
        }],
    accessories: [
        {
            img: "ph1.jpg",
            title: "отлив",
            isChecked: false,
          },{
            img: "ph2.jpg",
            title: "Подоконник",
            isChecked: false,
          },{
            img: "ph3.jpg",
            title: "Откосы",
            isChecked: false,
          },{
            img: "ph4.jpg",
            title: "Москитная сетка",
            isChecked: false,
          },
  ],
    windowCount:5
})

export function CLEAR_REQUESTS() {
  questionRequests.typeOfRooms.forEach(el => el.isChecked = false);
  questionRequests.typeOfGlazing.forEach(el => el.isChecked = false);
  questionRequests.accessories.forEach(el => el.isChecked = false);
  questionRequests.windowCount = 5;
}