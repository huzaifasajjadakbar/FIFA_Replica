
import { useState } from "react";


 function Table(props) {
    const[student,setstudent]=useState([{id:[props.val1],name:"argentina",Total:[props.point0],image :<img src={require('./flag-square-250.png')} alt="nolodead" style = {{height: "15%" , width : " 15%"}}/>}
    ,{id:[props.val2],name:"australian",Total:[props.point1],image :<img src={require('./flag).png')} alt="nolodead" style = {{height: "15%" , width : " 15%"}}/>},
    {id:[props.val3],name:"barzil",Total:[props.point2],image :<img src={require('./flag-squa.png')} alt="nolodead" style = {{height: "15%" , width : " 15%"}}/>}]);

        function  handelbutton(studentid){
     
     console.log("delete");
     
     const filteredData=student.filter((se) =>se.id != studentid);
     setstudent(filteredData)
     
        }
     
         
     
       return (
           <div style={{marginTop:"10%",width:"80%",marginLeft:"10%",fontWeight:"bold",fontSize:"20px"}}>
     
     <table className="table responsive-sm ">
        MEN
     <tr>
     
     <th>
        RK
     </th>
     
     <th>
         TEAM
     </th>
     
     <th>
        TOTAL Points:
     </th>
{/*      
     <th>
     
    
     Delete
</th> */}


</tr>

{

student.map((studentrec,key)=>(
    <tr>
    <td key={studentrec.id}>
{studentrec.id}
    </td>

    <td>
    {studentrec.image} {studentrec.name}
        </td>
        <td>
    {studentrec.Total}
        </td>
        <td>
    {/* <button onClick={(se)=> handelbutton(studentrec.id)}>Delete

    </button> */}
        </td>
        </tr>
    
    
    
))





}



</table>

    
    
    
    
    </div>
        
        );
       }
       
       

export default Table;