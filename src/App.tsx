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

    <div className={S.mainConteiner}>

      <div className={S.conteiner}>

        <h2 className={S.title}>Crie Suas Coleções</h2>

        <header className={S.header}>

          <input
            className={S.input}
            type="text"
            placeholder="name colection"
            onChange={handleName}
            value={name}
          />

          <button
            onClick={handleAddColection}
            className={S.button}
          >
            New Colection
          </button>

        </header>

        <main className={S.main}>
          {names.map(e => (
            <Card
              key={e.id}
              names={e.name}
              id={e.id}
              onDelete={handleDeleteColection}
            />
          ))}
        </main>

        
      </div>

    </div>



  )
}


