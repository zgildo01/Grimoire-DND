import { useState, useEffect } from "react";
import { getClassList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const ClassList = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClassData = async () => {
      const classData = await getClassList();
      setClasses(classData.results);
      console.log(classData)
    }
    fetchClassData()
  }, [])

  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {/** 
           * This is where we map over our results, representing 
           * each with a div containing an image and a name 
					*/}
          {classes.map(classTitle => 
            <Link
            key={classTitle.index}
            to='/class' 
            state={{ classTitle }}
            >
              <div className="class-div">
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
  );
}

export default ClassList;