import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

import ReactModal from 'react-modal';

function Modal({ changeVisible, isOpen, children }) {
  const ref = useRef(null);

  useClickAway(ref, () => changeVisible(false));

  return (
    <ReactModal
      className="modal"
      overlayClassName="modal__overlay"
      isOpen={isOpen}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
