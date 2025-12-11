import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Politique de Confidentialité</h1>

        <p className="text-muted-foreground mb-8">
          Cette politique explique comment nous utilisons les données envoyées via notre site.
          Nous ne stockons aucune information en base de données. Toutes les données
          transmises servent uniquement à traiter votre demande (devis ou message).
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Données collectées</h2>
            <p>
              Lorsque vous remplissez un formulaire (contact ou demande de devis), nous
              collectons uniquement les informations suivantes :
              <br />
              • Nom et prénom <br />
              • Adresse e-mail <br />
              • Numéro de téléphone <br />
              • Informations liées à votre demande
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Finalité du traitement</h2>
            <p>
              Ces données sont utilisées uniquement pour répondre à votre demande de devis
              ou de contact. Elles ne sont jamais utilisées à d&apos;autres fins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Absence de stockage</h2>
            <p>
              Aucune donnée n&apos;est stockée dans une base de données ou un espace en ligne.
              Les informations envoyées sont uniquement reçues par e-mail par notre équipe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Durée de conservation</h2>
            <p>
              Les e-mails reçus sont conservés uniquement le temps de traiter votre demande,
              puis supprimés régulièrement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Partage des données</h2>
            <p>
              Nous ne partageons, vendons ou transmettons aucune donnée personnelle à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Vos droits</h2>
            <p>
              Conformément au RGPD, vous pouvez demander la suppression ou la consultation
              des données vous concernant en contactant :
              <br />
              <strong>contact@garage-auto-expert.fr</strong>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
