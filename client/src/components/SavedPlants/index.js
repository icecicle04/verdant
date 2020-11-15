import React, {useState, useEffect} from "react"
import API from "../../utils/API";

function SavedPlants() {
const [plants, setPlants] = useState([]);

useEffect(() =>{
API.getPlant().then((response)=>{
  console.log("GETTING PLANTS")
  console.log(response.data);
  setPlants([response.data]);
}).catch((err) =>{
  if(err) throw err;
})
},[]);

console.log(plants)
function deletePlant(){
  // add functionality to delete plants
}

    return (   
      <>
      <div className="container fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h3>My Saved Plants:</h3>
                {plants.map((data) => {
                  return (
                    <div>
                      <h4>{data.common_name}</h4>
                      <button onClick={() => deletePlant(data._id)}>
                        Delete Plant
                      </button>
                    
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      );
    }
export default SavedPlants;