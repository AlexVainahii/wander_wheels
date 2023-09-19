import React from 'react';
import Modal from '../Modal/Modal';
import ModalCars from 'components/ModalCars/ModalСars';

const AddModalCars = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalCars onClose={onClose} />
    </Modal>
  );
};

export default AddModalCars;
