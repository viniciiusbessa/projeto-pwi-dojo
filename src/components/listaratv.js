import ContComponent from "./styled"

export default function ComponentListar(props){

const removeAtividade = () => {
    let titulo = props.info.titulo 
       props.onRemove(props.index)
       //toast.success(' Atividade ' + titulo + ' Removida')
}

return(
    <ContComponent>
                    <div>
                        <input
                            className= 'titulo'
                            value={props.info.titulo}
                            //onChange={onChangeAtividadeTitulo(index)}
                        />
                        <div className = 'descricao'>{props.info.descricao}</div>
                        <div classname = 'concluido'>{props.info.concluido}</div>
                    
                         <button className = 'Botao' onClick={removeAtividade}> Deletar </button> 
                    </div>
    </ContComponent>
)
    
}