import { Routes, Route } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Avoire from './components/Avoire';
import Bl from './components/Bl';
import Devis from './components/Devis';
import Factur from './components/Factur';
import Login from './components/Login';
import { Analytics } from "@vercel/analytics/react";
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Newdashboard from './components/Newdashboard';
import Settings from './components/Settings';
import Listbankstats from './components/Listbankstats';
import Listcash from './components/Listcash';
import Listinv from './components/Listinv';
import Listdraft from './components/Listdraft';
import Listuninv from './components/Listuninv';
import Listdelnotes from './components/Listdelnotes';
import Listsupp from './components/Listsupp';
import Addsupp from './components/Addsupp';
import Clientcredits from './components/Clientcredits';
import Listclient from './components/Listclient';
import Addclient from './components/Addclient';
import Listproduct from './components/Listproduct';
import Addproduct from './components/Addproduct';
import Charges from './components/Charges';
import Listreturns from './components/Listreturns';
import Listsales from './components/Listsales';
import Returns from './components/Returns';
import Sales from './components/Sales';


// https://managementstock.herokuapp.com/
// http://127.0.0.1:5000/

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="avoire" element={<Avoire />} />
        <Route path="bl" element={<Bl />} />
        <Route path="devis" element={<Devis />} />
        <Route path="facture" element={<Factur />} />
        <Route path="menu" element={<Menu />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Newdashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="listsales" element={<Listsales />} />
          <Route path="returns" element={<Returns />} />
          <Route path="listreturns" element={<Listreturns />} />
          <Route path="charges" element={<Charges />} />
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="listproduct" element={<Listproduct />} />
          <Route path="addclient" element={<Addclient />} />
          <Route path="listclient" element={<Listclient />} />
          <Route path="clientcredits" element={<Clientcredits />} />
          <Route path="addsupp" element={<Addsupp />} />
          <Route path="listsupp" element={<Listsupp />} />
          <Route path="listinv" element={<Listinv />} />
          <Route path="listdraft" element={<Listdraft />} />
          <Route path="listuninv" element={<Listuninv />} />
          <Route path="listdelnotes" element={<Listdelnotes />} />
          <Route path="listbankstats" element={<Listbankstats />} />
          <Route path="listcash" element={<Listcash />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App