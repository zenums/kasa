import './Apropos.css';
import TogglePanel from '../TogglePanel/TogglePanel';

function Apropos() {
  return (
    <>
      <div className="banner Apropos">
        <div className="bg-sombre"></div>
      </div>
      <div className="Apropos-container-liste">
        <TogglePanel title={"Fiabilité"} text={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
        <TogglePanel title={"Qualité"} text={"La qualité est notre priorité. Tous les logements proposés sur notre site sont soumis à une sélection rigoureuse. Ils doivent répondre à des critères de confort et de qualité."} />
        <TogglePanel title={"Service Client"} text={"Un service client dédié vous accompagne tout au long de votre séjour. Disponible 7 jours sur 7, il répond à toutes vos questions et s'assure de votre bien-être."} />
        <TogglePanel title={"Sécurité"} text={"Votre sécurité est notre priorité. Kasa garantit des conditions de séjour optimales en respectant toutes les normes d'hygiène et de sécurité."} />
      </div>
    </>
  );
}

export default Apropos;