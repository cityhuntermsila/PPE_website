import React from 'react';
import { Product } from '../../types';
import { Card } from '../ui/Card';
import { CpuChipIcon } from '../icons/CpuChipIcon';
import { CloudIcon } from '../icons/CloudIcon';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';
import { HardHatIcon } from '../icons/HardHatIcon';
import { ShieldCheckIcon } from '../icons/ShieldCheckIcon';
import { HandIcon } from '../icons/HandIcon';
import { EyeIcon } from '../icons/EyeIcon';
import { BootIcon } from '../icons/BootIcon';
import { SpeakerphoneIcon } from '../icons/SpeakerphoneIcon';
import { ChatBubbleIcon } from '../icons/ChatBubbleIcon';
import { MailIcon } from '../icons/MailIcon';

const products: Product[] = [
  {
    id: 'prod-edge',
    name: 'Secur-AI Edge Pro',
    description: 'Une solution matérielle sur site pour une analyse vidéo en temps réel à latence ultra-faible. Idéale pour les environnements critiques sans dépendance au cloud.',
    price: 'Sur devis',
    imageUrl: '',
    specifications: [
      'Traitement local instantané',
      'Fonctionne avec une connectivité limitée',
      'Sécurité maximale des données',
      'Boîtier industriel robuste',
    ],
  },
  {
    id: 'prod-cloud',
    name: 'Secur-AI Cloud',
    description: 'Notre plateforme SaaS flexible pour centraliser l\'analyse de plusieurs sites. Accédez à vos tableaux de bord et alertes de n\'importe où, n\'importe quand.',
    price: 'Abonnement',
    imageUrl: '',
    specifications: [
      'Gestion multi-sites centralisée',
      'Mises à jour IA automatiques',
      'Stockage sécurisé des preuves vidéo',
      'Évolutivité illimitée',
    ],
  },
  {
    id: 'prod-smartcam',
    name: 'Secur-AI SmartCam',
    description: 'Une caméra de sécurité tout-en-un avec notre IA de détection d\'EPI directement intégrée. La solution la plus simple à déployer pour les nouveaux sites.',
    price: 'Sur devis',
    imageUrl: '',
    specifications: [
        'IA de détection embarquée',
        'Installation "plug-and-play"',
        'Connectivité 4G/5G en option',
        'Idéale pour les zones isolées',
    ],
  }
];

