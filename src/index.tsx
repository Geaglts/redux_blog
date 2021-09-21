import { render } from 'react-dom';
import App from './pages/App';
import './styles/index.scss';

import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
