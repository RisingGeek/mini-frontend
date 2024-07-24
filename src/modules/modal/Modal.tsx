import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  subTitle?: string;
  onClose?: () => void;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen, title, subTitle, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-zinc-800 rounded-lg p-6 relative w-full max-w-md md:max-w-2xl mx-4 border border-white">
        <button
          className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center"
          onClick={onClose}
        >
          <span className="text-lg">&times;</span>
        </button>
        <p>{title}</p>
        {subTitle && <p>{subTitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Modal;