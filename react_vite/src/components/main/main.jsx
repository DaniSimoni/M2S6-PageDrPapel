import React from 'react';
import './main.css'

const Main = () => {
    return (

        <section className='kits'>
                    <h1>Kits</h1>
        
        <div className='container container-main '>

    
            
            <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="./src/images/2.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="./src/images/kit...jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>

            <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="./src/images/1.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="./src/images/kit....jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>

            <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="./src/images/3.jpg" className="img-thumbnail" alt="..."></img>
                </div>

                <div className='flip-card-back'>
                <img src="./src/images/kit.jpg" className="img-thumbnail" alt="..."></img>
                </div>
            </div>
            </div>

        </div>


        </section>
    )
}
    






export default Main;