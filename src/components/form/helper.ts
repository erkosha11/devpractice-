import * as Yup from "yup";

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  phone: /^\+7 \(\d{3}\)\d{3}-\d{2}-\d{2}$/,
};

const firstName = Yup.string()
  .matches(regx.name, "Кириллица латиница от 2 до 20 символов")
  .required("Введите имя");

const number = Yup.string()
  .matches(regx.phone, "Неверный формат номера телефона")
  .required("Введите номер телефона");

const language = Yup.string().required("Выберите язык");

export const schemas = {
  custom: Yup.object().shape({
    firstName,
    number,
    language,
  }),
};

export const initialValues = {
  firstName: "",
  number: "",
  language: "react",
};
