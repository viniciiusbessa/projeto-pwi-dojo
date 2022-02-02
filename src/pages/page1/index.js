import {UseAtividadeContext} from '../../context'
import ContainerHome from './styled'

import ComponentListar from '../../components/listaratv'

export default function Page1() {

    const {
        atividadeEstado: {titulo, descricao, concluido, atividades},
        setTitulo,
        setDescricao,
        setAtividades,
        setAtividadeTitulo,
        removeAtividade
    } = UseAtividadeContext()

    function inserir() {
        let obj = {
            titulo,
            descricao,
            concluido: false
        }

        setAtividades(obj)
    }

    const onChangeAtividadeTitulo = (index) => 
        (event) => {
            setAtividadeTitulo(index, event.target.value)
     }
    
    const onPressRemoveAtividade = (index) => removeAtividade(index)

    return (

        <ContainerHome>
                <div className= 'cabecalho'>
                    <h1 className= 'titulo-cabe'> Atividades </h1>
                </div>

            
            

            
            <div className= 'conteudo1'>
                    <div className= 'titulo-item'> Item </div>
                    <div className= 'box-txt'>
                        <div className= 'tit-ativ'>Título</div>
                        <input onChange={e => setTitulo(e.target.value)} value={titulo} className='Input1'/>
                    </div>
                    <div className= 'box-txt'>
                        <div className= 'tit-ativ'> Descrição </div>
                        <input onChange={e => setDescricao(e.target.value)} value={descricao} className='Input1'/>
                    </div>
                
                    <div className='options'>    
                        <input type='radio' />    
                        <input type='radio' />
                        <input type='radio' />
                    </div>

                    <button className='botao-add' onClick={inserir} > Adicionar </button>
            </div>


            <div className = 'Listar'>
                {atividades.map((item, index) => {
                    return <ComponentListar index={index}
                                            info ={item}
                                            onRemove= {onPressRemoveAtividade}
                    />
                })}
            </div>
            
        </ContainerHome>
    )
}