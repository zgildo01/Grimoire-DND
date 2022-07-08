import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

const SpellSearch = () => {
  const [spells, setSpells] = useState([])
  return (
    <>
      <h3>Such Spellz</h3>
      <SearchForm />
    </>
  );
}

export default SpellSearch;