import { useState } from 'react'
import './App.css'

function App() {


  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
 const [ready, setready] = useState(false);

  const getgeolocation=()=>{

    if(navigator.geolocation){

  navigator.geolocation.getCurrentPosition((res)=>{
    console.log(res);
    setlatitude(res.coords.latitude);
    setlongitude(res.coords.longitude);
    setready(true);
  });
  
    }
    else{
      console.log('not getting')
    
  }

}

const handleclick=()=>{
  if(!ready)
  {
 alert("follow the step ")
  }
}


  return (
    <div className="App">
       
      <h1>Annex tracker</h1>
      <h1>🎴</h1>
    <h2>step:1</h2>     <button onClick={getgeolocation}>get lng and lat</button>
   <h2>current longitude : {longitude}</h2>
   <h2> current latitude :  {latitude}</h2>
   <h2>step:2</h2>
   <a  href={ready && `https://gps-coordinates.org/my-location.php?lat=${latitude}&lng=${longitude}`}>
   <button onClick={handleclick} >Live location</button>
   </a>
  
   <h3>Follow the step so it will work correctly.</h3>
    </div>
  )
}

export default App
