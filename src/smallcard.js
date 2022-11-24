import React, { useState } from 'react';

function Small() {
   

    const[student,setstudent]=useState([{id:1,Tital:"football units the world",PA:"FIFA President inaugurates FIFA Forward project in Costa Rica",text:"The 2022 FIFA World Cup is an international football tournament contested by the men's national teams of FIFA's member associations",image :<img src={require('./FIFA-World-Cup-2022-1-scaled.jpg')} alt="nolodead" style = {{height: "50vh" , width : " 100%"}}/>},
                                        ]); 

  

   function  handelbutton(studentid){

console.log("delete");

const filteredData=student.filter((se) =>se.id != studentid);
setstudent(filteredData)

   }

    

  return (
      <div>


 











{

student.map((card,key)=>(
    <div >




<div class="card mb-3" style={{marginTop:"100px",width:"90%",marginLeft:"3%"}}>
<p>{card.image}</p>
  <div class="card-body">
  <h5 class="card-title">{card.Tital}</h5>
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
   
   export default Small;