import React ,{useContext,useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {contactContext} from '../Context/ContactProvider'

const EditContact = () => {
    const { id } = useParams();
    const {history} = useHistory();
    
    const {contactList,currentContact,updateContact} = useContext(contactContext)
    console.log(currentContact)
    // const datacon = contactList.find(list=>list.id = id)
    const [input,setInput]= useState({
        fullname:currentContact.fullname,
        phone:currentContact.phone,
        email:currentContact.email
    })

    const ChangeHandeler=(e)=>{
        const {name, value} = e.target;
        setInput({
            ...input,[name]:value,
        });
       
    }

       
    const ClickEvent= (e)=>{
        e.preventDefault()
       
        const editContact={
            id : currentContact.id,
            fullname:input.fullname,
            phone:input.phone,
            email:input.email,
            
        }
        updateContact(editContact)
       history.push("/")
    }

    return (
        <div className="container">           
            <form onSubmit={(e)=>ClickEvent(e)}>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" name="fullname"   value={input.fullname}
                    onChange={ChangeHandeler} />                
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" class="form-control" name="phone"   value={input.phone}
                     onChange={ChangeHandeler}/>                
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" name="email"  value={input.email}
                     onChange={ChangeHandeler} aria-describedby="emailHelp" />                
                </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default EditContact
