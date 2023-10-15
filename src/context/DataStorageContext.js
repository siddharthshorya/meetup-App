import React from 'react'

const DataStorageContext = React.createContext({
  regStatus: false,
  updateRegistration: () => {},
  username: '',
  selectedTopic: '',
})

export default DataStorageContext
