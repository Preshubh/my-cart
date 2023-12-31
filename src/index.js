import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor=persistStore(store)
root.render(
  
<Provider store={store}>

    <PersistGate persistor={persistor}>
    <App/>
    </PersistGate>

   </Provider>
   
);

reportWebVitals();
