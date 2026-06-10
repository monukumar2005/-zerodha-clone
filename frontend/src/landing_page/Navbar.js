import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg border-bottom' style={{ backgroundColor: '#FFF' }}>
      <div className='container p-2'>
        <a className='navbar-brand' href='/'>
          <img src='media/logo.svg' style={{ width: '25%' }} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/about'>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/products'>Products</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/pricing'>Pricing</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/support'>Support</Link>
            </li>
            <li className='nav-item'>
              <Link className='btn btn-primary ms-2 px-3' to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
