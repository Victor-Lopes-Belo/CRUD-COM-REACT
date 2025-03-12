'use client';
import { useState } from 'react';
import Usuario from '@/data/model/Usuario'
import todosOsUsarios from '@/data/constants/Usuarios'
import ListaUsuarios from './ListaUsuarios';
import FormUsuario from './FormUsuario';

const CadastroUsuario = () => {

    const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null);
    const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsarios);

    function salvarUsuario() {
        const usuarioExiste = usuarios.find(u => u.id === usuarioAtual?.id);
        if (usuarioExiste) {
            const listaUsuarioAtualizada = usuarios.map(u => {
                return u.id === usuarioAtual?.id ? usuarioAtual : u;
            });
            setUsuarios(listaUsuarioAtualizada as Usuario[]);
        }
        else {
            setUsuarios([...usuarios, usuarioAtual as Usuario]);
        }
        setUsuarioAtual(null);
    }

    function removerUsuario(usuario: Usuario) {
        const listaUsuarioAtualizada = usuarios.filter(u => u.id !== usuario.id);
        setUsuarios(listaUsuarioAtualizada);
    }

    function editarUsuario(usuario: Partial<Usuario>) {
        setUsuarioAtual(usuario);
    }

    function cancelarEdicao() {
        setUsuarioAtual(null);  
    }

  return (
    <>
        {
        usuarioAtual ? 
            (
                <div>
                    <FormUsuario 
                    usuario={usuarioAtual} 
                    cancelar={cancelarEdicao}
                    alterarUsuario={setUsuarioAtual}
                    salvarUsuario={salvarUsuario}/>
                </div>
            ):
            (
                <div className='flex flex-col p-4 gap-5'>
                    <button 
                    onClick={() => editarUsuario({})}
                    className='self-end botao bg-green-600 hover:bg-green-700'>
                        Novo Usuario
                    </button>
                    <ListaUsuarios usuarios={usuarios} 
                        removerUsuario={removerUsuario} 
                        editarUsuario={editarUsuario}
                    />
                </div>
            )
 
        }
    </>
  )
}

export default CadastroUsuario