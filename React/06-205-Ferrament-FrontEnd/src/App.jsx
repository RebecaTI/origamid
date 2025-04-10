import React from 'react'
import Produto from './Produto.jsx'
import UserContext from './UserContext.jsx'

const App = () => {
  console.log(UserContext)
  return (
    <UserContext.Provider value={{ nome: "Rebeca" }}>
      <Produto />
    </UserContext.Provider>
  )
}

export default App
// Origamid 0305 UseContext1 05:56