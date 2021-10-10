import PropTypes from 'prop-types';

import '../styles/components/modal.scss';
import { closeIcon } from '../assets/images';

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default function Modal({ open = false, children, onCloseModal = event => undefined }) {
  return (
    <div className="modal">
      <div className={`modal--shadow modal--shadow-${open ? 'active' : 'inactive'}`} onClick={onCloseModal} />

      <div className={`modal--container modal--container-${open ? 'active' : 'inactive'}`}>
        <img className="modal--close-icon" src={closeIcon} alt="Close icon" onClick={onCloseModal} />

        {children}
      </div>
    </div>
  );
}
