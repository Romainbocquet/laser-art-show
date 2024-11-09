import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`w-full`}>
      <h1 className={`px-16 ${styles.contactTopTitle}`}>CONTACT</h1>
      <div className={`relative w-full py-10 px-16 ${styles.contact} flex flex-col md:flex-row justify-between`}>  
        <div className={`w-full md:w-1/2 text-center md:text-left ${styles.contactLeft}`}>
          <h2 className={`text-3xl font-semibold mb-4 ${styles.contactTitle}`}>PARLEZ-NOUS DE VOTRE PROJET</h2>
        </div>
        <div className={`w-full md:w-1/2 flex justify-center mb-6 md:mb-0 ${styles.contactRight}`}>
        <form className="w-full">
            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <label htmlFor="firstName" className="hidden text-sm font-medium text-gray-700">Votre prénom</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="hidden text-sm font-medium text-gray-700">Votre nom</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"                  required
                />
              </div>
            </div>

            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <label htmlFor="email" className="hidden text-sm font-medium text-gray-700">Votre email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="subject" className="hidden text-sm font-medium text-gray-700">Objet</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Objet"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"                  required
                />
              </div>
            </div>

            <div  className="w-1/2 mb-14">
              <label htmlFor="mathQuestion" className="hidden text-sm font-medium text-gray-700">Combien font 5 + 2 ?</label>
              <input
                id="mathQuestion"
                type="number"
                name="mathQuestion"
                placeholder="Réponse"
                className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"                required
              />
            </div>

            <div className="mb-14">
              <label htmlFor="message" className="hidden text-sm font-medium text-gray-700">Votre message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                rows={4}
                className="placeholder-[rgb(73,73,73)] mt-1 block w-full px-4 py-2 border-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="my-6 text-end">
            <button
              type="submit"
              className={`${styles.button} text-black bg-white py-1 px-5 rounded-3xl`}
            >
                ENVOYER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}