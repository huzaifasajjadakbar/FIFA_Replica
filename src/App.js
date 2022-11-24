import MAIN from "./mainpage";
import {Routes,Route} from "react-router-dom";
import Rout from "./Rout";
import Privicy from "./privicy";
import Tearm from "./tearm";
function App() {
 





  return (
<div>

<Routes>

<Route path="/" element={<MAIN/>}  />

<Route path="/Tearm" element={<Tearm/>}  />
<Route path="/privacy" element={<Privicy/>}  />
</Routes>

 



</div>




  );
}

export default App;
