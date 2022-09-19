import React, {useContext} from 'react';

import '../css/Registro.css';

import {Contexto} from '../Principal';

function Registro({usuario, indice}){

    const {selecionar}= useContext(Contexto);

    return(
        <div className='registro' onClick={() => selecionar(indice)}>
            <p className='username'>@{usuario.username}</p>
            <p><span>{usuario.name}</span>-<span>{usuario.email}</span></p>
        
            <p><span>{usuario.address.street}</span>, <span>{usuario.address.suite}</span></p>
            <p><span>{usuario.address.city}</span>-<span>{usuario.address.zipcode}</span></p>

            <p><span>{usuario.phone}</span>-<span>{usuario.company.name}</span></p>        
        </div>
    );
}

export default Registro;