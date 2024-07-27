import ModalContext from '@/context/ModalContext';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  title: string;
  subTitle?: string;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { title, subTitle, children } = props;
  const [isVisible, setIsVisible] = useState(false);
  // const {closeModal} = useContext(ModalContext);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${isVisible ? 'bg-gray-800 bg-opacity-75 opacity-100' : 'opacity-0'}`}>
      <div className={`bg-zinc-800 rounded-lg p-6 relative w-full max-w-md md:max-w-2xl mx-4 border border-slate-400 
        transition-transform duration-700 transform ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        {/* <button
          className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center"
          onClick={closeModal}
        >
          <span className="text-lg">&times;</span>
        </button> */}
        <p className="text-center text-gray-600">{title}</p>
        {subTitle && <p className="text-center text-white font-medium">{subTitle}</p>}
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;