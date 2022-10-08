import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="App">
        <button className="modal-button" onClick={() => setIsOpenModal(true)}>
          OPEN MODAL
        </button>
      </div>

      {/* components */}
      {isOpenModal && <Modal />}
    </>
  );
}

export default App;
