import { Provider } from 'react-redux';

import './styles/global.scss';

import { AppRoutes } from './routes';
import { store } from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
