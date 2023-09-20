import React from 'react';
import Modal from '../Modal/Modal';
import ModalCars from 'components/ModalCars/ModalСars';

const AddModalCars = ({ onClose, car }) => {
  return (
    <Modal onClose={onClose}>
      <ModalCars onClose={onClose} car={car} />
    </Modal>
  );
};

export default AddModalCars;
