import React, { useState } from 'react'
import WorkBar from './WorkBar'

function Search() {
    const [descp,setDescp]=useState("")
    const [list,setlist] = useState([])
    function addToList(e) {
        if(descp.trim()==="") return;
        setlist([...list,descp])
        setDescp("")
    };
  return (
    <>
    <div  className="d-flex my-3">
        <input className="form-control me-2" value={descp} type="text" onChange={(e)=>{setDescp(e.target.value)}} placeholder="Type..." aria-label="Add" />
        <button className="btn btn-outline-success" onClick={addToList} >Add</button>
    </div>
    {list.map((item,index)=>{
        return <WorkBar key={index} description={item} />
    })}
    </>
  )
}

export default Search
