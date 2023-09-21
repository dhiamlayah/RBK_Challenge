import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Profile</a>
           
          <div  id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#">Links</Link>
              </li>
              <li className="nav-item">
              <Link to='/profile' className="nav-link active" aria-current="page" href="#">Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary ">
              <Link className="text-decoration-none text-white" to='/preview'>Preview</Link>
            </button>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;