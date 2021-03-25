import React,{useState} from 'react';
import './App.css';
import District from './DistrictList.json';
 const App=()=>{
const [SearchTerm,setSearchTerm]=useState("");
let i=0;
return (

  <div className="App">
      <header className="App-header">
        <h1>Kerala District</h1>
      </header>
    
 <div  className='content'>
 <input className='no-outline'  type='text' placeholder='Search...'
 onChange={(event)=>{setSearchTerm(event.target.value);}}></input>
 { District.filter((val,key)=>{
if(SearchTerm==""){

  return val;
}
else if(val.name?.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
  return val;
}

 }).map((val)=>{
return(
  <div >     
  <ul className='nav'>
      <li key={i++}>
      
      {val.name}
      
      </li></ul>  
  </div>

);
}

)
}
</div>

</div>

  );

}
export default App;
