"use client";
import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [mathAnswer, setMathAnswer] = useState('');
  const [isMathCorrect, setIsMathCorrect] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleMathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    setMathAnswer(answer);
    setIsMathCorrect(answer === '7');
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:contact@laserartshow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `${message}\n\n${firstName} ${lastName}\n\n Email de contact : ${email}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className={`w-full`}>
      <h1 className={`px-24  ${styles.contactTopTitle}`}>Contact</h1>
      <div className={`relative w-full py-10 px-24  ${styles.contact} flex flex-col md:flex-row justify-between`}>
        <div className={`w-full md:w-7/12 text-center md:text-left ${styles.contactLeft}`}>
          <h2 className={`mb-4 ${styles.contactTitle}`}>PARLEZ-NOUS <br /> DE VOTRE <br /> PROJET</h2>
        </div>
        <div className={`w-full md:w-5/12 flex justify-center mb-6 md:mb-0 ${styles.contactRight}`}>
          <form className="w-full" onSubmit={handleSendEmail}>
            {/* Prénom et Nom */}
            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <input
                  id="firstName"
                  value={firstName}
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  className="placeholder-[rgb(150,150,150)] mt-1 block w-full py-2 border-b-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <input
                  id="lastName"
                  value={lastName}
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  className="placeholder-[rgb(150,150,150)] mt-1 block w-full py-2 border-b-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email et Objet */}
            <div className="mb-14 flex space-x-12">
              <div className="w-1/2">
                <input
                  id="email"
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="placeholder-[rgb(150,150,150)] mt-1 block w-full py-2 border-b-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <input
                  id="subject"
                  value={subject}
                  type="text"
                  name="subject"
                  placeholder="Objet"
                  className="placeholder-[rgb(150,150,150)] mt-1 block w-full py-2 border-b-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
            </div>

            {/* Question Mathématique */}
            <div className="w-1/2 mb-14">
              <input
                id="mathQuestion"
                type="number"
                name="mathQuestion"
                placeholder="Combien font 5 + 2 ?"
                className="placeholder-[rgb(150,150,150)] mt-1 block w-full py-2 border-b-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                value={mathAnswer}
                onChange={handleMathChange}
                required
              />
            </div>

            {/* Message */}
            <div className="mb-14">
              <textarea
                id="message"
                value={message}
                name="message"
                placeholder="Votre message"
                rows={4}
                className="placeholder-[rgb(150,150,150)] mt-1 block w-full px-4 py-2 border-2 border-[rgb(150,150,150)] bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            {/* Bouton d'envoi */}
            <div className="my-6 text-end">
            <button
                type="submit"
                className={`${styles.button} text-black bg-white rounded-3xl`}
                disabled={!isMathCorrect}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}