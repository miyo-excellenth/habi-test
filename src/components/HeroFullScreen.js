import PropTypes from 'prop-types';

import { Button } from '.';

import '../styles/components/hero-full-screen.scss';

HeroFullScreen.propTypes = {
  alternativeText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hiddenShadow: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPressButton: PropTypes.func.isRequired,
};

export default function HeroFullScreen({
  alternativeText = '',
  buttonText = 'Go ahead',
  description = '',
  image = '',
  hiddenShadow = false,
  title = '',
  onPressButton = event => undefined,
}) {
  return (
    <header className="hero-full-screen">
      {!hiddenShadow && <div className="hero-full-screen--shadow" />}

      <div className="hero-full-screen--cover">
        <img className="hero-full-screen--cover--image" src={image} alt={alternativeText} />
      </div>

      <div className="hero-full-screen--content">
        <h1 className="hero-full-screen--content--title">{title}</h1>

        <h4 className="hero-full-screen--content--description">{description}</h4>

        <Button className="hero-full-screen--content--button" onClick={onPressButton}>
          {buttonText}
        </Button>
      </div>
    </header>
  );
}
