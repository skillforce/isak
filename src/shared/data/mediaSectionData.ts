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
  LOCATION_TIME: "Belarus, Mogilev 2025",
};

export const TOOL_OPTIONS = [
  {
    toolName:'Эко',
    toolDescription:'Преднозначен для маломощных компрессоров.Экономичен к расходу воздуха. Производительность компрессора от 200л/мин на выходе',
    image:ecoImg,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: 75 },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price: 90 },
      { text: "С бачком(2 разгонных трубки в комплекте)", price: 140 },
    ],
  },
  {
    toolName:'Классик',
    toolDescription:'Преднозначен для бытовых работ.Производительность компрессора от 300л/мин на выходе',
    image:classicImage,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: 85 },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price: 100 },
      { text: "С бачком(2 разгонных трубки в комплекте)", price: 150 },
    ],
  },
  {
    toolName:'Титан',
    toolDescription:'Преднозначен для работы на производстве(малярные мастерские,СТО). Ресурс соплового узла увеличен путем закалки.Производительность компрессора от 300л/мин на выходе',
    image:titanImg,
    options: [
      { text: "Без бачка и регулировки подачи абразива(1 разгонная трубка в комплекте)", price: 100 },
      { text: "Без бачка, но с регулировкой подачи абразива(1 разгонная трубка в комплекте)", price: 115 },
      { text: "С бачком(2 разгонных трубки в комплекте)", price: 165 },
    ],
  }
];

