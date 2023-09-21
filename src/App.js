import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import ProfileCreation from "./Pages/ProfileCreation";
import Links from "./Components/Links";
import Profile from "./Components/Profile";
import Preview from "./Pages/Preview";


export const  globalComponent = createContext() 
function App() {
  const [allLinks,setAllLinks]=useState([])
  const [imagesUrl,setImagesUrl]= useState(null)
  const [userInforamation,setUserInformation]=useState({
    firstName:'',
    lastName:'',
    email:'',
  })

  console.log('all links',allLinks)  
  return (
    <div className="App">
        <globalComponent.Provider  value={{setAllLinks,userInforamation,setUserInformation,allLinks,setImagesUrl,imagesUrl}}  >
          <Router>
            <Navbar/>
             <Routes>
               <Route path="/" element={<ProfileCreation/>} >
                    <Route path="" element={<Links/>} />
                    <Route path="profile" element={<Profile/>}/>
               </Route>
               <Route path="/preview" element={<Preview/>}/>
             </Routes>
          </Router>
        </globalComponent.Provider>
   </div>
  );
}

export default App;
