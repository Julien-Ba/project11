import './about.scss';
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';

export default function About() {
    const reliability =
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.';
    const respect =
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const service =
        'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.';
    const security =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <div className='about'>
            <Banner />
            <div className='about__dropdowns'>
                <Dropdown title='Fiabilité' content={reliability} />
                <Dropdown title='Respect' content={respect} />
                <Dropdown title='Service' content={service} />
                <Dropdown title='Sécurité' content={security} />
            </div>
        </div>
    );
}
