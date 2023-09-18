import { useEffect, useState } from "react";
import AddLinks from "./AddLinks";

const CreatLinks = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(true);
  };

  return (
    <div className="mt-5">
      <h1>Customize your links</h1>
      <p>
        Add/Edit/Remove links and then share all your profiles with the world
      </p>
      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-outline-danger "
          style={{ border: "1px solid #a009e4", color: "#a009e4" }}
          onClick={handleclick}
        >
          + Add New Link
        </button>
      </div>
      <div>{open && <AddLinks  setOpen={setOpen} />}</div>
    </div>
  );
};

export default CreatLinks;
