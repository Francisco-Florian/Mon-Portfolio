import Image from '../assets/Image.png';

export default function About(){
    return(
        
        <section id="about" className="bg-blackBackground text-white py-11">
            <div className="container_1100 px-4 py-11 flex flex-col sm:flex-row items-center gap-10">
                
                <img src={Image} alt="me" />
                <article>
                    <p>Actuellement en formation dans le domaine du développement web, je suis enthousiaste à l&apos;idée d&apos;apprendre et de mettre en pratique mes compétences. Mon objectif est de développer des projets intéressants et d&apos;acquérir de l&apos;expérience pratique tout en contribuant positivement aux projets sur lesquels je travaille. Je suis passionné par les technologies web et déterminé à évoluer dans ce domaine dynamique. Découvrez mon parcours en formation et mes premiers projets dans mon portfolio.</p>
                </article>
            </div>
        </section>
        
    )
}