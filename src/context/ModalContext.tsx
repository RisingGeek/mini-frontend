"use client";

import { ModalId } from "@/interfaces/modal.type";
import { createContext, ReactNode, useCallback, useState } from "react";

// Define the shape of the context data
const defaultModalState = {
    modalId: null as ModalId | null,
    openModal: (modalId: ModalId) => { },
    closeModal: () => { },
};

const ModalContext = createContext(defaultModalState);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalId, setModalId] = useState<ModalId | null>(null);

    const openModal = useCallback((modalId: ModalId) => {
        setModalId(modalId);
    }, []);

    const closeModal = useCallback(() => {
        setModalId(null);
    }, []);

    return (
        <ModalContext.Provider value={{ modalId, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalContext;