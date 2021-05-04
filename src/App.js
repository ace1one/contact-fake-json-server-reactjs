import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import EditContact from './Components/EditContact';
import ContactProvider from './Context/ContactProvider'

function App() {
 
  return (
       <Router>
          <div className="App">
            <div className="Dark">
              <NavBar/>
                <Switch>
                  <ContactProvider>
                    <Route exact path="/" component={ContactList} />
                    <Route exact path="/add" component={AddContact} />
                    <Route exact path="/edit/:id" component={EditContact} />
                  </ContactProvider>
                </Switch>    
                </div>    
          </div>
        </Router>
   
  );
}

export default App;
