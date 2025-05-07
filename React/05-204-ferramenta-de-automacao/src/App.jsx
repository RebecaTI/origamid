import React from 'react'
import Produto from './Produto.jsx'
import { GlobalStorage } from "./GlobalContext"

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>

  )
}

export default App;
