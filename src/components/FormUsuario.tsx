import Usuario from '@/data/model/Usuario';
import React from 'react'

export interface FormUsuarioProps {
  usuario: Partial<Usuario>;
  alterarUsuario: (usuario: Partial<Usuario>) => void;
  cancelar: () => void;
  salvarUsuario: () => void;
}

const FormUsuario = (props: FormUsuarioProps) => {
  const {usuario, alterarUsuario, cancelar, salvarUsuario} = props;
  return (
    <div className='flex flex-col gap-4 p-4'>
        <div className='flex flex-col gap-1'>
            <label htmlFor='nome'>Nome</label>
            <input 
            className='input'
            type='text'
            value={props.usuario.nome ?? ""} 
            onChange={(e) => alterarUsuario({...usuario, nome: e.target.value})}
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>E-mail</label>
                <input 
                className='input'
                type='email' 
                value={props.usuario.email ?? ""}
                onChange={(e) => alterarUsuario({...usuario, email: e.target.value})}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='senha'>Senha</label>
                <input 
                className='input'
                type='password'
                value={props.usuario.senha ?? ""} 
                onChange={(e) => alterarUsuario({...usuario, senha: e.target.value})}/>
            </div>
        </div>
        <div className='flex gap-2'>
            <button className='botao bg-blue-500 hover:bg-blue-600'
              onClick={salvarUsuario}
            >
              Salvar
            </button>
            <button className='botao bg-red-500 hover:bg-red-600'
              onClick={cancelar}>
              Cancelar
            </button> 
        </div>
    </div> 
  )
}

export default FormUsuario