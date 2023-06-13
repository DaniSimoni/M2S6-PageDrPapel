import React from 'react';
import './header.css';

const Header = () => {
    return (
        
        <div class="header container">
               
                   
                <img class="logo justify-content-center " src="./src/images/Logook.png" alt="DrPapel-logo" />
                

            <nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
    
    
            <div class="navbar row " id="navbarSupportedContent">
                        <ul class="navbar-nav justify-content-center" >
                            <li class="nav-item col-5">
                                <a class="nav-link" aria-current="page" href="#">Sobre</a>
                            </li>
                            <li class="nav-item col-5">
                                <a class="nav-link" href="#">Contato</a>
                            </li>
                           
                        </ul>
    
                    </div>
        
            </nav>
    
        </div>
        )
    }





        
export default Header;