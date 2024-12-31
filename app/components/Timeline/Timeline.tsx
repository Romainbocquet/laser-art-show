import React, { useEffect, useRef } from 'react';
import styles from './Timeline.module.css';

interface Event {
  date: string;
  content: string | string[];
}

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const eventsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // Utilise la fenêtre d'affichage comme référence
      threshold: 0.1, // 10% de la timeline visible pour déclencher
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    if (eventsRef.current.length) {
      eventsRef.current.forEach((event) => {
        if (event) observer.observe(event); // Vérifie que 'event' n'est pas null
      });
    }

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
      if (eventsRef.current.length) {
        eventsRef.current.forEach((event) => {
          if (event) observer.unobserve(event); // Vérifie ici aussi
        });
      }
    };
  }, []);

  const events: Event[] = [
    { date: '2017', content: "<strong>Exposition « Énergie du Futur » </strong><br/>Astana, Kazakhstan" },
    { date: '2018', content: '<strong>Festival Mawazine </strong><br/>Rabat, Maroc' },
    {
      date: '2019',
      content: [
        "<strong>1<sup>er</sup> mapping laser sur la Tour Eiffel pour son 130<sup>e</sup> anniversaire </strong><br/>Paris",
        '<strong>Les voiles de St. Barth</strong> <br/>Saint-Barthélemy',
        '<strong>Finale de La coupe de la Ligue de football</strong> <br/>Bordeaux',
        '<strong>Émission de TV The Voice et Mask Singer </strong><br/>Paris',
        '<strong>Concerts de David Guetta, Martin Garrix et Travis Scott</strong> <br/>Paris'
      ],
    },
    {
      date: '2020',
      content: [
        '<strong>Nouvel An sur les Champs-Élysées</strong> <br/> Paris',
      ],
    },{
      date: '2023',
      content: [
        '<strong>Concert de The Weeknd </strong><br/> Paris',
        '<strong>Concert de Charlotte De Witte </strong><br/> Festival des Vieilles Charrues'
      ],
    },{
      date: '2024',
      content: [
        '<strong>Concert de M. Pokora</strong> <br/> Bruxelles, Belgique',
        '<strong>Mapping laser du Grand Théâtre de Provence</strong> <br/> Aix-en-Provence',
        '<strong>Les Grandes Eaux Nocturnes Électro</strong> <br/> Château de Versailles'
      ],
    },
  ];

  return (
    <div ref={timelineRef} className={styles.timeline}>
      {events.map((event, index) => (
        <div
          ref={(el) => { eventsRef.current[index] = el; }}
          key={index}
          className={styles.event}
        >
          <div className={styles.date}>{event.date}</div>
          <div className={styles.content}>
            {Array.isArray(event.content)
              ? event.content.map((item, idx) => <p key={idx} dangerouslySetInnerHTML={{ __html: item }} />)
              : <p dangerouslySetInnerHTML={{ __html: event.content }} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
