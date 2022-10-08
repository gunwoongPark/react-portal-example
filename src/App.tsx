import { useCallback, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Portal from "./libs/Portal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onHideModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <>
      <div className="App">
        <button className="modal-button" onClick={() => setIsOpenModal(true)}>
          OPEN MODAL
        </button>
      </div>

      {/* components */}
      {isOpenModal && (
        <Portal>
          <Modal onHide={onHideModal} />
        </Portal>
      )}
    </>
  );
}

export default App;
