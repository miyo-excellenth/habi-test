import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

import { HeroFullScreen, Modal, Steps } from '../components';
import {
  homeActionChangeInputForm,
  homeActionChangeStepLimit,
  homeActionCloseModal,
  homeActionNextStep,
  homeActionOpenModal,
  homeActionPreviousStep,
} from '../redux/actions';

import { homeActionTypes } from '../redux/actionTypes';

import { hotelImage } from '../assets/images';

import '../styles/pages/home-page.scss';

const stepsData = [
  {
    description: '',
    name: 'Primer paso',
    path: '/1',
    inputs: [
      {
        label: 'Name',
        type: 'text',
        placeholder: '',
        uniqueKey: 'name',
      },
    ],
  },
  {
    description: '',
    name: 'Segundo paso',
    path: '/2',
    inputs: [
      {
        label: 'Correo',
        type: 'email',
        placeholder: '',
        uniqueKey: 'email',
      },
    ],
  },
  {
    description: '',
    name: 'Tercer paso',
    path: '/3',
    inputs: [
      {
        label: 'Dirección',
        type: 'text',
        placeholder: '',
        uniqueKey: 'address',
      },
    ],
  },
  {
    description: '',
    name: 'Cuarto paso',
    path: '/4',
    inputs: [
      {
        label: 'Numero de piso del apartamento',
        type: 'text',
        placeholder: '',
        uniqueKey: 'floorNumberApartment',
      },
    ],
  },
];

function HomePage() {
  const dispatch = useDispatch();
  const { modal, steps } = useSelector(state => state.home);

  const history = useHistory();

  useEffect(() => {
    dispatch(homeActionChangeStepLimit(stepsData.length));
  }, []);

  const onPressHeroFullScreenButton = event => {
    if (modal.isOpen) dispatch(homeActionCloseModal());
    else dispatch(homeActionOpenModal());
  };

  const onStepInputChange = ({ target }, inputData) => {
    dispatch(homeActionChangeInputForm(homeActionTypes.FORM_CHANGE_NAME, target.value));
  };

  const onNextStep = event => {
    dispatch(homeActionNextStep());
  };

  const onPreviousStep = event => {
    dispatch(homeActionPreviousStep());
  };

  return (
    <main className="home-page">
      <HeroFullScreen
        title="Brindamos soluciones integrales de vivienda a través de tecnología e inteligencia artificial."
        description="Compramos tu casa en 10 días"
        alternativeText="Hotel Image"
        buttonText="Vender"
        image={hotelImage}
        onPressButton={onPressHeroFullScreenButton}
      />

      <Modal open={modal.isOpen} onCloseModal={onPressHeroFullScreenButton}>
        <Steps
          data={stepsData}
          onInputChange={onStepInputChange}
          index={steps.index}
          onNext={onNextStep}
          onPrevious={onPreviousStep}
        />
      </Modal>
    </main>
  );
}

export default props => <HomePage {...props} />;
