import React from 'react';

import '../css/Listagem.css';

function Listagem({registros}){

    return (
        registros.length > 0 ? 
        
        (<div className='listagem'>
            <p className='bg-primary text-light'>{registros.length} usuários cadastrados.</p>

            <ul className='registros'>
                {registros.map((usuario, indice) => 
                    (<li key={indice}>
                        <p>{usuario.name}</p>
                        {console.log(usuario)}
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