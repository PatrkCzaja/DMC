import React, { Component, useRef } from 'react';
import picture from '../image2.jpg';
import image from '../logistics-3125131_1920.png'
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"
import { MdOutlinePriceCheck } from 'react-icons/md';
import Collapse1 from '../Collapse1';
import Collapse2 from '../Collapse2';
import Collapse3 from '../Collapse3';
import Collapse4 from '../Collapse4';
import Collapse5 from '../Collapse5';

  


 function Offer() {
    
    
    return (
        <div className="offer">
            <div className='sidebar'>
                <img src={picture} />
            </div>

            <div className="head-offer">
                <h1> Oferta </h1> <br/>
                <div className='about-offer'>
                <p className='head-offer-text'>
                    Dbając o potrzeby naszych klientów oferujemy obsługę 
                    całego procesu logistycznego od A do Z. Nasi pracownicy są
                    do Państwa dyspozycji 24h. W trosce o najlepszą wspólpracę do każdego klienta przypisujemy
                    dedykowanego przedstawiciela.
                    <div className='path-to-pricing'>
                        <button>
                        <div className='icon-price'> 
                        <CustomLink to="/pricing"> 
                            < MdOutlinePriceCheck />  
                            Przejdź do wyceny! 
                        </CustomLink> 
                        </div>
                       
                        </button>
                    </div>
                </p>
              
                <img src={image} height={300} width={500}  />
                </div>

            </div>

            <div className='body'>
                
                    <h2 className='head'> W naszej ofercie :  </h2>
                
            <div className='main-offer'>
                
                    
                        <br/>
                            <div className='item'>
                            <h2 className='item-header' > Transport krajowy drobnicowy ( LTL, PTL )  </h2> 
                               <div className='collapse'>
                               <Collapse1 />
                               </div>
                            </div>
                            <div className='item'>
                            <h2 className='item-header'>  Transport krajowy całopojazdowy ( FTL ) </h2>
                                <div className='collapse'>
                               <Collapse2 />
                               </div>
                             </div>

                            <div className='item'>
                            <h2 className='item-header'>  Transport międzynarodowy drobnicowy </h2>
                                <div className='collapse'>
                               <Collapse3 />
                               </div>    
                            </div>
                            <div className='item'>
                            <h2 className='item-header'>  Transport międzynarodowy całopojazdowy ( FTL )</h2>
                                <div className='collapse'>
                               <Collapse4 />
                               </div>    
                            </div>
                            <div className='item'> 
                            <h2 className='item-header'>   Ekspresowy transport ładunków przy użyciu aut o DMC 3,5T </h2>
                                <div className='collapse'>
                               <Collapse5 />
                               </div>    
                            </div>
                </div>
                    
                
            </div>

        </div>
    )

    
}




function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}



export default Offer;