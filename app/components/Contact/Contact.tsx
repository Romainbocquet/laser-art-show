"use client";
import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  // État pour stocker la réponse à la question mathématique
  const [mathAnswer, setMathAnswer] = useState('');
  const [isMathCorrect, setIsMathCorrect] = useState(false);

  // Fonction pour vérifier la réponse
  const handleMathChange = (e) => {
    const answer = e.target.value;
    setMathAnswer(answer);
    setIsMathCorrect(answer === '7'); // Active le bouton si la réponse est "7"
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e : FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          firstName, lastName, subject, email, message, 
        }),
        headers: {
          'content-type': 'application/json',
        }
      })
    } catch (err: any) {
      console.error('Err', err)
    }
  }

  return (
    <div className={`w-full`}>
      <h1 className={`px-16 ${styles.contactTopTitle}`}>CONTACT</h1>
      <div className={`relative w-full py-10 px-16 ${styles.contact} flex flex-col md:flex-row justify-between`}>  
        <div className={`w-full md:w-1/2 text-center md:text-left ${styles.contactLeft}`}>
          <h2 className={`text-3xl font-semibold mb-4 ${styles.contactTitle}`}>PARLEZ-NOUS DE VOTRE PROJET</h2>
        </div>
        <div className={`w-full md:w-1/2 flex justify-center mb-6 md:mb-0 ${styles.contactRight}`}>
          <form className="w-full" onSubmit={onSubmit}>
            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <label htmlFor="firstName" className="hidden text-sm font-medium text-gray-700">Votre prénom</label>
                <input
                  id="firstName"
                  value={firstName}
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="hidden text-sm font-medium text-gray-700">Votre nom</label>
                <input
                  id="lastName"
                  value={lastName}
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <label htmlFor="email" className="hidden text-sm font-medium text-gray-700">Votre email</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="subject" className="hidden text-sm font-medium text-gray-700">Objet</label>
                <input
                  id="subject"
                  value={subject}
                  type="text"
                  name="subject"
                  placeholder="Objet"
                  className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
            </div>

            <div className="w-1/2 mb-14">
              <label htmlFor="mathQuestion" className="hidden text-sm font-medium text-gray-700">Combien font 5 + 2 ?</label>
              <input
                id="mathQuestion"
                type="number"
                name="mathQuestion"
                placeholder="Combien font 5 + 2 ?"
                className="placeholder-[rgb(73,73,73)] mt-1 block w-full py-2 border-b-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                value={mathAnswer}
                onChange={handleMathChange}
                required
              />
            </div>

            <div className="mb-14">
              <label htmlFor="message" className="hidden text-sm font-medium text-gray-700">Votre message</label>
              <textarea
                id="message"
                value={message}
                name="message"
                placeholder="Votre message"
                rows={4}
                className="placeholder-[rgb(73,73,73)] mt-1 block w-full px-4 py-2 border-2 border-[rgb(73,73,73)] bg-black text-[rgb(73,73,73)] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <div className="my-6 text-end">
              <button
                type="submit"
                className={`${styles.button} text-black bg-white py-1 px-5 rounded-3xl`}
                disabled={!isMathCorrect} // Désactive le bouton si la réponse est incorrecte
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