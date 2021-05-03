import {createContext, useReducer} from 'react'
import {
        CREATE_CONTACT,
        GET_CONTACT,
        UPDATE_CONTACT,
        DELETE_CONTACT,
        SET_CONTACT,
        LOAD_CONTACT
       } from './Constant'

export const contactContext = createContext();

// Reducer
const contactReducer= (state,action)=>{
    switch(action.type){
        case CREATE_CONTACT:
           return{
             ...state,
             contactList:[action.payload, ...state.contactList]
           };
        case DELETE_CONTACT:
            return{
                ...state,
                contactList: state.contactList.filter(contacts=>contacts.id !== action.payload)
            };
        case SET_CONTACT:
            return{
                ...state,
                currentContact:action.payload
            }
        case UPDATE_CONTACT:
            return{
                ...state,
                contactList: state.contactList.map(
                    (list)=>list.id=== action.payload.id ? action.payload : list )
            }
        
        default: 
           return state
    };
};

const ContactProvider = props =>{
     const InitialState={
         contactList :[
             {
                id : 1,
                fullname :"ashim",
                phone : "9847542548",
                email : "acim@gmail.com"

             }
         ],
         currentContact: null
     };

     const [state,dispatch]= useReducer(contactReducer,InitialState);

  //Actions
     const createContact= contact =>{
         dispatch({
             type: CREATE_CONTACT,
             payload: contact
         })
     };

     const deleteContact = id =>{
         dispatch({
             type: DELETE_CONTACT,
             payload: id
         })
     };

     const setContact = contact =>{
         dispatch({
             type: SET_CONTACT,
             payload:contact
         })
     }

     const updateContact = contact =>{
         dispatch({
             type : UPDATE_CONTACT,
             payload: contact
         })
     }

     return(
         <contactContext.Provider value={{
            contactList : state.contactList,
             currentContact: state.currentContact,
             createContact,
             deleteContact,setContact, updateContact
         }}>
             {props.children}
         </contactContext.Provider>
     )
};

export default ContactProvider;