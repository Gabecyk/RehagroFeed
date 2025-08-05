import React, { useEffect, useState } from 'react'
import './FormProfile.css'

const FormProfile = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')

  useEffect(()=> {
    const data = {
      name: 'Kayky de Moraes Freitas',
      title: 'Developer'
    }

    setName(data.name)
    setTitle(data.title)
  }, [])

  function handleSave() {
    alert('Perfil atualizado')
  }

  return (
    <div className='container'>
        <div className='header'>Editar Perfil</div>
        <div className='form'>
          <p>Nome</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p>Título</p>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <hr/>
        <div className='password'>
          <p>Senha</p>
          <input type='password' placeholder='Nova senha' />
          <input type='password' placeholder='Confirmar senha' />
        </div>
        <button onClick={handleSave}>Salvar</button>
    </div>
    
  )
}

export default FormProfile