export default function Footer(){
    return(
        <footer className="bg-greyBackground px-4 py-10 flex flex-col sm:text-center gap-10 lg:flex-row text-white">
        <p>© Copyright 2024 - Florian Francisco. Tous droits réservés.</p>
        <ul className="grid grid-cols-2 lg:flex sm:flex-col lg:flex-row gap-10 mx-auto">
            <li><a className="hover:text-black transition-colors duration-300" href="#about">A propos</a></li>
            <li><a className="hover:text-black transition-colors duration-300" href="#competence">Compétences</a></li>
            <li><a className="hover:text-black transition-colors duration-300" href="#projets">Projets</a></li>
            <li><a className="hover:text-black transition-colors duration-300" href="#contact">Contact</a></li>
        </ul>
    </footer>
    )
}