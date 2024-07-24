"use client"

import Modal from "@/modules/modal/Modal";
import Image from "next/image";

export default function Home() {
  const closeModal = () => (false);

  return (
    <main>
      <h1 className="text-lg">hello</h1>
      <Modal isOpen={true} onClose={closeModal}>
        <h2 className="text-2xl mb-4">Modal Titleafdfas</h2>
        <p>This is a modal content.sfsdf</p>
      </Modal>
    </main>
  );
}
