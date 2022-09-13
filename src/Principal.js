import React from 'react';

import './css/Principal.css';

import Cabecalho from './componentes/Cabecalho';
import FichaCadastro from './componentes/FichaCadastro';
import Listagem from './componentes/Listagem';

function Principal() {


    return (
        <React.Fragment>            
            <Cabecalho />

            <main>
                <FichaCadastro />
                <Listagem />
            </main>
        </React.Fragment>
    );
}

export default Principal;