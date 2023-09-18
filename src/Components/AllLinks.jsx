import { globalComponent } from "../App";
import { useContext, useState } from "react";

const AllLinks = () => {
  const { allLinks } = useContext(globalComponent);
  let count = 0;
  return (
    <div >
      {allLinks.length > 0 &&
        allLinks.map((link) => {
          count++;
          return (
            <div key={count} >
              <div
                className="card"
                style={{
                  backgroundColor: "#e9e9e9",
                  padding: "1px 20px 1px",
                  marginTop: "24px",
                  borderRadius: "20px",
                }}
              >
                <div className="card-body">
                <div className="position-absolute top-0 end-0 px-4">
                        <p>x</p>
                 </div>
                  <h5 className="card-title">{link.platforms}</h5>
                  <p className="card-text">
                     {link.link}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllLinks;
