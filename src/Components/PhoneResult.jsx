import "../Design/photo.css"
const PhoneResult = () => {
    return ( 
       <div className="size">
        <div className="background">
            <div  id="photo"> 
             <img src="/images/face.jpg" alt="face" style={{borderRadius:'150px'}}/>
            </div>
            <div id="links">
                <div className="d-block pt-5">
                    <button className="btn btn-danger px-5" id="buttons">github</button>
                </div>
            </div>
        </div>
      </div>
     );
}
 
export default PhoneResult;