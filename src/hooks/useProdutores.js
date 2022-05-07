import { useState, useEffect } from 'react'

import { carregaProdutores } from '../servicos/carregaDados'

export default function useProdutores() {
  const [titulo, setTitulo] = useState('')
  const [lista, setLista] = useState([]) 
  const retorno = carregaProdutores()

  let newList = retorno.lista

  newList.sort((a, b) => (a.distancia > b.distancia) ? 1 : (b.distancia > a.distancia) ? -1 : 0)
  
  useEffect(() => {
    setTitulo(retorno.titulo)
    setLista(newList)
  }, [])

  return [titulo, lista]
}