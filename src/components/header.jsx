export default function Header(){
    return(
        <header id="header" className="bg-greyBackground sticky px-4 py-10 top-0">
        <div className="container_1440 flex text-white justify-between items-center">
            <a href="/" className="flex gap-2 items-center hover:text-black transition-colors duration-300">
                <i className="fa-solid fa-code"></i>
                <h1 className="text-2xl">Florian Francisco</h1>
            </a>
            <nav className="hidden lg:mx-auto sm:block ">
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
            <i className="fa-solid fa-bars sm:hidden"></i>
        </div>
    </header>
    )
}