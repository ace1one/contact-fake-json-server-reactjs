import React, {useContext} from 'react'

import {ContactContext} from '../Helper/Context'

const Contacts = () => {
    const {contactList} = useContext(ContactContext)
    return (
          <>
               {
                   contactList.map(contact=>{
                       return(
                        <a href="#" class="list-group-item list-group-item-primary">
                        <div class="d-flex w-100 justify-content-between">
                         <h5 class="mb-1">{contact.fullname}</h5>
                         <small> <i class="bi bi-pencil-fill" style={{fontSize:"1.2rem",color:"cornflowerblue",marginRight:"10px"}}
                          ></i>
                         <i class="bi bi-person-x-fill" style={{fontSize:"1.5rem",color:"cornflowerblue"}}
                          ></i></small>
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
