import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/Container';
import Header from './Header';
import Burger from '../../../medias/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button';


export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
        <div className="bg-repeat w-full h-full pb-40" style={{backgroundImage:`url(${Illustration})`}}> 
        <Container>
            <Header />
            <div className="relative mt-28 z-0 relaw-full">
              <img src={Burger} className="absolute -top-64 right-0 w-6/12" alt=" Un menu hamberger avec frites et coca cola."/>  


              <div className="absolute z-5 right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3">
                <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center">
                  <div className="text-center">
                    <span className="block font-extrabold">
                      <span className="text-6xl">5</span>.49€
                    </span>
                    <span className="text-sm uppercase tracking-widest">seulement </span>
                  </div>

                </div>

              </div>


              <div className="relative z-10 w-full text-secondary uppercase">
                <h1 className="mb-4 font-semibold">C'est le moment de goûter au bon goût des hamburgers</h1>
                <h2 className="font-secondary shadowTitileSecondary">
                  <span className="text-8xl block">Burger</span>
                  <span className="text-6xl">House</span> 
                  <span className="text-4xl ml-3">Click <span className="text-red-primary">&</span>collect</span>
                </h2>
              </div>
            </div>
            <Button className="mt-5" color="secondary" theme="big">
              Créer un compte
            </Button>
        </Container>
        </div>
      
    </div>
  );
}
