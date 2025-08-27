# WhatBytesTask

[Deployed Link](https://what-bytes-task-chi.vercel.app/) 

## Description
A simple e-commerce web application built with **React** and **Redux**.  
The app allows users to browse products, view detailed product information, and manage a shopping cart.

---

## ✨ Features

- 🏠 **Home Page** – Displays all available products with category and price filters.  
- 📄 **Product Details Page** – Shows detailed information about a selected product.  
- 🛒 **Cart Page** – Allows users to add/remove products and view their shopping cart.  
- 🔄 **Redux State Management** – Global state for products, filters, and cart using Redux.  
- 🎨 **Responsive UI** – Styled with Tailwind CSS (or your chosen framework).  

---

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

Here is an example of how you can use this project:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Dependencies

The project has the following dependencies:

- "@reduxjs/toolkit": "^2.8.2"
- "@tailwindcss/vite": "^4.1.12"
- "lucide-react": "^0.542.0"
- "react": "^19.1.1"
- "react-dom": "^19.1.1"
- "react-icons": "^5.5.0"
- "react-redux": "^9.2.0"
- "react-router-dom": "^7.8.2"
- "redux": "^5.0.1"
- "tailwindcss": "^4.1.12"
