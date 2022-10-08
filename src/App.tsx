import { useRef } from "react";
import "./App.css";
import Modal from "./components/Modal";
import useClickOutside from "./hooks/useClickOutside";
import Portal from "./libs/Portal";

function App() {
  const modalRef = useRef<HTMLDivElement>(null);

  const { isOpen: isOpenModal, setIsOpen: setIsOpenModal } =
    useClickOutside(modalRef);

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
          <Modal ref={modalRef} />
        </Portal>
      )}
    </>
  );
}

export default App;
