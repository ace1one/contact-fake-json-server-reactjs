import {createContext, useReducer} from 'react'
import axios from 'axios'
import {
        CREATE_CONTACT,
        GET_CONTACT,
        UPDATE_CONTACT,
        DELETE_CONTACT,
        SET_CONTACT,
        LOAD_CONTACT
       } from './Constant'

// Setting up global state
export const contactContext = createContext();

// Reducer function
const contactReducer= (state,action)=>{
    switch(action.type){
        case GET_CONTACT:
            return{
             ...state,
             contactList : action.payload
            };
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
         contactList :[],
         currentContact: null,
     };

//seting up reducer, it takes  reducer function and initialstate
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

     //fetching data from server and updating in contactlist 
    const  getContact = async ()=> {
       try {
           const res = await axios.get("http://localhost:3001/contactList");       
           dispatch({
            type : GET_CONTACT,
            payload: res.data
           
        });
       
       } catch (error) {
           console.log("ERROR")
       }
      
        

    }


    //sending data from global context to children components
     return(
         <contactContext.Provider value={{
            contactList : state.contactList,
             currentContact: state.currentContact,
             createContact,
             deleteContact,setContact, updateContact,getContact
           
         }}>
             {props.children}
         </contactContext.Provider>
     )
};

export default ContactProvider;