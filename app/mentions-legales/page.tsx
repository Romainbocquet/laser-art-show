export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
      <p className="max-w-prose text-center">
        Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, nous vous informons des éléments suivants :
      </p>
      <section className="mt-8 space-y-4">
        <p>
          <strong>Éditeur du site :</strong> <br />
          Laser Art Show <br />
          Adresse : 123 Rue de l’Événement, Paris, France <br />
          Email : contact@laserartshow.com
        </p>
        <p>
          <strong>Hébergement :</strong> <br />
          Nom de l’hébergeur <br />
          Adresse : 456 Avenue des Services, Paris, France <br />
          Email : support@hebergeur.com
        </p>
        <p>
          <strong>Droits d’auteur :</strong> <br />
          Tous les contenus présents sur ce site sont protégés par les droits d’auteur.
        </p>
      </section>
    </div>
  );
}
