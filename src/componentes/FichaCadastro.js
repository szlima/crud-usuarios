import React from 'react';

import '../css/FichaCadastro.css';

function FichaCadastro(){

    return (
        <form>
            <h5>Dados pessoais</h5>

            <div className='form-floating'>                
                <input type='text' placeholder='Nome de usuário' name='usuario' className='form-control bg-dark text-light'/>
                <label htmlFor='usuario'>Nome de usuário</label>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='Nome' name='nome' className='form-control bg-dark text-light'/>
                <label htmlFor='nome' className='form-label'>Nome</label>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='E-mail' name='email' className='form-control bg-dark text-light'/>
                <label htmlFor='email' className='form-label'>E-mail</label>
            </div>

            <h5>Dados profissionais</h5>

            <div className='form-floating'>                
                <input type='text' placeholder='Rua' name='rua' className='form-control bg-dark text-light'/>
                <label htmlFor='rua' className='form-label'>Rua</label>
            </div>            

            <div className='row'>
                <div className='col form-floating'>
                    <input type='text' placeholder='Número' name='numero' className='form-control bg-dark text-light'/>
                    <label htmlFor='numero' className='form-label'>Número</label>
                </div>
                <div className='col form-floating'>                    
                    <input type='text' placeholder='CEP' name='cep' className='form-control bg-dark text-light'/>
                    <label htmlFor='cep' className='form-label'>CEP</label>
                </div>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='Cidade' name='cidade' className='form-control bg-dark text-light'/>
                <label htmlFor='cidade' className='form-label'>Cidade</label>
            </div>

            <div className='row'>
                <div className='col form-floating'>
                    <input type='text' placeholder='Telefone' name='telefone' className='form-control bg-dark text-light'/>
                    <label htmlFor='telefone' className='form-label'>Telefone</label>
                </div>
                <div className='col form-floating'>                    
                    <input type='text' placeholder='Empresa' name='empresa' className='form-control bg-dark text-light'/>
                    <label htmlFor='empresa' className='form-label'>Empresa</label>
                </div>
            </div>  

            <input type='button' value='Cadastrar' className='btn btn-primary form-control'/>
                        
        </form>
    );
}

export default FichaCadastro;