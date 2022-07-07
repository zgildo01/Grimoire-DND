import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMonsterList } from "../../services/api-calls";

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([])


  useEffect(() => {
    const fetchMonsterList = async () => {
      const monsterData = await getMonsterList()
      setMonsterList(monsterData.results)
    }
    fetchMonsterList()
  }, [])

  return (
    <>
      <h3>Monster List (SCARY!)</h3>
      {monsterList.length ?
      <>
        {monsterList.map(monster =>
          <div key={monster.index}>
            <Link to="/monster" state={{monster}}>{monster.name}</Link>
            <br />
          </div>
        )}
      </>
      :
      <>
        <h4>Loading scary monsters</h4>
      </>
      }
    </>
  )
}

export default MonsterList