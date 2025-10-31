import React from 'react';
import { ServicePlan } from '../../types';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';

const servicePlans: ServicePlan[] = [
  {
    id: 'plan-standard',
    name: 'Support Standard',
    price: 'Inclus la 1ère année',
    features: [
      'Support par email 5j/7',
      'Accès à la base de connaissances',
      'Mises à jour logicielles mineures',
      'Documentation complète',
    ],
  },
  {
    id: 'plan-premium',
    name: 'Support Premium',
    price: 'Sur devis',
    isRecommended: true,
    features: [
      'Tous les avantages du plan Standard',
      'Support téléphonique prioritaire 24/7',
      'Intervention à distance sous 4h',
      'Un gestionnaire de compte dédié',
      'Mises à jour majeures incluses',
      'Rapports de performance trimestriels',
    ],
  },
  {
    id: 'plan-enterprise',
    name: 'Installation & Formation',
    price: 'Sur devis',
    features: [
      'Audit de site et planification du déploiement',
      'Installation et configuration par nos techniciens',
      'Formation complète des administrateurs et utilisateurs',
      'Validation du système et recette sur site',
      'Intégration avec vos systèmes VMS existants',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Services et Support Après-Vente</h1>
          <p className="text-brand-light max-w-3xl mx-auto mt-4">
            Nous vous accompagnons à chaque étape, de l'installation à l'exploitation, pour garantir le succès de votre projet de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicePlans.map(plan => (
            <div
              key={plan.id}
              className={`bg-brand-secondary rounded-lg shadow-xl p-8 flex flex-col ${plan.isRecommended ? 'border-2 border-success-green' : ''}`}
            >
              {plan.isRecommended && (
                <div className="bg-success-green text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 right-5">
                  Recommandé
                </div>
              )}
              <h3 className="text-2xl font-bold text-brand-text mb-2">{plan.name}</h3>
              <p className="text-xl font-semibold text-success-green mb-6">{plan.price}</p>
              
              <ul className="space-y-4 text-brand-light flex-grow mb-8">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-success-green mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-accent/80 transition-colors duration-300">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
