import "./mentionsLegales.css";

export default function MentionsLegales() {
  return (
    <div className="container mx-auto p-8">
    <header className="mb-6">
        <h1>Mentions légales</h1>
    </header>

    <section className="classNamp-6">
        <h2 className="mb-4">Éditeur du site</h2>
        <p><strong>Nom :</strong> Laser Art Show</p>
        <p><strong>Forme juridique :</strong> SARL</p>
        <p><strong>Capital social :</strong> 1000€</p>
        <p><strong>Siège social :</strong> 12E chemin de Basso Cambo, 31100 Toulouse</p>
        <p><strong>SIRET :</strong> 95216756700017</p>
        <p><strong>RCS de Toulouse :</strong> 952 167 567</p>
        <p><strong>Numéro de TVA intracommunautaire :</strong> FR56952167567</p>
        <p><strong>Email :</strong> <a href="mailto:contact@laserartshow.com" className="text-blue-600">contact@laserartshow.com</a></p>
        <p><strong>Téléphone :</strong> +33 (0)6 12 46 01 58</p>
        <p><strong>Directeur de la publication :</strong> Maël NINON</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h2 className="mb-4">Hébergeur du site</h2>
        <p><strong>Nom de l’hébergeur :</strong> Hostinger International LTD</p>
        <p><strong>Adresse :</strong> Švitrigailos str. 34, Vilnius 03230 Lithuania</p>
        <p><strong>Téléphone :</strong> +37064503378</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h2 className="mb-4">Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur le Site (textes, images, vidéos, logos, graphismes, etc.) sont la propriété exclusive de Laser Art Show ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle.</p>
        <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces éléments est strictement interdite sans l’accord préalable par écrit de Laser Art Show.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h2 className="mb-4">Responsabilité</h2>
        <p>Laser Art Show met tout en œuvre pour fournir des informations précises et à jour sur le Site. Toutefois, Laser Art Show ne saurait être tenu responsable des erreurs ou omissions, ni des résultats qui pourraient être obtenus par l’usage de ces informations.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h2 className="mb-4">Droit applicable et juridiction compétente</h2>
        <p>Les présentes mentions légales sont régies par le droit français et tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h2 className="mb-4">Politique de confidentialité de Laser Art Show</h2>
        <p><strong>Dernière mise à jour :</strong> 19/11/2024</p>
        <p>La société Laser Art Show s’engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation française en vigueur. Cette politique de confidentialité explique quelles données nous collectons, comment nous les utilisons et vos droits à leur égard.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h3 className="text-xl mb-4">Données collectées</h3>
        <p>Nous collectons et traitons uniquement les données nécessaires à nos activités et issues de notre formulaire de contact.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h3 className="text-xl mb-4">Utilisation des données</h3>
        <ul className="list-disc pl-6">
            <li>Gérer vos demandes et répondre à vos questions.</li>
            <li>Traiter vos commandes ou services.</li>
            <li>Respecter nos obligations légales et contractuelles.</li>
        </ul>
    </section>

    <section className="classNamp-6 mt-6">
        <h3 className="text-xl mb-4">Partage des données</h3>
        <p>Vos données ne sont pas vendues à des tiers. Elles peuvent être partagées avec :</p>
        <ul className="list-disc pl-6">
            <li>Nos partenaires et prestataires (hébergement, paiement, livraison) dans le cadre strict de l’exécution de nos services.</li>
            <li>Les autorités compétentes en cas d’obligation légale.</li>
        </ul>
    </section>

    <section className="classNamp-6 mt-6">
        <h3 className="text-xl mb-4">Conservation des données</h3>
        <p>Vos données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux lois en vigueur.</p>
    </section>

    <section className="classNamp-6 mt-6">
        <h3 className="text-xl mb-4">Vos droits</h3>
        <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul className="list-disc pl-6">
            <li>Accès, rectification ou suppression.</li>
            <li>Opposition ou limitation du traitement.</li>
            <li>Portabilité des données.</li>
            <li>Réclamation auprès de la CNIL en cas de litige.</li>
        </ul>
        <p>Pour exercer ces droits, contactez-nous à :</p>
        <p><strong>Email :</strong> <a href="mailto:contact@laserartshow.com" className="text-blue-600">contact@laserartshow.com</a></p>
        <p><strong>Adresse postale :</strong> 12E chemin de Basso Cambo, 31100 Toulouse</p>
    </section>
</div>
  );
}
