import telegramIcon from "../../assets/contact_icons/telegram.svg";
import viberIcon from "../../assets/contact_icons/viber.svg";
import phoneIcon from "../../assets/contact_icons/phone.svg";
import whatsUpIcon from "../../assets/contact_icons/watsup.svg";

export const MODAL_DATA = {
  CONTACT_MODAL_ID: "contact_modal",
  CONTACTS: [
    {
      href: "https://wa.me/+375296083656",
      icon: whatsUpIcon,
      label: "WhatsApp",
    },
    {
      href: "viber://chat?number=+375296083656",
      icon: viberIcon,
      label: "Viber",
    },
    {
      href: "https://t.me/+375296083656",
      icon: telegramIcon,
      label: "Telegram",
    },
    { href: "tel:+375296083656", icon: phoneIcon, label: "Позвонить" },
  ],
};
