import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'react-toast-notifications';

import './styles/index.css';
import { App } from './components';
import { AuthProvider,PostsProvider } from './providers';

// ReactDOM.render(
//    <React.StrictMode>
//   <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
//     <App />
//    </ToastProvider>
//  </React.StrictMode>
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <React.StrictMode>
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
    <AuthProvider>
    <PostsProvider>
    <App />
    </PostsProvider>
    </AuthProvider>
  
   </ToastProvider>
 </React.StrictMode>);
