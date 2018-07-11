import React from 'react';
import './Carousel.css';

var Carousel = require('react-responsive-carousel').Carousel;

export default () => (
           <Carousel autoPlay>
               <div>
                   <img src="https://g.petango.com/photos/2241/47d352de-1bfd-4402-bf91-8afc2cb7a780.jpg" />
                   <p className="legend">Bert available at the MaxFund Dog Shelter</p>
               </div>
               <div>
                   <img src="https://static.wixstatic.com/media/3d04fa_2cad710d0d9944769741b577c7b998cc~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1343,h_895,al_c,q_85,usm_0.66_1.00_0.01/3d04fa_2cad710d0d9944769741b577c7b998cc~mv2_d_3600_2400_s_4_2.webp" />
                   <p className="legend">Nina available at My Fairy Dawg Mother</p>
               </div>
               <div>
                   <img src="http://petharbor.com/get_image.asp?RES=Detail&ID=A0782899&LOCATION=DDFL" />
                   <p className="legend">Kiki available at Dumb Friends League</p>
               </div>
               <div>
                   <img src="https://static.wixstatic.com/media/3d04fa_7f7de4c34727400cb1a1e44fac1beb2d~mv2.jpg/v1/fill/w_762,h_507,al_c,lg_1,q_85/3d04fa_7f7de4c34727400cb1a1e44fac1beb2d~mv2.webp" />
                   <p className="legend">Tina available at My Fairy Dawg Mother</p>
               </div>
               <div>
                   <img src="http://petharbor.com/get_image.asp?RES=Detail&ID=A0533848&LOCATION=DDFL" />
                   <p className="legend">Link available at Dumb Friends League</p>
               </div>
               <div>
                   <img src="https://g.petango.com/photos/2241/ea909bbf-b389-4926-b4c4-613664b9aeff.jpg" />
                   <p className="legend">Ollie available at MaxFund Dog Shelter</p>
               </div>
           </Carousel>
       );
