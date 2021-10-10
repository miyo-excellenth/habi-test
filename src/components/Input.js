import PropTypes from 'prop-types';

import '../styles/components/input.scss';
import { useSelector } from 'react-redux';

Input.propTypes = {
  uniqueKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'select', 'checkbox', 'radio', 'money', 'file-image', 'email']).isRequired,
  onChange: PropTypes.func,
};

export default function Input({
  uniqueKey = '',
  label = '',
  placeholder = '',
  type = '',
  onChange = event => undefined,
}) {
  const { form } = useSelector(state => state.home);

  const inputData = {
    uniqueKey,
    label,
    placeholder,
    type,
  };

  const value = form[uniqueKey];

  switch (type) {
    case 'text':
      return (
        <div className="input">
          <span className={`input--label ${!!value && 'input--label--active'}`}>{label}</span>

          <input
            value={value}
            className="input--field"
            type="text"
            placeholder={placeholder}
            onChange={event => onChange(event, inputData)}
          />

          <span className="input--error">Error</span>
        </div>
      );

    default:
      return null;
  }
}
