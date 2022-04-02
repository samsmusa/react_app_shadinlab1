import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import Employee from './pages/Employee/Employee';
import Admin from './pages/Admin/Admin';

const App = () => {
  return (
    <Routes>
    <Route path="/employee" element={<Employee />} />
    <Route path="/admin" element={<Admin />}>
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
  );
}

export default App;
