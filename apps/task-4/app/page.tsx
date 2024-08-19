"use client";

import { Login, Navbar, TopSection } from "@/components";
import { Modal } from "@repo/ui/modal";
import { useOutsideClick } from "@repo/ui/useClickOutSide";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface contextType {
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}

export const modalContext = createContext<contextType | null>(null);

export default function Home() {
  const [modalStatus, setModalStatus] = useState(false);
  const modalRef = useOutsideClick(() => setModalStatus(false));

  return (
    <modalContext.Provider value={{ setModalStatus }}>
      <main className="flex min-h-screen relative flex-col bg-brand-bg">
        <Navbar />
        <TopSection />

        {modalStatus && (
          <Modal ref={modalRef}>
            <Login />
          </Modal>
        )}
      </main>
    </modalContext.Provider>
  );
}
