// src/App.js

/*import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
import React from 'react'
import './App.css'
import Sidebar from './Components1/Sidebar';
import Dashboard from './Components1/pages/Dashboard';
import About from './Components1/pages/About';
import Analytics from './Components1/pages/Analytics';
import Product from './Components1/pages/Product';
import ProductList from './Components1/pages/ProductList';
import Comments from './Components1/pages/Comments';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <About/>
      <Route path="/Components1/pages"element={<Dashboard/>}/>
      <Route path="/Components1/dashboard"element={<Dashboard/>}/>
      <Route path="/pages/about"element={<About/>}/>
      <Route path="/Comment"element={<Comments/>}/>
      <Route path="/analytics"element={<Analytics/>}/>
      <Route path="/product"element={<Product/>}/>
      <Route path="/productList"element={<ProductList/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  
  );
};

export default App;

import React from 'react';
import './App.css';
import Sidebar from './Components1/Sidebar';
import Dashboard from './Components1/pages/Dashboard';
import About from './Components1/pages/About';
import Analytics from './Components1/pages/Analytics';
import Product from './Components1/pages/Product';
import ProductList from './Components1/pages/ProductList';
import Comments from './Components1/pages/Comments';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;*/
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components1/Sidebar';
import Dashboard from './Components1/pages/Dashboard';
import About from './Components1/pages/About';
import Analytics from './Components1/pages/Analytics';
import Product from './Components1/pages/Product';
import ProductList from './Components1/pages/ProductList';
import Comments from './Components1/pages/Comments';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"element={<Dashboard />} />
          <Route path="/dashboard"element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;




