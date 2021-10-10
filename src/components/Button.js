import PropTypes from 'prop-types';

import '../styles/components/button.scss';

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Button({ className = '', children, ...otherProps }) {
  return (
    <button className={`button ${className}`} {...otherProps}>
      {children}
    </button>
  );
}
