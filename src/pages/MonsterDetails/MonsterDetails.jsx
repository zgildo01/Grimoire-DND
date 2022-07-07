import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const monsterData = await getDetails(location.state.monster.url)
      setMonsterDetails(monsterData)
    }
    fetchDetails()
  }, [location.state.monster.url])
  

  return (
    <>
      <h3>Monster Deets</h3>
      {monsterDetails.name ?
      <>
        <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
        <h3>{monsterDetails.name}</h3>
        <h4>{monsterDetails.size}</h4>
        <h4>{monsterDetails.type}</h4>
        <h4>AC: {monsterDetails.armor_class}</h4>
        {monsterDetails.actions.length ?
        <>
          {monsterDetails.actions.map(action =>
            <div key={action.name}>
              <h4>{action.name}</h4>
              <h5>{action.desc}</h5>
            </div>
          )}
        </>
        :
        <>
          <p>This poor monster has no actions. womp womp.</p>
        </>
        }
      </>
      :
      <>
        <h3>Loading monster details</h3>
      </>

      }
    </>
  )
}

export default MonsterDetails