import { useName } from './hooks'

import S from './App.module.css'
import { Card } from './components'

export function App() {

  const {
    names,
    handleName,
    handleAddColection,
    name,
    handleDeleteColection
  } = useName()



  return (

    <div className={S.conteiner}>

      <p>
        Adicionen seus filmes, animes, series, livros ou sues personagens favoritos
      </p>

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
          <Card
            key={e.id}
            names={e.name}
            id={e.id}
            onDelete={handleDeleteColection}
          />
        ))}
      </main>

      <footer>
        <p>Application of studies</p>
      </footer>

    </div>

  )
}


