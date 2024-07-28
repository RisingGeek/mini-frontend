"use client";

import ModalContext from "@/context/ModalContext";
import UserContext from "@/context/UserContext";
import { ModalId } from "@/interfaces/modal.type";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
const HomeContainer = dynamic(() => import("@/modules/HomeContainer"));

export default function Home() {
  const { user } = useContext(UserContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (!user.isLoggedIn) {
      openModal(ModalId.LOGIN);
    }
  }, [user.isLoggedIn, openModal]);

  return (
    <main>
      {user.isLoggedIn && <HomeContainer />}
    </main>
  );
}
