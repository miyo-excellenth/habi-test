import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Input } from '.';

import '../styles/components/step.scss';

Step.propTypes = {
  key: PropTypes.any,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      uniqueKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'select', 'checkbox', 'radio', 'money', 'file-image', 'email']).isRequired,
    })
  ).isRequired,
  onInputChange: PropTypes.func,
};

export default function Step({
  key,
  name = '',
  path = '',
  description = '',
  inputs = [],
  onInputChange = (event, data) => undefined,
}) {
  return (
    <div className="step" key={key}>
      <h5 className="step--title">{name}</h5>

      <h6 className="step--description">{description}</h6>

      <form className="step--inputs">
        {inputs.map(input => (
          <Input {...input} key={nanoid()} onChange={onInputChange} />
        ))}
      </form>
    </div>
  );
}
