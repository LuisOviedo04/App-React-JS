import React from "react";

import './styles/style.css';
import ReactDOM from 'react-dom';
import Fundaciones from './Fundaciones';



class Home extends React.Component {
    handleClick (e) {
        ReactDOM.render(<Fundaciones />, document.getElementById('root'));
    }

    render(){
        return(
            <body>
                <div className="contenedor">

                    <div className="superior">
                        <div className="importante">
                            
                            <h1 className="primero" >DonaApp</h1>
                            
                        
                        </div>

                        <hr className="linea" />

                    </div>

                    <div className="inferior">

                        <div className="descripcion">
                            <p className="parrafo">Tu donación hará a alguien feliz. Hacer el bien nos hace bien</p>
                        </div>

                        <button className="boton" type="Submit"  onClick={ this.handleClick}>Ir a Donar</button>

                    </div>

                </div>

            </body>
        );
    }
}

export default Home;
