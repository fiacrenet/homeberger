import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/Container';
import Header from './Header';
import Burger from '../../../medias/images/heroTop/burger-hero-top.png'


export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
        <div className='bg-repeat w-full h-full' style={{backgroundImage:`url(${Illustration})`}}> 
        <Container>
            <Header />
            <div className='flex items-center w-full'>
              <div className='w-full text-secondary uppercase text-xl'>
                <h1 className='mb-7'>C'est le moment de goûter au bon goût des hamburgers</h1>
                <h2 className='font-secondary'>
                  <span className='text-8xl block'>Burger</span>
                  <span className='text-6xl'>House</span> 
                  <span className='text-4xl ml-5'>Click&collect</span>
                </h2>
              </div>
              <div className='w-full'>
               <img src={Burger} alt=" Un menu hamberger avec frites et coca cola."/>
              </div>
            </div>
        </Container>
        </div>
      
    </div>
  );
}
