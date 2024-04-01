import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button type="submit" className={styles.formButton}>
      {children}
    </button>
  );
};