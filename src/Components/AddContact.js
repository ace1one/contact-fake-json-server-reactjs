import React,{useContext,useState} from 'react'
import {contactContext} from '../Context/ContactProvider'
import { useHistory } from 'react-router'


const AddContact = () => {
    let history = useHistory()
    const {createContact} = useContext(contactContext)
    const [input,setInput]= useState({
        fname:"",
        phone:"",
        email:""
    })
    
    // multiple input handler
    const ChangeHandeler=(e)=>{
        const {name, value} = e.target;
        setInput({
            ...input,[name]:value,
        });
        
    }

    const ClickEvent= (e)=>{
        e.preventDefault()
        const addNew={
            id : Math.floor(Math.random()* 1000),
            fullname:input.fname,
            phone:input.phone,
            email:input.email,

        }
         createContact(addNew)
         history.push("/")
    }

    return (
        <div className="container">           
            <form onSubmit={(e)=>ClickEvent(e)}>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" name="fname"  value={input.fname}
                    onChange={ChangeHandeler} />                
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" class="form-control" name="phone"  value={input.phone}
                     onChange={ChangeHandeler}/>                
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" name="email" value={input.email}
                     onChange={ChangeHandeler} aria-describedby="emailHelp" />                
                </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AddContact
