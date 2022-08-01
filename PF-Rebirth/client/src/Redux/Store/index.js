import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../Reducer/index.js';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))