import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fonction qui ferme le menu quand un lien est cliqué
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header id="header" className="bg-greyBackground sticky top-0 px-4 py-10 z-10">
            <div className="container_1440 flex justify-between items-center text-white">
                <a href="/" className="flex gap-2 items-center hover:text-black transition-colors duration-300">
                    <i className="fa-solid fa-code"></i>
                    <h1 className="text-2xl">Florian Francisco</h1>
                </a>
                <nav className="hidden sm:block">
                    <ul className="flex gap-10">
                        <li><a className="hover:text-black transition-colors duration-300" href="#about">A propos</a></li>
                        <li><a className="hover:text-black transition-colors duration-300" href="#competence">Compétences</a></li>
                        <li><a className="hover:text-black transition-colors duration-300" href="#projets">Projets</a></li>
                        <li><a className="hover:text-black transition-colors duration-300" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <ul className="hidden sm:flex gap-3 text-2xl">
                    <li><a className="hover:text-black transition-colors duration-300" href="https://www.linkedin.com/in/florian-francisco/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a className="hover:text-black transition-colors duration-300" href="https://github.com/Francisco-Florian"><i className="fa-brands fa-github"></i></a></li>
                </ul>
                <i className="fa-solid fa-bars sm:hidden cursor-pointer" onClick={toggleMenu} />
            </div>
            {/* Menu burger déroulant à droite */}
            <div className={`sm:hidden bg-greyBackground text-white transition-max-height duration-500 overflow-hidden absolute right-0 top-full w-32 ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-5 px-4 py-2">
                    <li><a className="hover:text-black transition-colors duration-300" href="#about" onClick={closeMenu}>A propos</a></li>
                    <li><a className="hover:text-black transition-colors duration-300" href="#competence" onClick={closeMenu}>Compétences</a></li>
                    <li><a className="hover:text-black transition-colors duration-300" href="#projets" onClick={closeMenu}>Projets</a></li>
                    <li><a className="hover:text-black transition-colors duration-300" href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </header>
    );
}
