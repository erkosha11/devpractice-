import styles from "./input.module.css";
import { Field, ErrorMessage as Error } from "formik";

// Define the interface for Input props
interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
}

export const Input = ({ id, label, name, placeholder }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id} placeholder={placeholder} />
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
};
