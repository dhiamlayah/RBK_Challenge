import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalComponent } from "../App";
const AddLinks = (props) => {
  const navigate = useNavigate()
  const  [platforms,setPlatforms]=useState('')
  const  [link,setLink]=useState('')
  const [error,setError]=useState(null)
  const {setAllLinks ,allLinks} = useContext(globalComponent)

  const handleChangePlatforms=(e)=>{
      setPlatforms(e.target.value)
  }
  const handleChangeLinks = (e)=>{
    setLink(e.target.value)
  }
  const handleErrors = (platform)=>{
    let linkExist = false
    allLinks.map((link)=>{
      if(link.platforms===platform)return linkExist=true
    })
    return linkExist
  }
  const handleClick =()=>{
   const  errorExist = handleErrors(platforms)
    if(errorExist){
      return setError("Platform Already Exist :'( ")
    }
    if(platforms===''){
      return setError("Please choose platform ")
    }
    if(link===''){
      return setError('please put the link')
    }
    setAllLinks(prevAllLinks=>[
      ...prevAllLinks,{
        platforms:platforms,
        link:link
      }
    ])
    redirectUser()

  }
  const handleClose = ()=>{
    props.setOpen(false)
  }
  const redirectUser =()=>{
        props.setOpen(false)
  }
  const backGround = ()=>{
    if(error){return 'bg-danger'}
    return ''
  }
  
   return (
    <div
    className={backGround()}
      style={{
        backgroundColor: "#88dcffa6",
        padding: "1px 20px 1px",
        marginTop: "24px",
        borderRadius: "20px",
      }}
    >                                
      <div className="my-2">
          <p className="text-end z-2" onClick={handleClose}>close</p>   
          {!error && <h5>Link #{props.number}</h5>}
          {error && <h4 className="text-center text-white">{error}</h4>}
        <label htmlFor="inputGroupSelect04" className="form-label">
          Platforms
        </label>
        <div className="input-group ">
          <select
            className="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            value={platforms}
            onChange={handleChangePlatforms}
          >
            <option value="">Choose...</option>        
            <option value='github'> GitHub </option>
            <option value='facebook' >FaceBook</option>
            <option value='youtube'>Youtube</option>
            <option value='linkdin'>Linkdin</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="basic-url" className="form-label">
            link
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              value={link}
              onChange={handleChangeLinks}
            />
          </div>
        </div>
       <button className="btn btn-success mt-2" onClick={handleClick}> Save </button> 
      </div>
    </div>
  );
};

export default AddLinks;
