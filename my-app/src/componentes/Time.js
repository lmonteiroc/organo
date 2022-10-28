import Colaborador from './Colaboradores'
import './Time.css'

const Time = (props) => {
return(
    <section className='Time' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>
   
        
    <div className='colaboradores'>
    {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo}imagem={colaborador.imagem}/>)}
</div>
    
    </section>
)
}

export default Time
