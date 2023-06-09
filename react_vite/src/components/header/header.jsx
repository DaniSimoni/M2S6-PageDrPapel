import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div class="header container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
                <div class="container-fluid container-header">
                   
                   <a class="navbar-brand" href="./DrPapel.html">
                    <img class="logo col-sm-12 col-md-8 col-lg-4 index" src="./src/images/logo.png" alt="DrPapel-logo" />
                   </a>
         
                   <section className='logo-txt navbar-collapse '>
                  
                 
                    <img class="logo col-sm-12 col-md-8 col-lg-4 logo-txt navbar-collapse" src="./src/images/DrPapel.png" alt="DrPapel-logo" />
               
                    
                   </section>
    
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Produtos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contato</a>
                            </li>
                           
                        </ul>
    
                    </div>
                </div>
            </nav>
    
        </div>
        )
    }





        
export default Header;