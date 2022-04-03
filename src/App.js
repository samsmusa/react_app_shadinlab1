// import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'

import Employee from './pages/Employee/Employee';
import Admin from './pages/Admin/Admin';
import Profile from './pages/Profile/Profile';
import Edit from './pages/Edit/Edit';

const App = () => {
  
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="/profile/:id/edit" element={<Edit />}>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
