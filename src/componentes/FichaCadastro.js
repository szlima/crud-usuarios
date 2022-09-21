import React from 'react';

import '../css/FichaCadastro.css';

function FichaCadastro({cadastrar, btnCadastrar, editar, cancelar,
    setUsuario, setNome, setEmail, setRua, setNumero, setCidade, setCep, setTelefone, setEmpresa, 
    usuario, nome, email, rua, numero, cidade, cep, telefone, empresa}){

    return (
        <form>
            <h5>Dados pessoais</h5>

            <div className='form-floating'>                
                <input type='text' placeholder='Nome de usuário' name='usuario' value={usuario} onChange={e => setUsuario(e.target.value)} className='form-control bg-dark text-light'/>
                <label htmlFor='usuario'>Nome de usuário</label>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='Nome' name='nome' value={nome} onChange={e => setNome(e.target.value)} className='form-control bg-dark text-light'/>
                <label htmlFor='nome' className='form-label'>Nome</label>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='E-mail' name='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control bg-dark text-light'/>
                <label htmlFor='email' className='form-label'>E-mail</label>
            </div>

            <h5>Dados profissionais</h5>

            <div className='form-floating'>                
                <input type='text' placeholder='Rua' name='rua' value={rua} onChange={e => setRua(e.target.value)} className='form-control bg-dark text-light'/>
                <label htmlFor='rua' className='form-label'>Rua</label>
            </div>            

            <div className='row'>
                <div className='col form-floating'>
                    <input type='text' placeholder='Número' name='numero' value={numero} onChange={e => setNumero(e.target.value)} className='form-control bg-dark text-light'/>
                    <label htmlFor='numero' className='form-label'>Número</label>
                </div>
                <div className='col form-floating'>                    
                    <input type='text' placeholder='CEP' name='cep' value={cep} onChange={e => setCep(e.target.value)} className='form-control bg-dark text-light'/>
                    <label htmlFor='cep' className='form-label'>CEP</label>
                </div>
            </div>

            <div className='form-floating'>                
                <input type='text' placeholder='Cidade' name='cidade' value={cidade} onChange={e => setCidade(e.target.value)} className='form-control bg-dark text-light'/>
                <label htmlFor='cidade' className='form-label'>Cidade</label>
            </div>

            <div className='row'>
                <div className='col form-floating'>
                    <input type='text' placeholder='Telefone' name='telefone' value={telefone} onChange={e => setTelefone(e.target.value)} className='form-control bg-dark text-light'/>
                    <label htmlFor='telefone' className='form-label'>Telefone</label>
                </div>
                <div className='col form-floating'>                    
                    <input type='text' placeholder='Empresa' name='empresa' value={empresa} onChange={e => setEmpresa(e.target.value)} className='form-control bg-dark text-light'/>
                    <label htmlFor='empresa' className='form-label'>Empresa</label>
                </div>
            </div>  

            {btnCadastrar ?
                <input type='button' value='Cadastrar' className='btn btn-primary form-control' onClick={cadastrar}/>
                :
                <div className='d-flex'>
                    <input type='button' value='Editar' className='btn btn-success form-control' onClick={editar}/>
                    <input type='button' value='Excluir' className='btn btn-danger form-control'/>
                    <input type='button' value='Cancelar' className='btn btn-outline-light form-control' onClick={cancelar}/>
                </div>                
            }

        </form>
    );
}

export default FichaCadastro;