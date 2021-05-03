import React from 'react'
import Contacts from './Contacts'


const ContactList = () => {
    return (
        <div className="container">
            <h1>Contact List</h1>
            <div class="list-group">
               <Contacts/>
            </div>
        </div>
    )
}

export default ContactList
