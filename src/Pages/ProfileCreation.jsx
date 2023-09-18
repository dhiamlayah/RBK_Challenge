import { Outlet } from "react-router-dom";
import PhoneResult from "../Components/PhoneResult";
import "../Design/ProfileCreation.css";
const ProfileCreation = () => {
  return (
    <div className="Profile">
      <PhoneResult />
      <Outlet/> 
    </div>
  );
};

export default ProfileCreation;
