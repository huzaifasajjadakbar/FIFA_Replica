
import React, { useState } from 'react';
import "./card.css";
function Cards() {
    const[student,setstudent]=useState([{id:1,Tital:"football units the world",PA:"FIFA President inaugurates FIFA Forward project in Costa Rica",text:"The 2022 FIFA World Cup is an international football tournament contested by the men's national teams of FIFA's member associations",image :<img src={require('./A.jpeg')} alt="nolodead" style = {{height: "30vh" , width : " 100%"}}/>},
                                        {id:2,Tital:"football units the world",PA:"FIFA President inaugurates FIFA Forward project in Costa Rica",text:"The 2022 FIFA World Cup is an international football tournament contested by the men's national teams of FIFA's member associations",image :<img src={require('./ap.webp')} alt="nolodead" style = {{height: "30vh" , width : " 100%"}}/>},
                                        {id:3,Tital:"football units the world",PA:"FIFA President inaugurates FIFA Forward project in Costa Rica",text:"The 2022 FIFA World Cup is an international football tournament contested by the men's national teams of FIFA's member associations",image :<img src={require('./was.jpeg')} alt="nolodead" style = {{height: "30vh" , width : "100%"}}/>}]); 

  

   function  handelbutton(studentid){


const filteredData=student.filter((se) =>se.id != studentid);
setstudent(filteredData)

   }

    

  return (
      <div style={{display:"flex"}}>


 











{

student.map((card,key)=>(
    <div >



<div class="card" style={{width:" 18rem",marginTop:"30vh",marginLeft:"80px"}}>
  <p>{card.image}</p>
  <div class="card-body">
    <h5 class="card-title">{card.Tital}</h5>
   0
   
   
   
   
   
   
   
   
    <p class="card-text">{card.text}</p>
    {/* <button onClick={(se)=> handelbutton(card.id)}>Delete

</button> */}
  </div>
</div>







    

   
        
     
    </div>
    
    
    
))





}




</div>
    
    );
   }
   
   export default Cards;
   