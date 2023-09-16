import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProfileCreation from "./Pages/ProfileCreation";
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/> 
           <Routes>
             <Route path="/" element={<ProfileCreation/>} />
           </Routes>   
        </Router>
   </div>
  );
}

export default App;
