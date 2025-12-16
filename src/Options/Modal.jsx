import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);


    // useEffect(() => {
    //     if (!dialogRef.current) return;

    //     if (isOpen) {
    //         dialogRef.current.showModal();
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         dialogRef.current.close();
    //         document.body.style.overflow = '';
    //     }

    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isOpen]);

    // const handleClose = (e) => {
    //     if (e.target === dialogRef.current) {
    //         onClose();
    //     }
    // };
    return (
        <dialog 
            ref={dialogRef}
            onClick={handleClose}

            >
            {children}
        </dialog>
    );
};

export default Modal;