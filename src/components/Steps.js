import PropTypes from 'prop-types';

import { Button, Step } from '.';

import '../styles/components/steps.scss';

Steps.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  onInputChange: PropTypes.func,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default function Steps({
  data = [],
  onNext = event => undefined,
  onPrevious = event => undefined,
  onInputChange = (event, data) => undefined,
  index = 1,
}) {
  const currentStep = data[index];

  return (
    <div className="steps">
      <Step {...currentStep} onInputChange={onInputChange} />

      <div className="steps--buttons-group">
        {index >= 1 && (
          <Button className="steps--buttons-group--button" onClick={onPrevious}>
            Un paso atrás
          </Button>
        )}

        {index <= data.length && (
          <Button className="steps--buttons-group--button" onClick={onNext}>
            Siguiente paso
          </Button>
        )}
      </div>
    </div>
  );
}
