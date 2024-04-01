import styles from "./form.module.css";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "./helper";
import { Input } from "../input/Input";
import { Button } from "../button/button";
import { SuccessMessage } from "./SuccessMessage";
import { useState } from "react";

export const CustomForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
        setIsSubmitted(true);
      }}
    >
      {({ values, setFieldValue }) => (
        <>
          {isSubmitted ? (
            <SuccessMessage />
          ) : (
            <Form className={`${styles.form} ${isSubmitted && styles.hidden}`}>
              <Input label="" name="firstName" id="firstName" placeholder="Ваше имя" />
              <Input label="" name="number" id="number" placeholder="Ваш телефон" />
              <div className={styles.languageCheckbox}>
                <input
                  type="radio"
                  name="language"
                  id="react"
                  value="react"
                  checked={values.language === "react"}
                  onChange={(e) => setFieldValue("language", e.target.checked ? "react" : "")}
                />
                <label htmlFor="react">
                  <span className={styles.modalItems4FormButton}></span>
                  <h2>React</h2>
                </label>
                <input
                  type="radio"
                  name="language"
                  id="python"
                  value="python"
                  checked={values.language === "python"}
                  onChange={(e) => setFieldValue("language", e.target.checked ? "python" : "")}
                />
                <label htmlFor="python">
                  <span className={styles.modalItems4FormButton}></span>
                  <h2>Python</h2>
                </label>
              </div>
              <Button>Отправить</Button>
            </Form>
          )}
        </>
      )}
    </Formik>
  );
};