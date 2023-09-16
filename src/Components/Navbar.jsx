const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> LOGO</a>
           
          <div  id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="">Preview</a>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;