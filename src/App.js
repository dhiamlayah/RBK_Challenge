import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import ProfileCreation from "./Pages/ProfileCreation";
import Links from "./Components/Links";
import Profile from "./Components/Profile";

export const  globalComponent = createContext() 
function App() {
  const [allLinks,setAllLinks]=useState([])

  console.log('all links',allLinks)  
  return (
    <div className="App">
        <globalComponent.Provider  value={{setAllLinks,allLinks}}  >
          <Router>
            <Navbar/>
             <Routes>
               <Route path="/" element={<ProfileCreation/>} >
                    <Route path="links" element={<Links/>} />
                    <Route path="profile" element={<Profile/>} />

               </Route>
             </Routes>
          </Router>
        </globalComponent.Provider>
   </div>
  );
}

export default App;
