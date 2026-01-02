import telegramIcon from "../../assets/contact_icons/telegram.svg";
import viberIcon from "../../assets/contact_icons/viber.svg";
import phoneIcon from "../../assets/contact_icons/phone.svg";
import whatsUpIcon from "../../assets/contact_icons/watsup.svg";


export type ContactType = "whatsapp" | "viber" | "telegram" | "phone";

export interface Contact {
  type: ContactType;
  href: string;
  icon: typeof whatsUpIcon
  label: string;
}

export interface ModalData {
  CONTACT_MODAL_ID: string;
  WELCOME_MODAL_ID: string;
  CONTACTS: Contact[];
}

export const MODAL_DATA:ModalData = {
  CONTACT_MODAL_ID: "contact_modal",
  WELCOME_MODAL_ID: "welcome_modal",
  CONTACTS: [
    {
      type: "whatsapp",
      href: "https://wa.me/375296083656",
      icon: whatsUpIcon,
      label: "WhatsApp",
    },
    {
      type: "viber",
      href: "viber://chat?number=%2B375296083656",
      icon: viberIcon,
      label: "Viber",
    },
    {
      type: "telegram",
      href: "tg://resolve?domain=@voxel44",
      icon: telegramIcon,
      label: "Telegram",
    },
    {
      type: "phone",
      href: "tel:+375296083656",
      icon: phoneIcon,
      label: "Позвонить",
    },
  ],
};
