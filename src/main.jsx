// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { store } from './app/store'
// import { Provider } from 'react-redux'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h2>IMPACT DONATE</h2>,
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <Provider store={store}>
//         <RouterProvider router={router} />
//         </Provider>

//   </StrictMode>
// )
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd'; // Import ConfigProvider
import 'antd/dist/reset.css'; // Ant Design styles

// Custom theme variables
const theme = {
  token: {
    colorPrimary: '#d4f674', // Primary color (your custom color)
    colorLink: '#4a90e2',    // Link color
    colorSuccess: '#52c41a', // Success color
    colorWarning: '#faad14', // Warning color
    colorError: '#f5222d',   // Error color
    fontSizeBase: '16px',    // Font size
    borderRadius: '4px',    // Border radius
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}> {/* Apply the theme globally */}
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

