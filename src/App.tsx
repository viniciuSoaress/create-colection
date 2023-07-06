import { useName } from './hooks'

import S from './App.module.css'
import { Card } from './components'

export function App() {

  const { names, handleName, handleAddColection, name, handleDeleteColection } = useName()



  return (

    <div className={S.conteiner}>

      <p>Crie coleções de suas series, filmes, animes e ate livro. e com imagen.</p>

      <header className={S.header}>

        <input
          type="text"
          placeholder="name colection"
          onChange={handleName}
          value={name}
        />

        <button
          onClick={handleAddColection}
        >
          New Colection
        </button>

      </header>

      <main>
        {names.map(e => (
          <Card key={e.id} name={e.name} id={e.id} onDelete={handleDeleteColection} />
        ))}
      </main>

      <footer>
        <p>apliccation of studes</p>
      </footer>

    </div>

  )
}


