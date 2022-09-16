import React, {useState, useEffect} from 'react';

import './css/Principal.css';

import Cabecalho from './componentes/Cabecalho';
import FichaCadastro from './componentes/FichaCadastro';
import Listagem from './componentes/Listagem';

function Principal() {

    const [registros, setRegistros]= useState([]);

    const [usuario, setUsuario]= useState('');
    const [nome, setNome]= useState('');
    const [email, setEmail]= useState('');
    const [rua, setRua]= useState('');
    const [numero, setNumero]= useState('');
    const [cidade, setCidade]= useState('');
    const [cep, setCep]= useState('');
    const [telefone, setTelefone]= useState('');
    const [empresa, setEmpresa]= useState('');

    const carregarDados= async () => {

        const dados= await fetch('https://jsonplaceholder.typicode.com/users');
        const vetorDados= await dados.json();
    
        setRegistros(vetorDados);
    };

    const recomecar= () => {

        setUsuario('');
        setNome('');
        setEmail('');
        setRua('');
        setNumero('');
        setCidade('');
        setCep('');
        setTelefone('');
        setEmpresa('');     
    };

    const cadastrar= () => {

        const novo={
            'username': usuario,
            'name': nome,
            'email': email,
            'address': {
                'street': rua,
                'suite': numero,
                'city': cidade,
                'zipcode': cep
            },
            'phone': telefone,
            'company': {
                'name': empresa
            }    
        };
    
        setRegistros([novo, ...registros]);
        recomecar();   
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <React.Fragment>            
            <Cabecalho />

            <main>
                <FichaCadastro cadastrar={cadastrar}
                    setUsuario={setUsuario} setNome={setNome} setEmail={setEmail} 
                    setRua={setRua} setNumero={setNumero} setCidade={setCidade}
                    setCep={setCep} setTelefone={setTelefone} setEmpresa={setEmpresa}
                    usuario={usuario} nome={nome} email={email} rua={rua}
                    numero={numero} cidade={cidade} cep={cep} 
                    telefone={telefone} empresa={empresa}
                />
                <Listagem registros={registros} />
            </main>
        </React.Fragment>
    );
}

export default Principal;