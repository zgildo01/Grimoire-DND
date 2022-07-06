import { useEffect } from 'react';
import { useState } from 'react';
import { getClassList } from '../../services/api-calls';

const ClassList = () => {
  const [classes, setClasses] = useState([])

  useEffect(()=> {
    const fetchClassList = async () => {
      const classData = await getClassList()
      setClasses(classData.results)
    }
    fetchClassList()
  }, [])

  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {classes.map(classTitle => 
            <div className="class-div" key={classTitle.index}>
              <img 
								style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo"
							/>
              {classTitle.name}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ClassList;