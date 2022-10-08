import styles from "./style/ModalStyle.module.css";

const Modal = (props: { onHide: () => void }) => {
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal_body}>HELLO PORTAL</div>
      </div>
      <div className={styles.modal_dim_side} onClick={() => props.onHide()} />
    </>
  );
};

export default Modal;
