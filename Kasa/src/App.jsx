import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Page_404 from './Components/Page_404/Page_404'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import Accueil from './Components/Accueil/Accueil'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="section-page">
      <Navbar />  
      <Routes>
        <Route path='*' element={<Page_404/>}/>
        <Route path='/' element={<Accueil/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
