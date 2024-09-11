export default function Contact(){
    return(
        <section id="contact" className="bg-blackBackground text-white py-10">
            <div className="container_520 px-4">
                <h2 className="text-center py-10 text-3xl">Contact</h2>
                <form action="#" method="post">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                        <input type="text" placeholder="Votre nom" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
                        <input type="email" placeholder="Votre email" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
                    </div>

                    <textarea placeholder="Votre message" rows="5" className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />

                    <button className="px-6 py-3 my-4 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300">Send Message</button>
                </form>
            </div>
        </section>
    )
}