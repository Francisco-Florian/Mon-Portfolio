import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    // Gère l'état d'ouverture de la modal de succès
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Gère les données du formulaire (nom, email, message)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Met à jour les valeurs des champs de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Envoie l'e-mail via EmailJS et affiche la modal de succès
    const sendEmail = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        emailjs.send(
            'service_kogt3qq',  // ID du service EmailJS
            'template_wz3h4r7', // ID du template EmailJS
            formData,           // Données du formulaire à envoyer
            'HzgFhV9XIUpy-jk3A' // User ID EmailJS
        )
        .then(() => {
            setIsModalOpen(true);  // Ouvre la modal si l'e-mail est envoyé
        }, (error) => {
            console.error(error.text); // Gère les erreurs en cas d'échec
        });

        // Réinitialise le formulaire après l'envoi
        setFormData({ name: '', email: '', message: '' });
    };

    // Ferme la modal de succès
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="contact" className="bg-blackBackground text-white pb-10">
            <div className="container_520 px-4">
                <h2 className="text-center py-10 text-3xl">Contact</h2>
                <form onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom" 
                            className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Votre email" 
                            className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" 
                            required 
                        />
                    </div>

                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message" 
                        rows="5" 
                        className="w-full p-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                        required 
                    />

                    <button className="px-6 py-3 my-4 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300">
                        Send Message
                    </button>
                </form>

                {/* Modal de succès */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-md text-black">
                            <h2 className="text-lg font-bold">Message envoyé avec succès !</h2>
                            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md">
                                Fermer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
