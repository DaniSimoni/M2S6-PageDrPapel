import React from 'react';
import './main.css'

const Main = () => {
    return (
        <>
        
        <section className='container container-produtos'>
            <h1>Produtos</h1>

        <div className='container-fluid icones-produtos'>

            <button className='menu-produto'>
                <img src="./src/images/Imagens_DrPapel/Topos/topocapa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Topo de Bolo</label>
            </button>

            <button className='menu-produto'>
                <img src="./src/images/Imagens_DrPapel/CaixasBrinde/caixas-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Lembrancinhas</label>
            </button>

            <button className='menu-produto'>
                <img src="./src/images/Imagens_DrPapel/Adesivos_Apliques/adesivos-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Adesivos e Apliques</label>
            </button>

            <button className='menu-produto'>
                <img src="./src/images/Imagens_DrPapel/3D/capa3D.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>3D</label>
            </button>

            <button className='menu-produto'>
                <img src="./src/images/Imagens_DrPapel/Mais/mais-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Mais</label>
            </button>

        </div>

        </section>



        <section className='kits'>

                    <h1 className='kits-ttl'>Kits Festas</h1>
        
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

        <h1 className='kits-ttl'></h1>
        </section>

        </>
    )
}
    






export default Main;