import React, {useState} from 'react';

import '../css/Listagem.css';

import Registro from './Registro';

function Listagem({registros}){

    const [termo, setTermo]= useState('');

    return (
        registros.length > 0 ? 
        
        (<div className='listagem'>
            <p className='bg-primary text-light'>{registros.length} usuários cadastrados.</p>
            <input type='text' placeholder='Buscar usuário...' className='form-control pesquisa bg-dark text-light' onChange={e => setTermo(e.target.value)}/>
                
            <ul className='registros'>
                {registros.filter(objeto => objeto.name.includes(termo)).map((usuario, indice) => 
                    (<li key={indice}>
                        <Registro usuario={usuario} indice={indice} />
                    </li>)
                )}  
            </ul>    
        </div>) 
        :
        <div className='listagem'>
            <p className='bg-light text-dark'>Não há usuários cadastrados</p>
        </div>
    );
}

export default Listagem;