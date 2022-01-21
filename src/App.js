import React from 'react';
import { Routes, BrowserRouter, Link, Route, Navigate, Outlet } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login'
import TodoList from './components/TodoList';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <div>
          <Routes>
            <Route path="/todo" element={<TodoList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
