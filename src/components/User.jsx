import React from 'react'
//como consumir estados aqui ? com o useSelector
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
const User = () => {

  const {name} = useSelector(selectUser) //esse state é todos os reducers que tem na store
  

  return (
    <h1>Usuario: {name}</h1>
  )
}

export default User