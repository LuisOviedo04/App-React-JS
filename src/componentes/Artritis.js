import React from "react";

import './styles/style3.css';
import ReactDOM from 'react-dom';
import Home from './Home';
import Fundaciones from './Fundaciones';

import pata from '../imagenes/corazon.png';
import fb from '../imagenes/facebook.png';
import tw from '../imagenes/twitter.png';
import tg from '../imagenes/telegram.png';


class Artritis extends React.Component {
    inicio (e) {
        ReactDOM.render(<Home />, document.getElementById('root'));
    };
    vista (e){
        ReactDOM.render(<Fundaciones />, document.getElementById('root'));
    }
    render(){
        return(
            <body>
                <div className="contenedor2">
                    <div className="barra">

                        <div className="menus">
                            <nav>
                                <ul>
                                    <li><a href="google.com">+</a><ul>
                                        <li><a href="google.com">Otras</a></li>
                                        <li><a href="google.com">Ayuda</a></li>
                                        <li><a href="google.com">Quienes somos</a></li>
                                    </ul></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="titulo">
                            <h1 className="segundo">Información</h1>
                        </div>

                        <div className="logo">
                            <button onClick={this.inicio} type="Submit"><img className="patita" src={pata} alt="pata"/></button>
                        </div>

                    </div>

                    <div className="centro3">
                        <div className="superior3">
                            <h2 className="tercero" >Artritis</h2>
                        </div>

                        <div className="inferior3">
                            <p className="random">Suspendisse vitae pretium sem. Donec tristique cursus velit in gravida. Nullam efficitur ipsum id nulla tincidunt cursus. Suspendisse nulla nisi, porttitor ut libero non, tempor interdum lorem. Curabitur quis semper leo</p>
                        
                            <a className="boton2" href="google.com">Quiero Donar</a>
                            <div className="separar">
                                <button className="volver2" onClick={this.vista} type="Submit">Inicio</button>
                            </div>
                            
                        </div>

                        <div className="final">
                            <a href="google.com"><img className="facebook2" src={fb} alt="" /></a>
                            <a href="google.com"><img className="twitter2" src={tw} alt="" /></a>
                            <a href="google.com"><img className="telegram2" src={tg} alt="" /></a>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Artritis;