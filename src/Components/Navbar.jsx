import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink,faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 my-2 ">
        <div className="container-fluid p-2 rounded-2" style={{backgroundColor:'#e9e9e9'}}>
          <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faAddressCard} /></a>
           
          <div  id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active px-2" ><FontAwesomeIcon icon={faLink} />Links</Link>
              </li>
              <li className="nav-item">
              <Link to='/profile' className="nav-link active"  ><FontAwesomeIcon icon={faUser} />Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-secondary ">
              <Link className="text-decoration-none text-white" to='/preview'>Preview</Link>
            </button>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;