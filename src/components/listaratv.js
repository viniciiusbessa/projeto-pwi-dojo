import ContComponent from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ComponentListar(props){

const removeAtividade = () => {
    let titulo = props.info.titulo 
       props.onRemove(props.index)
       toast.success(' Atividade ' + titulo + ' Removida')
}

return(
    <ContComponent>
        
                    <div className='ConteudoComp'>

                        <div> Título </div>
                        <input
                            className= 'titulo'
                            value={props.info.titulo}
                            //onChange={onChangeAtividadeTitulo(index)}
                        />
                        <div> Descrição </div>
                        <input 
                            className = 'descricao' 
                            value={props.info.descricao}
                        />
                        <div classname = 'concluido'>{props.info.concluido}</div>
                    
                         <button className = 'Botao' onClick={removeAtividade}> Deletar </button> 
                    </div>
            
    </ContComponent>
)
    
}