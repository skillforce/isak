import classicImage from "../../assets/tool/tool.png";
import ecoImg from "../../assets/tool/eco.png";
import titanImg from "../../assets/tool/titan.png";



export const MEDIA_SECTION_DATA = {
  VIDEOS_ID: [
    "wwzq9kUryF8?si=X_kpOn4CDefmvvKH",
    "AczPuWS2BeQ?si=29lXFXkqh68Hu0so",
  ],
  BUTTON_TITLE: "Заказать",
  COMPANY_NAME: "Gera2 ©",
  COMPANY_OWNER: "ИП Исаков Дмитрий Иванович",
  OWNER_UNP: "УНП 790853087",
  WEB_SOLUTIONS: "Веб-сайты и приложения для вашего бизнеса",
  WEB_SOLUTIONS_LINK: "tg://resolve?domain=@vpnameonlife",
};

export const TOOL_OPTIONS = [
  {
    toolName:'Эко',
    toolDescription:'Преднозначен для маломощных компрессоров.Экономичен к расходу воздуха. Производительность компрессора от 200л/мин на выходе',
    image:ecoImg,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: {RU:3000, BY:75} },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price:{RU:3500, BY:90}},
      { text: "С бачком(2 разгонных трубки в комплекте)", price: {RU:4500, BY:140} },
    ],
  },
  {
    toolName:'Классик',
    toolDescription:'Преднозначен для бытовых работ.Производительность компрессора от 300л/мин на выходе',
    image:classicImage,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: {RU:3500, BY:85} },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price: {RU:4000, BY:100} },
      { text: "С бачком(2 разгонных трубки в комплекте)", price: {RU:5000, BY:150} },
    ],
  },
  {
    toolName:'Титан',
    toolDescription:'Преднозначен для работы на производстве(малярные мастерские,СТО). Ресурс соплового узла увеличен путем закалки.Производительность компрессора от 300л/мин на выходе',
    image:titanImg,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: {RU:4000, BY:100} },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price: {RU:4500, BY:115} },
      { text: "С бачком(2 разгонных трубки в комплекте)", price: {RU:5500, BY:165} },
    ],
  }
];

