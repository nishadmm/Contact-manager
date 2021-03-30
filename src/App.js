import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AddForm from './components/AddForm'
import EditContact from './components/EditContact'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import Test from './components/Test'
import { Provider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact/add/' component={AddForm} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
