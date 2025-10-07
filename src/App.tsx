import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Favoritos from './pages/Favoritos'
import Tarefas from './pages/Tarefas'
import { TarefasProvider } from './context/TarefasContext'

function App() {
  return (
    <TarefasProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Tarefas />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TarefasProvider>
  )
}

export default App
