import { ForwardedRef, forwardRef } from "react";
import styles from "./style/ModalStyle.module.css";

const Modal = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <div className={styles.modal_container} ref={ref}>
        <div className={styles.modal_body}>HELLO PORTAL</div>
      </div>
      <div className={styles.modal_dim_side} />
    </>
  );
});

export default Modal;
