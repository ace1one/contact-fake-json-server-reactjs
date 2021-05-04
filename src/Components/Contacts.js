import React, {useContext, useEffect} from 'react'
import { contactContext } from "../Context/ContactProvider";
import {NavLink} from 'react-router-dom'
import Avatar from 'react-avatar'

const Contacts = () => {
    const { contactList,deleteContact,setContact,getContact} = useContext(contactContext)

    // const DeleteContact=(id)=>{
    //     const contactdelete = contactList.filter(list=>list.id !== id)
    //     setContactList(contactdelete)
    // }
    
  useEffect(()=>{
    getContact()
   
   
  },[])

    return (
          <>
               {
                    contactList.map((contact)=>{
                       return (
                         <li class="list-group-item d-flex justify-content-between align-items-center">
                           <Avatar
                             name={contact.fullname}
                             size="50"
                             round={true}
                           />
                           <div class="media-body ml-2">
                             <h5 class="mt-0 mb-1">{contact.fullname}</h5>
                             <p class="mb-1 d-block">
                               {contact.email}{" "}
                               <span class="badge badge-success">
                                 {contact.phone}
                               </span>
                             </p>
                           </div>
                           <small>
                             {" "}
                             <NavLink
                               class="bi bi-pencil-fill"
                               style={{
                                 fontSize: "1.2rem",
                                 color: "cornflowerblue",
                                 marginRight: "10px",
                               }}
                               to={`edit/${contact.id}`}
                               onClick={() => setContact(contact)}
                             ></NavLink>
                             <NavLink
                               to="#"
                               class="bi bi-person-x-fill"
                               style={{
                                 fontSize: "1.5rem",
                                 color: "cornflowerblue",
                               }}
                               onClick={() => deleteContact(contact.id)}
                             ></NavLink>
                           </small>
                         </li>
                       );
                   })
               }
               
           </>   
           
    )
}

export default Contacts
