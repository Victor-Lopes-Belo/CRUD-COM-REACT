'use client';
import Usuario from '@/data/model/Usuario';
import { Icon, IconEdit, IconTrash } from '@tabler/icons-react';
import React from 'react'

export interface ListaUsuarioProps {
    usuarios: Usuario[];
    removerUsuario: (usuario: Usuario) => void;
    editarUsuario: (usuario: Usuario) => void;
}

const ListaUsuarios = (props: ListaUsuarioProps) => {

    function renderizarUsuarios(usuario: Usuario) {
        return (
            <div className='flex items-center  gap-2 px-6 py-3 rounded-b-md bg-zinc-900'>
                <div className='flex flex-col flex-1'>
                    <span className='font-semibold'>{usuario.nome}</span>
                    <span className='text-sm text-zinc-400'>{usuario.email}</span>
                </div>
                <div className='flex gap-2'>
                    <button className='botao bg-blue-500 hover:bg-blue-600'
                        onClick={() => props.editarUsuario(usuario)}>
                        <IconEdit size={20} />
                    </button> 
                    <button className='botao bg-red-500 hover:bg-red-600'
                        onClick={() => props.removerUsuario(usuario)}>
                        <IconTrash size={20} />
                    </button>
                </div>
            </div>
        )
    }

  return (
        <ul className='flex flex-col gap-2'>
            {props.usuarios.map(usuario => {
                return (
                    <li key={usuario.id}>
                        {renderizarUsuarios(usuario)}
                    </li>
                )
            })}
        </ul>
  )
}

export default ListaUsuarios