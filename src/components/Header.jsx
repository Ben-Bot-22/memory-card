import React from 'react';
import Pokeball from './Pokeball';

function Header() {
  return (
    <div className="top-0 m-2 flex h-10 w-screen flex-col content-center justify-center text-center">
      <h1 className="text-3xl font-bold tracking-wider text-white">
        {' '}
        <Pokeball /> Pokemon Memory Cards <Pokeball />
      </h1>
    </div>
  );
}

export default Header;
