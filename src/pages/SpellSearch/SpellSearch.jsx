import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { spellSearch } from '../../services/api-calls';

const SpellSearch = () => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = async formData => {
    const spellResults = await spellSearch(formData)
    setSpells(spellResults.results)
  } 

  return (
    <>
      <h3>Such Spellz</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ? 
        <>
          {spells.map(spell => 
            <div key={spell.index}>
              {spell.name}
            </div>
          )}
        </>
        :
        <h3>Please search for a spell!</h3>
      }
    </>
  );
}

export default SpellSearch;