import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "setTitulo": 
            return {...state, titulo: action.titulo}
        case "setDescricao": 
            return {...state, descricao: action.descricao}
        case "setConcluido": 
            return {...state, concluido: action.concluido}
        case "setAtividades": 
            return {...state, atividades: [...state.atividades, action.atividades]}

        case "updateAtividade":
            return{
               ...state,
               atividades: state.atividades.map((item, idx) => {
                   return idx === item.index ? {...item, titulo: action.titulo} : item
               }) 
            }
        case "removeAtividade":
            return{
                ...state,
                atividades: state.atividades.filter((item, index) => index !== action.index)
            }    
        
        default:
            break;        
    }
}

const estadoInicial = {
    titulo: '',
    descricao: '',
    concluido: false,
    atividades: []
}

const AtividadeContext = createContext();

export default function AtividadeContextProvider(props) {
    const [ atividadeEstado, setAtividadeEstado ] = useReducer(reducer, estadoInicial);
    return ( <AtividadeContext.Provider value={{ atividadeEstado, setAtividadeEstado }}> { props.children } </AtividadeContext.Provider>) ;
}

export function UseAtividadeContext() {
    const context = useContext( AtividadeContext )
    const { atividadeEstado, setAtividadeEstado } = context

    return {
        atividadeEstado,
            setTitulo: (titulo) => setAtividadeEstado({type: 'setTitulo', titulo}), 
            setDescricao: ( descricao ) => setAtividadeEstado({ type: 'setDescricao', descricao}),
            setConcluido: ( concluido ) => setAtividadeEstado ({type: 'setConcluido', concluido}),
            setAtividades: ( atividades ) => setAtividadeEstado({type: 'setAtividades', atividades}),
            setAtividadeTitulo: ( index, titulo ) => setAtividadeEstado({type: 'updateAtividade', index, titulo}),
            setAtividade: ( index ) => setAtividadeEstado({ type: 'removeAtividade', index }),
            removeAtividade: ( index ) => setAtividadeEstado({ type: 'removeAtividade', index })
        }
}