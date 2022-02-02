import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page1 from './pages/page1/index'
import AtividadeContextProvider from './context'

function App(){
    return(
        <AtividadeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path= "/" exact={true} element={<Page1/>}/>
                </Routes>
            </BrowserRouter>
        </AtividadeContextProvider>
    )
}

export default App;