import React from 'react';
import Pokeball from './Pokeball';

const Header = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center top-0 w-screen h-10 text-xl tracking-wider m-2">
      <h1 className="text-white font-bold">
        {' '}
        <Pokeball /> Pokemon Memory Cards <Pokeball />
      </h1>
    </div>
  );
};

export default Header;
