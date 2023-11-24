import { createRoot } from 'react-dom/client';
import './styles.css';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { store } from './share/store';
import BlackJack from './components/Main/BlackJack';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    {/* <Main /> */}
    <BlackJack />
  </Provider>
);
