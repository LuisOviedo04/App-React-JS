import React from "react";

import './styles/style2.css';
import ReactDOM from 'react-dom';
import Home from './Home';
import Ambiente from './Ambiente';
import Artritis from './Artritis';
import Sida from './Sida';
import Cancer from './Cancer';

import pata from '../imagenes/corazon.png';
import imagen01 from '../imagenes/ambiente.png';
import imagen02 from '../imagenes/sida.svg';
import imagen03 from '../imagenes/artritis.png';
import imagen04 from '../imagenes/mama.png';
import fb from '../imagenes/facebook.png';
import tw from '../imagenes/twitter.png';
import tg from '../imagenes/telegram.png';


class Fundaciones extends React.Component {
    inicio (e) {
        ReactDOM.render(<Home />, document.getElementById('root'));
    };
    rk (e) {
        ReactDOM.render(<Ambiente />, document.getElementById('root'));
    };
    pk (e) {
        ReactDOM.render(<Artritis />, document.getElementById('root'));
    };
    pko (e) {
        ReactDOM.render(<Sida />, document.getElementById('root'));
    };
    qns (e) {
        ReactDOM.render(<Cancer />, document.getElementById('root'));
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
                            <h1 className="segundo">Donar a...</h1>
                        </div>

                        <div className="logo">
                            <button onClick={this.inicio} type="Submit"><img className="patita" src={pata} alt="pata"/></button>
                        </div>

                    </div>

                    <div className="centro2">

                        <div className="centrado">

                            <div className="cincuenta">
                                <div className="cuadro1">
                                    <img className="imagen1" src={imagen01} alt="" />
                                    <button className="nombre" onClick={this.rk} >Ambiente</button>
                                </div>
                
                                <div className="cuadro2">
                                    <img className="imagen2" src={imagen02} alt="" />
                                    <button className="nombre" onClick={this.pko}>Sida</button>
                                </div>
                            </div>

                            <div className="cincuenta">
                                <div className="cuadro3">
                                    <img className="imagen3" src={imagen03} alt="" />
                                    <button className="nombre" onClick={this.pk}>Artritis</button>
                                </div>

                                <div className="cuadro4">
                                    <img className="imagen4" src={imagen04} alt="" />
                                    <button className="nombre" onClick={this.qns} >Cancer</button>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="final">
                        <a href="google.com"><img className="facebook" src={fb} alt="" /></a>
                        <a href="google.com"><img className="twitter" src={tw} alt="" /></a>
                        <a href="google.com"><img className="telegram" src={tg} alt="" /></a>
                    </div>

                    
                </div>

            </body>
        );
    }
}

export default Fundaciones;
