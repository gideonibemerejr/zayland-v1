import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ loading }) => {
  return loading ? (
    <div className='w-100 vh-100 flex justify-center items-center bg-zay white-80'>
      <h1>Zayland</h1>
    </div>
  ) : (
    
    <div className='landingpage--container flex flex-column justify-between items-center'>
      <header className='w-100'>
        <ul className='list mt3 mb0 mh4 pa0 flex flex-row justify-between items-center white-80 f3-ns f4 lh-copy fw7'>
          <li>
            <p className='ma0'>ZAYLAND</p>
          </li>
          <li>
            <Link className='link white-80 hover-blue' to='/home'>
              ENTER WEBSITE
            </Link>
          </li>
        </ul>
      </header>
      <main className='w-100 flex flex-column justify-center items-center'>
        <p className='f3-ns f4  fw7 white-80 ma0'>BLUE (FEAT. DEE GATTI)</p>
        <a
          href='https://www.youtube.com/watch?v=8YCQuLXMNWI'
          rel='noopener noreferrer'
          target='_blank'
        >
          <figure className='pa3 pa4-ns  w-100 center flex-l justify-center-l '>
            <img
              src='https://zayland-assets.s3.amazonaws.com/images/Blue_Final.gif'
              alt=''
              className='w-75-l w-100'
            />
          </figure>
        </a>
      </main>

      <footer className='white-80 fw5 flex items-center w-100 justify-center mb5'>
        ©{new Date().getFullYear()} Zay's Land, LLC
      </footer>
    </div>
  );
};

export default LandingPage;
