import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Svg from '../Svg';
import { firstSvg, secondSvg } from './svgValues';

function Navbar() {
  const [svgVal, setSvgVal] = useState(firstSvg);

  const troco = () => {
    setSvgVal(svgVal === firstSvg ? secondSvg : firstSvg);
  };

  return (
    <>
      <div id='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg '>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <a className='navbar-brand playground' href='index.html'>
                <h3>Playground Kukac</h3>
              </a>
            </Link>
            <button
              onClick={troco}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <Svg svgVal={svgVal} />
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='#about'
                    >
                      Palíndromo
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/purchase' style={{ textDecoration: 'none' }}>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='#technologies'
                    >
                      Compras
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/vehicles' style={{ textDecoration: 'none' }}>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='#projects'
                    >
                      Veículos
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/ceps' style={{ textDecoration: 'none' }}>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='#contact'
                    >
                      CEP's
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
