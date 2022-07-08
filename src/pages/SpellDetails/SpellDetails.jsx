import { useState, useEffect } from 'react';
import { getSpellDetails } from '../../services/api-calls';
import { useParams } from 'react-router-dom';

const SpellDetails = () => {
  const [spellDetails, setSpellDetails] = useState({})
  const { spellName } = useParams()

  useEffect(() => {
    const fetchSpellDetails = async () => {
      const spellData = await getSpellDetails(spellName)
      setSpellDetails(spellData)
    }
    fetchSpellDetails()
  }, [spellName])
  return (
    <>
      <h3>Spell Details</h3>
      { spellDetails.name ? 
        <>
          <h1>{spellDetails.name}</h1>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <p>{spellDetails.desc[0]}</p>
          <h2>Spell Player Classes</h2>
          {spellDetails.classes.length ?
          <>
            {spellDetails.classes.map(playerClass =>
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
            )}
          </>
          :
          <p>No player classes may use this spell</p>
          }
        </>
        :
        <>
          <p>Loading spell details...</p>
        </>
      }
    </>
  );
}

export default SpellDetails;