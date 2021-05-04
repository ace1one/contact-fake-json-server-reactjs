import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container" >
            <nav aria-label="breadcrumb" style={{marginTop:"10px"}}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li class="breadcrumb-item"><NavLink to="/add">Add Contact</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                    <div class="custom-control custom-switch" style={{display:'right'}} >
                    <input type="checkbox" class="custom-control-input" id="customSwitch1"  />
                    <label class="custom-control-label" for="customSwitch1">
                        Dark Mode</label>
                   </div>
                </ol>
                <div>
                    
                </div>
         </nav>
        </div>
    )
}

export default NavBar
