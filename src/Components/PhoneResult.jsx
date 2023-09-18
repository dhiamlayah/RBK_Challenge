import {useContext} from 'react'
import { globalComponent } from "../App";

import "../Design/photo.css"
const PhoneResult = () => {

    const { allLinks } = useContext(globalComponent);
    const LinkColor = (link)=>{
                            if(link==='github'){return ' btn m-1 btn-success'}
                            else if (link==='facebook'){ return 'btn m-1 btn-primary'}
                            else if (link==='linkdin'){return ' btn m-1 btn-info'}
                            else if (link==='youtube'){return ' btn m-1 btn-danger'}
                            return 'btn m-1 btn-secondary'
                        }

    return ( 
       <div className="size">
        <div className="background">
            <div  id="photo"> 
             <img src="/images/face.jpg" alt="face" style={{borderRadius:'150px'}}/>
            </div>
            <div id="links">
                <div className="d-grid  pt-5" >
                    {allLinks.map((link)=>{
                        return <button className={LinkColor(link.platforms)}id="buttons" ><a className='fw-bold text-dark text-decoration-none' href={link.link}>{link.platforms}</a></button>
                    })}
                </div>
            </div>
        </div>
      </div>
     );
}
 
export default PhoneResult;