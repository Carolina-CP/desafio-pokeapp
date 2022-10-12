import React from 'react';
import { Card } from 'react-bootstrap';


const Tarjeta = ({detalle}) => {
    return (
        <div className='my-2 justify-content-center text-center'>
     
     {  <Card className='text-center' border="danger" style={{ width:'20rem', margin:'auto' }}>
             
                <Card.Body>
                    <Card.Title>{detalle.name}</Card.Title>
                  
                </Card.Body>
            </Card>}
    
        </div>
    );
}

export default Tarjeta