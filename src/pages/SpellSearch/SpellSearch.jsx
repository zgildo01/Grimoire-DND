import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { spellSearch } from "../../services/api-calls";
import SpellCard from "../../components/SpellCard/SpellCard";

const SpellSearch = () => {
  const [spells, setSpells] = useState([])
  const handleSpellSearch = async formData => {
    const spellResults = await spellSearch(formData)
    setSpells(spellResults.results)
  }

  return (
    <>
      <h3>EL SPELL</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ? 
        <ul>
          {spells.map(spell => 
            <li key={spell.index}>
              <SpellCard spell={spell} />
            </li>
          )}
        </ul> 
        : 
        <h3>Please search for a spell!</h3>
      }
    </>
  );
}

export default SpellSearch;