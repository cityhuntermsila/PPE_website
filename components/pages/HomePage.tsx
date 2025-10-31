import React from 'react';
import { Page } from '../../App';
import { HardHatIcon } from '../icons/HardHatIcon';
import { ShieldCheckIcon } from '../icons/ShieldCheckIcon';
import { CpuChipIcon } from '../icons/CpuChipIcon';
import { CloudIcon } from '../icons/CloudIcon';
import { PlayCircleIcon } from '../icons/PlayCircleIcon';
import { ReceiptTaxIcon } from '../icons/ReceiptTaxIcon';
import { UsersIcon } from '../icons/UsersIcon';
import { FireIcon } from '../icons/FireIcon';
import { TruckIcon } from '../icons/TruckIcon';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-brand-secondary/50 p-6 rounded-lg shadow-lg text-center h-full">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-brand-accent/30 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-brand-text mb-2">{title}</h3>
    <p className="text-brand-light text-sm">{children}</p>
  </div>
);

const IndustryCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-brand-secondary/50 p-6 rounded-lg shadow-lg text-left transition-all duration-300 hover:bg-brand-secondary h-full">
    <div className="flex items-center mb-4">
      <div className="bg-brand-accent/30 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-text">{title}</h3>
    </div>
    <p className="text-brand-light text-sm">{children}</p>
  </div>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-primary to-brand-secondary/90 text-white text-center py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-4 leading-tight">
            Pourquoi inspecter manuellement les EPI<br />quand l'IA peut le faire 100x plus vite ?
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-light mb-8">
            Détection d'EPI en temps réel par analyse vidéo qui fonctionne à merveille, même lorsque vous êtes hors site, en train de dormir, ou en pleine réunion.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left text-sm mb-10">
              <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-success-green mr-2 flex-shrink-0" />
                  <span>Surveillance intelligente 24/7</span>
              </div>
              <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-success-green mr-2 flex-shrink-0" />
                  <span>Alertes de 100+ caméras</span>
              </div>
              <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-success-green mr-2 flex-shrink-0" />
                  <span>Accès à distance universel</span>
              </div>
              <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-success-green mr-2 flex-shrink-0" />
                  <span>Performance IA + IdO + 5G</span>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setCurrentPage('products')}
              className="bg-success-green text-white font-bold py-3 px-8 rounded-lg hover:bg-success-green/80 transition-transform transform hover:scale-105 duration-300 w-full sm:w-auto"
            >
              Découvrir nos solutions
            </button>
            <button
              onClick={() => { alert("Démo bientôt disponible !"); }}
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-accent/80 transition-transform transform hover:scale-105 duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Voir une démo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-brand-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Une Protection Intelligente, Simple et Efficace</h2>
            <p className="text-brand-light max-w-3xl mx-auto mt-4">
              Secur-AI s'intègre à votre infrastructure existante pour renforcer la sécurité sans perturber vos opérations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldCheckIcon className="h-8 w-8 text-success-green" />}
              title="Détection en Temps Réel"
            >
              Analyse continue des flux vidéo pour identifier instantanément les manquements au port des EPI (casques, gilets, etc.).
            </FeatureCard>
            <FeatureCard
              icon={<CpuChipIcon className="h-8 w-8 text-success-green" />}
              title="Alertes Instantanées"
            >
              Notifications automatiques envoyées aux responsables de site en cas de détection de risque pour une intervention rapide.
            </FeatureCard>
            <FeatureCard
              icon={<CloudIcon className="h-8 w-8 text-success-green" />}
              title="Tableau de Bord Analytique"
            >
              Visualisez les tendances, identifiez les zones à risque et générez des rapports de conformité pour améliorer vos protocoles de sécurité.
            </FeatureCard>
            <FeatureCard
              icon={<HardHatIcon className="h-8 w-8 text-success-green" />}
              title="Intégration Facile"
            >
              Compatible avec la majorité des systèmes de caméras existants, notre solution se déploie rapidement, en local ou sur le cloud.
            </FeatureCard>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-brand-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Comment ça marche ?</h2>
                <p className="text-brand-light max-w-2xl mx-auto mt-4">En 3 étapes simples, renforcez la sécurité de vos sites.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                <div className="flex flex-col items-center">
                    <div className="bg-success-green text-brand-primary h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">Connectez</h3>
                    <p className="text-brand-light">Branchez notre boîtier Secur-AI ou connectez notre service cloud à votre réseau de caméras existant. Aucune modification complexe n'est requise.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-success-green text-brand-primary h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">Détectez</h3>
                    <p className="text-brand-light">Notre intelligence artificielle analyse les flux en temps réel pour détecter les anomalies de port d'EPI selon vos règles de sécurité.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-success-green text-brand-primary h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">Agissez</h3>
                    <p className="text-brand-light">Recevez des alertes immédiates et consultez des rapports détaillés pour prendre des mesures correctives et améliorer durablement la sécurité.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Why PPE Section */}
      <section className="py-16 md:py-24 bg-brand-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Pourquoi la surveillance par analyse vidéo est-elle nécessaire pour les EPI ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<ShieldCheckIcon className="h-8 w-8 text-success-green" />} title="Prévenir les Accidents">
              Les manquements mineurs dans l'utilisation des EPI précèdent souvent des événements graves. Les aborder de manière proactive atténue les risques aggravés.
            </FeatureCard>
            <FeatureCard icon={<ReceiptTaxIcon className="h-8 w-8 text-success-green" />} title="Éviter les Pénalités Coûteuses">
              Chaque non-conformité en matière d'EPI augmente discrètement les coûts à long terme par le biais d'interruptions, de réclamations et de primes d'assurance.
            </FeatureCard>
            <FeatureCard icon={<UsersIcon className="h-8 w-8 text-success-green" />} title="Renforcer la Culture de la Sécurité">
              Une adhésion constante aux EPI influence positivement la perception des régulateateurs, des clients et du personnel.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-brand-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Des Solutions de Surveillance d'EPI sur Mesure pour Chaque Industrie</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard icon={<HardHatIcon className="h-8 w-8 text-success-green" />} title="Construction">
              Surveille en continu la conformité des EPI sur les chantiers de construction via la vidéosurveillance, détectant en temps réel l'absence de casques, de gilets réfléchissants et de bottes de sécurité pour prévenir les blessures dues aux chutes d'objets, aux glissades et aux machines.
            </IndustryCard>
            <IndustryCard icon={<CpuChipIcon className="h-8 w-8 text-success-green" />} title="Industrie Manufacturière">
              Utilise des caméras IP pour s'assurer que les travailleurs portent des lunettes de sécurité, des gants, des casques (avec correspondance de couleur automatique) et des protections auditives, réduisant ainsi le risque de blessures dues aux débris volants, à l'exposition chimique ou au bruit intense en usine.
            </IndustryCard>
            <IndustryCard icon={<FireIcon className="h-8 w-8 text-success-green" />} title="Pétrole et Gaz">
              Surveille les flux vidéo en direct pour vérifier que les vêtements ignifuges (FRC), les détecteurs de gaz, les casques et les gants sont portés en permanence, aidant à prévenir les brûlures, les explosions et l'exposition à des gaz dangereux dans les zones à haut risque.
            </IndustryCard>
            <IndustryCard icon={<TruckIcon className="h-8 w-8 text-success-green" />} title="Logistique">
              S'assure que les gilets haute visibilité, les bottes à embout d'acier et les gants sont correctement portés dans les zones de chargement et de stockage, minimisant les accidents lors des opérations de chariots élévateurs et de levage de charges lourdes.
            </IndustryCard>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Prêt à transformer la sécurité de votre site ?</h2>
          <p className="text-brand-light max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour une démonstration personnalisée et découvrez comment Secur-AI peut vous aider à atteindre le zéro accident.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-success-green text-white font-bold py-3 px-8 rounded-lg hover:bg-success-green/80 transition-transform transform hover:scale-105 duration-300"
          >
            Demander un devis
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;