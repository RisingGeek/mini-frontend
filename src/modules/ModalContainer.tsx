"use client";

import ModalContext from '@/context/ModalContext'
import { ModalId } from '@/interfaces/modal.type';
import React, { useContext } from 'react'
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';

const ModalContainer = () => {
    const { modalId } = useContext(ModalContext);
    switch (modalId) {
        case ModalId.LOGIN:
            return <LoginModal />
        case ModalId.SIGNUP:
            return <SignupModal />
        default:
            return null;
    }
}

export default ModalContainer
