import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <img
        src='/images/logo.gif'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      <Link to="/shop" >Shop</Link>
      <Link to="/class-list">Class List</Link>
      <Link to="/monster-list">Scary Monsters</Link>
      <Link to="/spell-search">Search for Spells</Link>
    </header>
  );
}

export default NavBar;