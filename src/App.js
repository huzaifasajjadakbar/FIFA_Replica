import MAIN from "./mainpage";
import {Routes,Route} from "react-router-dom";
import Rout from "./Rout";
function App() {
 





  return (
<div>

<Routes>

<Route path="/" element={<MAIN/>}  />

<Route path="/Rout" element={<Rout/>}  />
</Routes>

 



</div>




  );
}

export default App;
