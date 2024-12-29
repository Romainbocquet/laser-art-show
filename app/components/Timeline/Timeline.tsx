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
    { date: '2017', content: "L'exposition sur le thème Energie du Futur <br/><strong>Astana, Kazakhstan</strong>" },
    { date: '2018', content: 'Festival Mawazine <br/><strong>Rabat, Maroc</strong>' },
    {
      date: '2019',
      content: [
        "1<sup>er</sup> mapping laser sur la Tour Eiffel pour son 130<sup>e</sup> anniversaire <br/><strong>Paris, France</strong>",
        'Les voiles de St. Barth <br/><strong>Saint-Barthélemy</strong>',
        'Finale de "La coupe de la Ligue" de football <br/><strong>Bordeaux, France</strong>',
        'Émission de TV The Voice et Mask Singer <br/><strong>Paris, France</strong>',
        'Concerts de David Guetta, Martin Garrix et Travis Scott <br/><strong>Paris, France</strong>'
      ],
    },
    {
      date: '2020',
      content: [
        'Nouvel An sur les Champs-Élysées <br/> <strong>Paris, France</strong>',
      ],
    },{
      date: '2023',
      content: [
        'Concert de The Weeknd <br/> <strong>Paris, France</strong>',
        'Concert de Charlotte De Witte <br/> <strong>Festival des Vieilles Charrues, France</strong>'
      ],
    },{
      date: '2024',
      content: [
        'Mapping laser du Grand Théâtre de Provence <br/> <strong>Aix-en-Provence, France</strong>',
        'Les Grandes Eaux Nocturnes Électro <br/> <strong>Château de Versailles</strong>'
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
