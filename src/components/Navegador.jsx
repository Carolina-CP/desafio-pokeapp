import React from 'react';

//importar css
import '..//assets/navegador.css';

// importar Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';

// importar react-router-dom
import { NavLink, Link} from 'react-router-dom';


const Navegador = () => {

  const setActiveClass = ({ isActive}) => ( isActive ? 'active' : undefined)

  return (
    <Navbar className=" navbar navbar-dark bg-secondary">
      <Container className=" text-white my-lg-3">
        <Navbar.Brand className=" text-white">
          <Link className='nav-link mx-4' to="/">
            <img className='bg-secondary' style={{ width: '150px' }}
            alt='pokemon'
              src='https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo-700x394.png' />
          </Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mx-4">
            <NavLink end className={setActiveClass} style={{ textDecoration: 'none', color: 'white', padding: '10px' }} to="/">Home</NavLink>
            <NavLink className={setActiveClass} style={{ textDecoration: 'none', color: 'white', padding: '10px' }} to="/pokemones">Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
);
}

export default Navegador