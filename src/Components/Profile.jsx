import { useRef ,useContext, useState} from "react";
import { globalComponent } from "../App";
import "../Design/profile.css";
const Profile = () => {
    const {userInforamation,setUserInformation,setImagesUrl}= useContext(globalComponent)
    const Input_Img = useRef()
   
    const onUplodeImage = ()=>{
     if (Input_Img.current){
      Input_Img.current.click()
     }
    }

    const handleClick = (e)=>{
      const file= e.target.files[0]
      const imagesUploded = (window.URL ? URL : window.webkitURL).createObjectURL(
        file
      )
      console.log(imagesUploded)
      setImagesUrl(imagesUploded)
    }

    const handleChange = (e,name)=>{
      setUserInformation({...userInforamation,[name]:e.target.value})
      console.log(userInforamation)
    }

   return (
    <div className="m-2" id="profileData">
      <div className="mt-5">
        <h1>Profile Details :</h1>
        <p>Add your details to create a personnal touch to  your profile</p>
      </div>
  
      <div className=" mb-3 p-2 rounded-2 d-flex" style={{ backgroundColor: "#dedede70" }}>
      <label htmlFor="Images" className="fw-bold"> Profile picture: </label>

      <div className="d-block mx-5" id="picture" onClick={onUplodeImage}>
        <img src='' alt="picture" />
        <input type="file" ref={Input_Img} className="d-none"  onChange={handleClick} />
      </div>
      </div>
    
      <div className="mb-3 p-2 rounded-2" style={{ backgroundColor: "#dedede70" }}>
        <div className="d-flex pt-2">
          <label htmlFor="FirstName" className="form-label fw-bold p-1 px-2">
            FirstName:
          </label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            placeholder="FirstName"
            aria-label="FirstName"
            value={userInforamation.firstName}
            onChange={(e)=>handleChange(e,'firstName')}
          />
        </div>
        <div className="d-flex py-4">
          <label htmlFor="LastName" className="form-label fw-bold  p-1 px-2">
            LastName:
          </label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            placeholder="LastName"
            aria-label="LastName"
            value={userInforamation.lastName}
            onChange={(e)=>handleChange(e,'lastName')}
          />
        </div>
        <div className="d-flex pb-2">
          <label htmlFor="Email" className="form-label fw-bold p-1 px-2">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Email"
            aria-label="Email"
            value={userInforamation.email}
            onChange={(e)=>handleChange(e,'email')}
          />
        </div>
      </div>

     </div>
  );
};

export default Profile;
