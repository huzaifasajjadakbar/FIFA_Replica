
import FOOTER from "./footer";
import Cards from "./maping";
import Nabar from "./navbar";
import SIDE from "./Sidenavbar";
import Small from "./smallcard";
import Table from "./table";
import { useState } from "react";
import WOMAN from "./tablewoman";
import Cardss from "./card2";
function MAIN() {
// NUMBER
  const[count,setcount]=useState(1);
  const[count1,setcount1]=useState(2);
  const[count2,setcount2]=useState(3);

  // points
  const[points,setpoints]=useState(123324);
  const[points1,setpoints1]=useState(43534);
  const[points2,setpoints2]=useState(3324);

    return ( <div>



 
  <div class="row" style={{border:"1px solid black"}}>
  
     <Nabar/>

  </div>
  <div class="row"style={{border:" 1px solid black"}}>
    <div class="col-lg-10"style={{width:"300px"}}>

    <div class="row"style={{height:"70.8%",backgroundColor:"lightcyan"}}>
{/* uper bar */}
<Cardss/>
    </div>
    <div class="row"style={{height:"40%",backgroundColor:"lightcyan"}}>
{/* lowerbar */}
      
<img src={require('./thumbnail.jpg')} alt="nolodead" style = {{height: "50%" ,marginTop:"4%", width : " 15vw" ,marginLeft:"5%",borderRadius:"10%"}}/>
<img src={require('./kisspng-world-of-coca-cola-soft-drink-the-coca-cola-compan-coca-cola-logo-5a7531f4c4a922.6731914115176299408055.png')} alt="nolodead" style = {{height: "10vh" , width : " 10vw",marginLeft:"10%",marginTop:"40%"}}/>

    </div>
    
    </div>
    
    <div class="col-lg">
    <div class="row"style={{backgroundColor:"lightblue"}}>
    <img src={require('./red-fifa-world-cup-2022-qatar-haoc4j19wi6p0m9l.jpeg')} alt="nolodead" style = {{height: "50%" , width : "80%",marginLeft:"7%",marginTop:"1%",borderRadius:"10%"}}/>

    <Cards/>

    <h3 style={{marginTop:"3%",color:"white",fontWeight:"bold",color:"black"}}>MORE.........................................................</h3>
    <div>
      <Small/>
    </div>
    </div>
    
    <div class="row"style={{backgroundColor:"white"}}>
      <div style={{marginTop:"10%",marginLeft:"-9%" ,display:"flex"}}>

       
      <Table val1={count} val2={count1}val3={count2}    point0={points}   point1={points1}  point2={points2}      />
      <WOMAN val1={count} val2={count1}val3={count2}  point0={points}   point1={points1}  point2={points2}           />
      </div>
      <div style={{marginTop:"10%"}}>

       
     

      </div>
    </div>

      
    </div>
    {/* <div class="col-lg-10"style={{border:"1px solid black",height:"100vh",width:"300px"}}>
      <h1>Right-side bar</h1>
    </div> */}
  </div>
  <div class="row"style={{}}>
    <FOOTER/>
  </div>
</div>                                                                                        
        



 );
}

export default MAIN;