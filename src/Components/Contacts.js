import React, {useContext} from 'react'
import { contactContext } from "../Context/ContactProvider";
import {NavLink} from 'react-router-dom'

const Contacts = () => {
    const {contactList,deleteContact,setContact} = useContext(contactContext)

    // const DeleteContact=(id)=>{
    //     const contactdelete = contactList.filter(list=>list.id !== id)
    //     setContactList(contactdelete)
    // }
    return (
          <>
               {
                   contactList.map(contact=>{
                       return(
                        <a key={contact.id} class="list-group-item list-group-item-primary">
                        <div class="d-flex w-100 justify-content-between">
                         <h5 class="mb-1">{contact.fullname}</h5>
                         <small> <NavLink class="bi bi-pencil-fill" style={{fontSize:"1.2rem",color:"cornflowerblue",marginRight:"10px"}}
                          to={`edit/${contact.id}`}  onClick={()=>setContact(contact)} ></NavLink>
                         <NavLink to="#" class="bi bi-person-x-fill" style={{fontSize:"1.5rem",color:"cornflowerblue"}}
                         onClick={()=>deleteContact(contact.id)}
                          ></NavLink></small>
                        </div>
                        <p class="mb-1">{contact.email}  <span class="badge badge-success">{contact.phone}</span></p>
                     </a> 
                       )
                   })
               }
           </>   
           
    )
}

export default Contacts
