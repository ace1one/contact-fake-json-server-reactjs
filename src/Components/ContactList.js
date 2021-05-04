import React from 'react'
import Contacts from './Contacts'


const ContactList = () => {
    return (
        <div className="container">
            <h1>Contact List</h1>
            <ul class="list-group col-sm-6">
               <Contacts/>
           </ul>
        </div>
    )
}

export default ContactList
