import React from 'react'
import Jumbotron from './Jumbotron/Jumbotron'
import CatSwiper from './CatSwiper';
import Sale from './Sale/Sale';
import CustomerServies from './CustomerServies';

function Categories() {
  return (
    <>
       <Jumbotron/> 

    <CatSwiper/>
    <Sale/>
    <CustomerServies/>
    </>
 
  )
}


export default Categories