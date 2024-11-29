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
    { date: '2017', content: "L'exposition sur le thème Energie du Futur à Astana, Kazakhstan" },
    { date: '2018', content: 'Festival Mawazine au Maroc en 2018 et 2019' },
    {
      date: '2019',
      content: [
        "1<sup>er</sup> mapping laser sur la Tour Eiffel pour son 130<sup>e</sup> anniversaire",
        'Les voiles de St. Barth à Saint-Barthélemy',
        'Finale de "La coupe de la Ligue" de football à Bordeaux',
        'Emission de TV <strong>The Voice</strong> et Mask Singer',
      ],
    },
    {
      date: '2020',
      content: [
        'Nouvel an sur les Champ-Elysées',
        'Concerts d\'artistes de renom comme <strong>David Guetta</strong>, <strong>Martin Garrix</strong>, ou encore <strong>Travis Scott</strong>',
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
              : <p>{event.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;