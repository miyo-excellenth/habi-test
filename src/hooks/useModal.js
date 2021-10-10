import { useState } from 'react';
import PropTypes from 'prop-types';

UseModal.propTypes = {};

export default function UseModal({} = {}) {
  const [isOpen, setOpenModal] = useState(false);

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