const detectionModules = [
    { icon: <HardHatIcon className="h-8 w-8 text-success-green" />, name: "Détection de Casque de Sécurité", description: "Prévient les blessures à la tête dues aux chutes d'objets ou aux collisions en garantissant le port obligatoire du casque." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection d'Écran Facial", description: "Protège contre les particules volantes, les éclaboussures à haute température et les projections chimiques." },
    { icon: <HandIcon className="h-8 w-8 text-success-green" />, name: "Détection de Gants", description: "Évite les blessures aux mains dues aux abrasions, aux produits chimiques, à la chaleur ou aux outils tranchants." },
    { icon: <CpuChipIcon className="h-8 w-8 text-success-green" />, name: "Détection d'Équipement de Protection Respiratoire (EPR)", description: "Empêche l'inhalation de poussières, fumées et vapeurs dangereuses dans les espaces confinés." },
    { icon: <BootIcon className="h-8 w-8 text-success-green" />, name: "Détection de Genouillères", description: "Protège les articulations des travailleurs lors des tâches prolongées à genoux ou en rampant." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Gilet de Haute Visibilité", description: "Augmente la visibilité et réduit le risque d'accidents dans les zones de faible luminosité ou à fort trafic." },
    { icon: <EyeIcon className="h-8 w-8 text-success-green" />, name: "Détection de Protection Oculaire (Lunettes)", description: "Prévient les blessures oculaires dues aux fumées chimiques, aux étincelles et aux débris." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Tablier", description: "Protège le torse contre les déversements de produits chimiques, l'exposition à la chaleur ou les outils de coupe." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Harnais de Sécurité et Longe", description: "Prévient les chutes mortelles en vérifiant la conformité du harnais et de la longe en hauteur." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Gilet de Sauvetage", description: "Assure la sécurité flottante et la prévention de la noyade lors d'activités sur les quais ou les navires." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Masque Facial", description: "Favorise la sécurité respiratoire, la protection contre la poussière et le respect de l'hygiène." },
    { icon: <SpeakerphoneIcon className="h-8 w-8 text-success-green" />, name: "Détection de Cache-oreilles / Bouchons d'oreilles", description: "Minimise les risques de perte auditive due à une exposition prolongée à des niveaux de décibels élevés." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-success-green" />, name: "Détection de Combinaisons / Vêtements de Protection", description: "Garantit une protection corporelle complète contre l'exposition toxique, les abrasions et la chaleur." },
    { icon: <BootIcon className="h-8 w-8 text-success-green" />, name: "Détection de Chaussures de Protection", description: "Atténue les risques d'écrasement, de perforation ou de surfaces glissantes." },
];

const alertSystems = [
    { icon: <SpeakerphoneIcon className="h-8 w-8 text-success-green" />, name: "Haut-parleurs", description: "Alertes sonores immédiates sur site pour une sensibilisation instantanée des travailleurs." },
    { icon: <ChatBubbleIcon className="h-8 w-8 text-success-green" />, name: "SMS", description: "Notifications textuelles instantanées aux responsables de la sécurité, même sans smartphone." },
    { icon: <ChatBubbleIcon className="h-8 w-8 text-success-green" />, name: "WhatsApp", description: "Alertes d'incident rapides envoyées directement via WhatsApp aux chefs d'exploitation." },
    { icon: <MailIcon className="h-8 w-8 text-success-green" />, name: "Email", description: "Rapports d'alerte par site avec informations sur les incidents pour une meilleure planification par les cadres de la sécurité." },
];

const ProductsPage: React.FC = () => {
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'prod-edge':
        return <CpuChipIcon className="h-20 w-20 text-success-green mx-auto mb-4" />;
      case 'prod-cloud':
        return <CloudIcon className="h-20 w-20 text-success-green mx-auto mb-4" />;
      case 'prod-smartcam':
        // FIX: Replaced non-existent CameraIcon with existing EyeIcon to avoid compilation errors.
        return <EyeIcon className="h-20 w-20 text-success-green mx-auto mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Nos Solutions de Déploiement</h1>
          <p className="text-brand-light max-w-3xl mx-auto mt-4">
            Trois manières de déployer notre technologie de pointe pour s'adapter parfaitement à votre infrastructure et à vos besoins de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {products.map(product => (
            <Card key={product.id}>
                <div className="p-8 text-center">
                  {getProductIcon(product.id)}
                  <h3 className="text-2xl font-bold text-brand-text mb-2">{product.name}</h3>
                  <p className="text-brand-light text-sm mb-6 h-20">{product.description}</p>
                </div>

                <div className="px-8 pb-8 flex-grow">
                   <h4 className="text-lg font-semibold text-brand-text mb-4 text-center">Points Clés</h4>
                   <ul className="space-y-3 text-brand-light">
                    {product.specifications.map(spec => (
                      <li key={spec} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-success-green mr-3 flex-shrink-0 mt-1" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 mt-auto bg-brand-secondary/50 rounded-b-lg">
                  <p className="text-center text-xl font-bold text-success-green mb-4">{product.price}</p>
                  <button className="w-full bg-success-green text-white font-bold py-3 px-6 rounded-lg hover:bg-success-green/80 transition-colors duration-300">
                    Demander un devis
                  </button>
                </div>
            </Card>
          ))}
        </div>

        {/* Detection Modules Section */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Nos Modules de Détection d'EPI Propriétaires</h2>
                <p className="text-brand-light max-w-3xl mx-auto mt-4">Une couverture complète pour tous les équipements de protection individuelle critiques.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {detectionModules.map(module => (
                    <div key={module.name} className="bg-brand-secondary p-6 rounded-lg flex items-start space-x-4">
                        <div className="flex-shrink-0">{module.icon}</div>
                        <div>
                            <h3 className="font-bold text-brand-text">{module.name}</h3>
                            <p className="text-sm text-brand-light">{module.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Alert System Section */}
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Système d'Alerte EPI Multicanal</h2>
                <p className="text-brand-light max-w-3xl mx-auto mt-4">Des notifications en temps réel, livrées de la manière qui vous convient le mieux.</p>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {alertSystems.map(system => (
                     <div key={system.name} className="bg-brand-secondary p-6 rounded-lg text-center">
                        <div className="flex justify-center mb-4">{system.icon}</div>
                        <h3 className="font-bold text-brand-text text-lg">{system.name}</h3>
                        <p className="text-sm text-brand-light">{system.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
