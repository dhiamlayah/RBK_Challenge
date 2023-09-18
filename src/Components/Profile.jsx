import "../Design/profile.css";
const Profile = () => {
  return (
    <div className="m-2" id="profileData">
      <div className="mt-5">
        <h1>Profile Details :</h1>
        <p>Add your details to create a personnal touch to  your profile</p>
      </div>

      <div className=" mb-3 p-2 rounded-2" style={{ backgroundColor: "#dedede70" }}>
      <label htmlFor="Images" className="fw-bold"> Profile picture: </label>

      </div>
    
      <div className=" mb-3 p-2 rounded-2" style={{ backgroundColor: "#dedede70" }}>
        <div className="d-flex pt-2">
          <label htmlFor="FirstName" className="form-label fw-bold p-1 px-2">
            {" "}
            FirstName:
          </label>
          <input
            type="text"
            class="form-control"
            id="FirstName"
            placeholder="FirstName"
            aria-label="FirstName"
          />
        </div>
        <div className="d-flex py-4">
          <label htmlFor="LastName" className="form-label fw-bold  p-1 px-2">
            {" "}
            LastName:
          </label>
          <input
            type="text"
            class="form-control"
            id="LastName"
            placeholder="LastName"
            aria-label="LastName"
          />
        </div>
        <div className="d-flex pb-2">
          <label htmlFor="Email" className="form-label fw-bold p-1 px-2">
            {" "}
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
