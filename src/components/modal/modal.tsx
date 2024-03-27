import styles from "./modal.module.css";

function ModalItems4() {
  return (
    <div className={styles.modalItems4}>
      <div className={styles.ModalItems4Forms}>
        <form
          className={styles.modalItems4Form}
          action="#"
          method="post"
          id="add-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className={styles.ModalItemsInput}
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ваш телефон"
            className={styles.ModalItemsInput}
            pattern="[0-9]*"
          />
          <div className={styles.modalItems4FormChoice}>
            <input
              name="proga-lang"
              type="radio"
              id="python"
              checked={true}
              value="python"
            />
            <label htmlFor="python">
              <span className={styles.modalItems4FormButton}></span>
              <h2>Python</h2>
            </label>
            <input name="proga-lang" type="radio" id="react" value="react" />
            <label htmlFor="react">
              <span className={styles.modalItems4FormButton}></span>
              <h2>React</h2>
            </label>
          </div>
          <button type="submit" className={styles.modalItems4FormButtonSubmit}>
            <h2>Отправить заявку</h2>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalItems4;
