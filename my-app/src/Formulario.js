import CampoTexto from './componentes';
import'./Formulario.css'
import ListaSuspensa from './componentes/ListaSuspensa';
import Botao from './componentes/Botao';
import { useState } from 'react';




export const Formulario = (props) => {


const [time, setTime] = useState('') 
const [nome, setNome]  = useState('') 
const [cargo, setCargo] = useState('') 
const [imagem, setImagem] = useState('') 

const aoSalvar = (evento) => {
    evento.preventDefault()
   props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
   })
    
}


    
    return (
       <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card dos colaboradores </h2>
<CampoTexto 
  obrigatorio={true} 
  label="Nome" 
  placeholde="Digite seu nome"
  valor={nome}
  aoAlterado={valor => setNome(valor)}
 
/>
<CampoTexto 
 obrigatorio={true} 
 label="Cargo" 
 placeholder="Digite seu cargo"
 valor={cargo}
 aoAlterado={valor => setCargo(valor)}
/>
<CampoTexto 
label="Imagem" 
placeholder="Digite o endereço da imagem"
valor={imagem}
aoAlterado={valor => setImagem(valor)}
/>
<ListaSuspensa 
label="Time" 
 itens={props.times}
 valor={time}
 aoAlterado={valor => setTime(valor)}
 />
    <Botao texto="Criar Card" />
    </form>
    </section>
    )

}

export default Formulario;


