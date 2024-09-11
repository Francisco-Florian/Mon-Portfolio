import Header from '../components/header';
import About from '../components/about';
import Competence from '../components/competence';
import Projet from '../components/projet';
import Contact from '../components/contact';
import Footer from '../components/footer';
import projestImage from "../assets/projest.png";
import tictactoe from "../assets/tictactoe.png";
import fylo from "../assets/fylo.png";
import GeniArtHub from "../assets/GeniArtHub.png";
import SkillFacile from "../assets/Skill Facile.png";
import tailwindIcon from "../assets/tailwind icons28x28.png";
import MySQLIcon from "../assets/MySQL28x28.png";



export default function home() {
    return (
        <>
            <Header />
            <main>
                <About />
                <section id="competence" className="bg-blackBackground text-white py-11">
                    <div className="container_860 py-11 my-10">
                        <h2 className="text-center py-10 text-3xl">Compétences</h2>
                        <div className="grid gap-10 sm:grid-cols-2 justify-items-center">
                            <div className="bg-backGroundCard rounded-xl px-5">
                                <h2 className="text-xl text-center py-3">Front-End</h2>
                                <div className="grid grid-cols-3 py-2 gap-4">
                                    <div className="grid gap-4">
                                        <Competence icon='fa-brands fa-html5 fa-2xl' competence='HTML' />
                                        <Competence icon='fa-brands fa-css3-alt fa-2xl' competence='CSS' />
                                    </div>
                                    <div className="grid gap-4">
                                        <Competence icon='fa-brands fa-sass fa-2xl' competence='SCSS' />
                                        <Competence icon='fa-brands fa-js fa-2xl' competence='Javascript' />
                                    </div>
                                    <div className="grid gap-4">
                                        <Competence icon='fa-brands fa-react fa-2xl' competence='React.js' />
                                        <Competence image={tailwindIcon} competence='Tailwind' />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-backGroundCard rounded-xl px-5">
                                <h2 className="text-xl text-center py-3">Back-End</h2>
                                <div className="grid grid-cols-2 py-2 gap-4">
                                    <div className="grid gap-4">
                                        <Competence icon='fa-brands fa-node fa-2xl' competence='Node.js' />
                                        <Competence icon='fa-brands fa-php fa-2xl' competence='PHP' />
                                    </div>
                                    <div className="grid gap-4">
                                        <Competence image={MySQLIcon} competence='MySQL' />
                                        <Competence icon='fa-brands fa-python fa-2xl' competence='Python' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projets" className="bg-blackBackground text-white py-11">
                    <div className="container_1440 px-4 my-10 py-10 grid gap-4">
                        <h2 className="text-center py-10 text-3xl">Mon Portfolio</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Projet img={projestImage} title="Projest" description="Un site de gestion de projet" />
                            <Projet img={tictactoe} title="Site Portfolio" description="Mon site portfolio" />
                            <Projet img={tictactoe} title="Tic Tac Toe" description="Un tic tac toe en ia vs ia fait en js" />
                            <Projet img={fylo} title="Fylo" description="Un site vitrine pour travailler SCSS" />
                            <Projet img={GeniArtHub} title="Géni Art Hub" description="Un site fictif d&apos;e commerce de vente de tableau" />
                            <Projet img={SkillFacile} title="Skill Facile" description="Reproduction d&apos;une page web" />
                        </div>
                        <a className="px-6 py-3 fit text-sm bg-white text-black rounded-md hover:bg-gray-200 transition duration-300" href="https://github.com/Francisco-Florian">Mon github pour decouvrir tous mes projets</a>
                    </div>
                </section>
                <Contact />
            </main>
            <Footer />
        </>
    )
}