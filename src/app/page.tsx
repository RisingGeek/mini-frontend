"use client"

import ModalContext from "@/context/ModalContext";
import UserContext from "@/context/UserContext";
import { ModalId } from "@/interfaces/modal.type";
import HomeContainer from "@/modules/HomeContainer";
import SignupForm from "@/modules/SignupForm";
import { useContext, useEffect } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (!user.isLoggedIn) {
      openModal(ModalId.LOGIN);
    }
  }, [user.isLoggedIn, openModal])

  return (
    <main>
      {user.isLoggedIn && <HomeContainer />}
    </main>
  );
}
