import React from 'react';

// importar Bootstrap
import Button from 'react-bootstrap/Button';

//importamos hooks
import { useState, useEffect } from 'react';

//importamos react-router-dom
import { useNavigate } from 'react-router-dom'



const Pokemones = () => {

  // definimos un estado para la API 
  const [data, setData] = useState([]);

  // definimos un estado para el select
  const [seleccionar, setSeleccionar] = useState('');

  //Función que consulta la API
  const consultarInformacion = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url)
    const { results } = await response.json()
    setData(results);
  }
  console.log('imprimir array en consola')
  console.log(data)

  //llamamos a la Api al momento de la carga
  useEffect(() => {
    consultarInformacion();
  }, []);

  //llamamos al hook useNavigate
  const navigate = useNavigate();

  //creamos la función para asociar el useNavigate a la acción del state
 const irAPokemon = () => {
  if (seleccionar) 
    navigate (`/pokemones/${seleccionar}`);
 }

  return (
    <div className='mt-5 text-center'>

      <h2>Selecciona un Pokemón</h2>

      <select
        value={seleccionar}
        onChange={(e) => setSeleccionar(e.target.value)}
      >
        {data.map((d, i) => (
          <option key={i} value={d.name}>{d.name}</option>
        ))}
      </select>
      <div className='m-3'><Button
      onClick={irAPokemon}
      >Detalles</Button> </div>
      
    </div>
  )
}

export default Pokemones