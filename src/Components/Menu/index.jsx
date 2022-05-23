import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ toggleMenu }) => {
  return (
    <>
      <div
        className='bg-black fixed h-100 right-0 top-0 bottom-0 left-0 o-90 z-2'
        onClick={toggleMenu}
      >
        <div className='h-100 flex flex-column justify-center items-center mv0 mx-auto z-2 '>
          <ul className='list pa0 ma0 flex flex-column justify-between items-center white-80 f2 f1-ns lh-copy fw7'>
            <li>
              <Link className='link white-80 hover-blue pointer ' to='/'>
                HOME
              </Link>
            </li>
            <li>
              <Link className='link white-80 hover-blue pointer ' to='/credits'>
                CREDITS
              </Link>
            </li>
            <li>
              <a
                className='link white-80 hover-blue pointer'
                href='https://www.youtube.com/watch?v=8YCQuLXMNWI'
                rel='noopener noreferrer'
                target='_blank'
              >
                WATCH
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
