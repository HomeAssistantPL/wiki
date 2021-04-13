import React, { useCallback, useEffect, useRef } from 'react';

import { useOutsideAlerter } from "./eventsFunctions"

const Modal = ({ children, setShowModal }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowModal)

  const escHelper = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setShowModal(null);
      }
    },
    [setShowModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', escHelper, false);
    return () => {
      document.removeEventListener('keydown', escHelper, false);
    };
  }, [escHelper]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div ref={wrapperRef} className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal;