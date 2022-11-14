import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ClassList from './pages/ClassList/ClassList';
import ClassDetails from './pages/ClassDetails/ClassDetails';
import MonsterList from './pages/MonsterList/MonsterList';
import MonsterDetails from './pages/MonsterDetails/MonsterDetails';
import SpellSearch from './pages/SpellSearch/SpellSearch';
import SpellDetails from './pages/SpellDetails/SpellDetails';
import Shop from './pages/Shop/Shop';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/class-list'
          element={<ClassList />} 
        />
        <Route 
          path='/class'
          element={<ClassDetails />}
        />
        <Route
          path='/monster-list' 
          element={<MonsterList />}
        />
        <Route 
          path='/monster'
          element={<MonsterDetails />}
        />
        <Route 
          path='/spell-search'
          element={<SpellSearch />}
        />
        <Route
          path='/shop'
          element={<Shop />}
        />
        <Route 
          path='/spell/:spellName'
          element={<SpellDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
