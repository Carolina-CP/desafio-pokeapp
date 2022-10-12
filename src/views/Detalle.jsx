import React from 'react';
import { Card } from 'react-bootstrap';
import Tarjeta from '../components/Tarjeta';

//importamos react-router-dom
import { useParams } from 'react-router-dom';

//importamos hooks
import { useState, useEffect } from 'react';


const Detalle = () => {

  // recibo el parámetro desde useNavigate
  const { name } = useParams();


    // definimos un estado para la API 
  const [detalle, setDetalle] = useState({});

  //Función que consulta la API
  const consultarDetalle = async (name) => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${url}/${name}`)
    const unico = await response.json()
    setDetalle(unico);
  }
  console.log('imprimir pokemon seleccionado')
  console.log(detalle)

  //llamamos a la Api al momento de la carga
  useEffect(() => {
    consultarDetalle(name);
  }, [name]);

  return (
    <div className=' container my-5'>
      <div className='row'>

      <p>Card impresa directamente en detalles</p>

      <Card className='my-2 mb-2 text-center' border="primary" style={{ width:'auto', margin:'auto' }}>
            
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>

        <p>Otra solución a través de una tarjeta llamada con props</p>
        <Tarjeta detalle={detalle} />
      </div>
    </div>
  )
}

export default Detalle