import axios from "axios";

export function tgBot() {
  const TOKEN = "6586691947:AAGFAkEgqhiDmFHREDHw1vKmRvUMbJVeX2o";
  const CHAT_ID = "-1001881829689";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  document
    .getElementById("submit-btn")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let tgNotification = `<b>Заявка з сайту!</b>\n`;
      tgNotification += `<b>Замовник: </b> ${this.name.value}\n`;
      tgNotification += `<b>Товар: </b> ${this.product.value}\n`;
      tgNotification += `<b>Пошта: </b> ${this.email.value}\n`;
      tgNotification += `<b>Телефон: </b> ${this.tel.value}\n`;
      tgNotification += `<b>Коментар: </b> ${this.message.value}`;
    });

  document
    .getElementById("submit-btn2")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let tgNotification = `<b>Заявка з сайту!</b>\n`;
      tgNotification += `<b>Замовник: </b> ${this.name.value}\n`;
      tgNotification += `<b>Пошта: </b> ${this.email.value}\n`;
      tgNotification += `<b>Телефон: </b> ${this.tel.value}\n`;
      tgNotification += `<b>Коментар: </b> ${this.message.value}`;

      axios.post(URI_API, {
        chat_id: CHAT_ID,
        text: tgNotification,
        parse_mode: "html",
      });
    });
}
