import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ClassList from './pages/ClassList/ClassList';
import ClassDetails from './pages/ClassDetails/ClassDetails';
import MonsterList from './pages/MonsterList/MonsterList'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/class-list" element={<ClassList />} />
        <Route path="/class" element={<ClassDetails />} />
        <Route path="/monster-list" element={<MonsterList />} />
      </Routes>
    </>
  );
}

export default App;
