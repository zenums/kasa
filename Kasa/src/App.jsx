import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Page_404 from './Components/Page_404/Page_404'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import Accueil from './Components/Accueil/Accueil'
import Location from './Components/Location/Location'
import Apropos from './Components/A Propos/Apropos'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="section-page">
      <Navbar />  
      <Routes>
        <Route path='*' element={<Page_404/>}/>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/a-propos' element={<Apropos/>}/>
        <Route path={`/location/:locationID`} element={<Location/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
