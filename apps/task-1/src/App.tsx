import { useState } from "react";
import { Modal } from "@repo/ui/modal";
import { useOutsideClick } from "@repo/ui/useClickOutSide";
import companyLogo from "./assets/companyLogo.svg";
import { InputField } from "./components";

function App() {
  const [modalStatus, setModalStatus] = useState(false);

  const closeModal = useOutsideClick(() => setModalStatus(false));

  return (
    <div className="p-4 bg-brand-bg h-[100vh] flex flex-col gap-8">
      <img src={companyLogo} alt="company" className="h-10 bg-black " />

      <button
        className="border border-brand border-opacity-[.2] hover:bg-opacity-[.6] p-4 w-[20%] text-white text-2xl"
        onClick={() => setModalStatus(true)}
      >
        Open Model
      </button>
      {modalStatus && (
        <Modal
          classname="flex bg-brand-bg  flex-col p-8 place-items-start  rounded-xl gap-8"
          ref={closeModal}
        >
          <header className="font-bold text-3xl text-white">
            Search your result
          </header>
          <InputField />
          <button
            onClick={() => setModalStatus(false)}
            className="flex place-self-end text-white hover:text-lg"
          >
            Close Modal
          </button>
        </Modal>
      )}
    </div>
  );
}

export default App;
