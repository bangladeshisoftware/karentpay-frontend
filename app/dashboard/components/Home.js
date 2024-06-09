import React from 'react';
import Test from './home/Test';
import Production from './home/Production';

function Home({isTest}) {
  return (
    <>
    { isTest?<Test/>:<Production/> }
    </>
  );
}

export default Home;



