import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { VisibilityProvider } from './provider/state-manager/visibilityProvider';
import {ApiProvider} from './provider/API/call-service'
import { AppInfoProvider } from './provider/state-manager/appInfoProvider';
import { AppRoutes } from 'src/app/app-routing'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <AppInfoProvider>
        <ApiProvider>
          <AppRoutes />
        </ApiProvider>
      </AppInfoProvider>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
