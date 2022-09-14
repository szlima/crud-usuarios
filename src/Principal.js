import React, {useState, useEffect} from 'react';

import './css/Principal.css';

import Cabecalho from './componentes/Cabecalho';
import FichaCadastro from './componentes/FichaCadastro';
import Listagem from './componentes/Listagem';

function Principal() {

    const [registros, setRegistros]= useState([]);

    const carregarDados= async () => {

        const dados= await fetch('https://jsonplaceholder.typicode.com/users');
        const vetorDados= await dados.json();
    
        setRegistros(vetorDados);
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <React.Fragment>            
            <Cabecalho />

            <main>
                <FichaCadastro />
                <Listagem registros={registros} />
            </main>
        </React.Fragment>
    );
}

export default Principal;