import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import DataStorageContext from './context/DataStorageContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {regStatus: false, username: '', selectedTopic: ''}

  updateRegistrationStatus = (name, topic) => {
    this.setState(prevState => ({
      regStatus: !prevState.regStatus,
      username: name,
      selectedTopic: topic,
    }))
  }

  render() {
    const {regStatus, username, selectedTopic} = this.state
    return (
      <DataStorageContext.Provider
        value={{
          regStatus,
          updateRegistrationStatus: this.updateRegistrationStatus,
          username,
          selectedTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DataStorageContext.Provider>
    )
  }
}

export default App
