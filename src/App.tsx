import { useName } from './hooks'

import S from './App.module.css'
import { Card } from './components'

export function App() {

  const {
    names,
    handleDeleteColection,
    errors,
    formSubmit, handleSubmit, register,
  } = useName()



  return (

    <div className={S.mainConteiner}>

      <div className={S.conteiner}>

        <h2 className={S.title}>Crie Suas Coleções</h2>

        <header className={S.header}>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className={S.form}
          >


            <input
              className={S.input}
              type="text"
              placeholder="name colection"
              {...register('name')}
            />

            <button
              className={S.button}
              type='submit'
            >
              New Colection
            </button>

            {errors.name?.message ? <p className={S.error}>{errors.name?.message}</p> : ''}
          </form>
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


