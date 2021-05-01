import './App.css';
import {useState} from 'react'
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {ContactContext} from './Helper/Context'

function App() {
  const [contactList, setContactList] = useState([])
  return (
    <Router>
      <div className="App">
          <NavBar/>
            <Switch>
              <ContactContext.Provider value={{contactList,setContactList}}>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/add" component={AddContact} />
              </ContactContext.Provider>
            </Switch>        
       </div>
    </Router>
   
  );
}

export default App;
