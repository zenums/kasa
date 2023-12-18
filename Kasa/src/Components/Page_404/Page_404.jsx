import { Link } from 'react-router-dom'
import './Page_404.css'

function Page_404() {
  return (
    <div className="section-page-404">
        <h1 className='Title-404'>404</h1>
        <p className='Text-404'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='Link-404'>Retourner sur la page d’accueil</Link>
    </div>
  )
}
export default Page_404