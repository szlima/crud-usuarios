import React from 'react';

import '../css/Registro.css';

function Registro({usuario}){

    return(
        <div className='registro'>
            <p className='username'>@{usuario.username}</p>
            <p><span>{usuario.name}</span>-<span>{usuario.email}</span></p>
        
            <p><span>{usuario.address.street}</span>, <span>{usuario.address.suite}</span></p>
            <p><span>{usuario.address.city}</span>-<span>{usuario.address.zipcode}</span></p>

            <p><span>{usuario.phone}</span>-<span>{usuario.company.name}</span></p>        
        </div>
    );
}

export default Registro;