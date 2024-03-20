import React from 'react';
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button';

export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
    <div className='h-20 w-full font-black'>
        <img src={Logo} alt='Burger house App' className='w-64'/> 
    </div>
    <div className='h-20 w-full text-secondary'>
      <div className='flex items-center justify-end'>
        <img src={icone} alt='inco bag click and collect' className='w-7 mr-1'/>
        <span> Commander votre repas en ligne </span>
      </div>
      <div className='mt-3 flex items-center justify-end'>
      <Button className='mr-4 tracking-widest' >
      inscription
      </Button>
      <Button className ='tracking-widest' color='secondary'>
      connexion
      </Button>
      </div>
    </div>
      
    </div>
  );
}
