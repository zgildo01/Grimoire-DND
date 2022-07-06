import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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
            <Link key={classTitle.index} to="/class" state={{ classTitle }} >
              <div className="class-div" >
                <img 
                  style={{ width: "100px", height: "100px" }}
                  src={`/images/${classTitle.name}.svg`} 
                  alt="class-logo"
                />
                {classTitle.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default ClassList;