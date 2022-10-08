import styles from "./style/ModalStyle.module.css";

const Modal = () => {
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal_body}>HI PORTAL</div>
      </div>
      <div className={styles.modal_dim_side} />
    </>
  );
};

export default Modal;
