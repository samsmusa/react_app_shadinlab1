import React, { useEffect, useState } from 'react';
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
import Home from './pages/Home/Home';
import Errorpage from './pages/Errorpage/Errorpage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel> <Employee></Employee></TabPanel>
      <TabPanel><Admin></Admin></TabPanel>
    </Tabs>
  );
};
//   return (
//     <BrowserRouter>
//     <Navbar></Navbar>
//       <Routes>
//         <Route path="/employee" element={<Employee />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/admin" element={<Admin />}/>
//         <Route path="/profile/:id" element={<Profile />}/>
//         <Route path="/profile/:id/edit" element={<Edit />}>
//         <Route
//           path="*"
//           element={<Errorpage />}/>
//         </Route>
//     </Routes>
// </BrowserRouter>
//   );
// }

export default App;
