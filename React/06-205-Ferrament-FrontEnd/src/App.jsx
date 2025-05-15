import React from 'react'

const App = () => {
  const [nome, setNome] = React.useState('');
  return (
    <form>
      <label hmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)} />
      {nome}
    </form>
  )
}

export default App
