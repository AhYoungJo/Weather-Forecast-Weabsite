import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension';
import {Provider} from 'react-redux';

import rootReducer from './Store/Data/Reducers/index';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// const store = configureStore({reducer: rootReducer}, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

//아래랑 위의 차이점이 뭐지?
// const store = configureStore({
//   reducer: rootReducer,
//   enhancers: [composeWithDevTools()]
// });

export default store;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
