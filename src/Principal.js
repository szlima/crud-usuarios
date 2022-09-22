import React, {useState, useEffect, createContext} from 'react';

import './css/Principal.css';

import Cabecalho from './componentes/Cabecalho';
import FichaCadastro from './componentes/FichaCadastro';
import Listagem from './componentes/Listagem';

export const Contexto= createContext();

function Principal() {

    const [registros, setRegistros]= useState([]);

    const [btnCadastrar, setBtnCadastrar]= useState(true);
    const [indiceRegistro, setIndiceRegistro]= useState('');

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
        
        setIndiceRegistro('');
        setBtnCadastrar(true);
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

    const selecionar= indice => {

        setIndiceRegistro(indice);
        const usuario= registros[indice];
    
        setUsuario(usuario.username);
        setNome(usuario.name);
        setEmail(usuario.email);
        setRua(usuario.address.street);
        setNumero(usuario.address.suite);
        setCidade(usuario.address.city);
        setCep(usuario.address.zipcode);
        setTelefone(usuario.phone);
        setEmpresa(usuario.company.name);
    
        setBtnCadastrar(false);
    };

    const editar= () => {

        const atualizacao= {
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
    
        let copiaRegistros= [...registros];
        copiaRegistros.splice(indiceRegistro, 1, atualizacao);
        setRegistros(copiaRegistros);
    
        recomecar();
    };

    const excluir= () => {

        let copiaRegistros= [...registros];
        copiaRegistros.splice(indiceRegistro, 1);
        setRegistros(copiaRegistros);
    
        recomecar();
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <Contexto.Provider value={{selecionar}}>          
            <Cabecalho />

            <main>
                <FichaCadastro cadastrar={cadastrar} btnCadastrar={btnCadastrar}
                    editar={editar} excluir={excluir} cancelar={recomecar} 
                    setUsuario={setUsuario} setNome={setNome} setEmail={setEmail} 
                    setRua={setRua} setNumero={setNumero} setCidade={setCidade}
                    setCep={setCep} setTelefone={setTelefone} setEmpresa={setEmpresa}
                    usuario={usuario} nome={nome} email={email} rua={rua}
                    numero={numero} cidade={cidade} cep={cep} 
                    telefone={telefone} empresa={empresa}
                />
                <Listagem registros={registros} />
            </main>
        </Contexto.Provider>
    );
}

export default Principal;