import React from 'react';

import './css/Principal.css';

import Cabecalho from './componentes/Cabecalho';
import FichaCadastro from './componentes/FichaCadastro';

function Principal() {


    return (
        <React.Fragment>            
            <Cabecalho />

            <main>
                <FichaCadastro />
            </main>
        </React.Fragment>
    );
}

export default Principal;