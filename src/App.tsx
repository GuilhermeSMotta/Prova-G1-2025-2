import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Favoritos from './pages/Favoritos'
import { FavoritosProvider } from './context/FavoritosContext'
import Tarefas from './pages/Tarefas'

function App() {

  return (
    <FavoritosProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Tarefas />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </FavoritosProvider>
  )
}

export default App
