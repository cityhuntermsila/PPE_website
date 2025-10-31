import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqData = [
  {
    question: "Qu'est-ce qu'un logiciel de sécurité pour la détection d'EPI et comment fonctionne-t-il avec les systèmes de vidéosurveillance existants ?",
    answer: "Le logiciel de sécurité pour la détection d'EPI est un outil basé sur l'IA qui analyse les flux vidéo en temps réel pour détecter si les travailleurs portent les EPI requis comme les casques, gilets, gants et masques. Le logiciel de Secur-AI se connecte de manière transparente à votre infrastructure de vidéosurveillance IP existante via RTSP (Real-Time Streaming Protocol), sans nécessiter de nouveau matériel. Une fois intégré, il surveille les flux pour détecter la non-conformité aux EPI en temps réel et alerte instantanément les responsables de site via des tableaux de bord, des e-mails ou des SMS."
  },
  {
    question: "Quels types d'EPI Secur-AI peut-il détecter et quels secteurs en bénéficient le plus ?",
    answer: "Le système de surveillance de la conformité des EPI de Secur-AI peut détecter une large gamme d'équipements, y compris les casques, gilets, masques faciaux, gants, lunettes, protections auditives et bottes de sécurité. Cette solution IA est idéale pour des secteurs tels que la construction, le pétrole et le gaz, la logistique, l'exploitation minière et l'industrie manufacturière, où la surveillance en temps réel des EPI aide à réduire les accidents, à garantir la conformité réglementaire et à promouvoir une culture de travail plus sûre."
  },
  {
    question: "Comment Secur-AI garantit-il la conformité en temps réel des EPI et réduit-il les risques de sécurité ?",
    answer: "En utilisant la vision par ordinateur et l'IA, Secur-AI analyse en continu les flux de vidéosurveillance à la recherche de violations d'EPI et envoie des alertes immédiates en cas de non-conformité. Cette surveillance en temps réel remplace les vérifications manuelles, réduit les erreurs humaines et permet aux superviseurs de prendre des mesures proactives. Le système suit également les entrées dans les zones réglementées, ce qui en fait un outil puissant pour l'automatisation de la sécurité et la prévention des incidents."
  },
    {
    question: "Le logiciel de détection d'EPI de Secur-AI est-il disponible partout et son déploiement est-il facile ?",
    answer: "Secur-AI opère dans les principales régions du monde, y compris Hong Kong, Singapour, l'Arabie Saoudite, les Émirats Arabes Unis (EAU), le Qatar, Oman, Bahreïn, le Koweït et d'autres marchés du CCG et du Moyen-Orient, ainsi qu'en Inde, en Asie du Sud-Est, en Australie, en Europe et en Amérique du Nord (Ouvert au déploiement dans de nouveaux endroits !). Le déploiement est rapide et transparent via l'intégration RTSP avec les systèmes de vidéosurveillance existants, avec des options de déploiement en périphérie (edge) ou dans le cloud pour une surveillance en temps réel."
  },
  {
    question: "Secur-AI peut-il détecter plusieurs travailleurs et violations en même temps ?",
    answer: "Oui. Le logiciel de détection de sécurité d'EPI de Secur-AI peut suivre simultanément plusieurs individus sur des chantiers complexes. Il utilise une vision par ordinateur avancée pour détecter plusieurs types d'EPI par travailleur et identifie la non-conformité pour chaque personne dans le champ de vision, même dans des environnements à haute densité, sans compromettre la vitesse ou la précision."
  },
  {
    question: "Les règles de détection d'EPI peuvent-elles être personnalisées pour différents sites de projet ?",
    answer: "Absolument. Secur-AI permet une personnalisation complète des règles de détection d'EPI pour correspondre aux protocoles de sécurité uniques de votre site. Qu'il s'agisse de surveiller les casques dans une zone et les masques faciaux dans une autre, notre système s'adapte aux exigences spécifiques en matière d'EPI, aux zones à risque et aux flux de travail opérationnels, garantissant un suivi de conformité pertinent et précis pour chaque emplacement."
  },
  {
    question: "Le logiciel de détection d'EPI de Secur-AI est-il conforme aux normes internationales de sécurité, de confidentialité et de protection des données ?",
    answer: "Oui ! Secur-AI s'engage à respecter les plus hauts niveaux de conformité en matière de sécurité et de confidentialité des données, conformément aux normes mondiales, y compris le RGPD. Nous suivons une conception axée sur la confidentialité, floutons les visages et les éléments sensibles, et utilisons des techniques d'IA préservant la vie privée. Le traitement peut se faire localement (Edge) pour une confidentialité maximale ou sur des services cloud sécurisés (AWS)."
  }
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-accent/30">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-medium text-brand-text">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-brand-light transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-brand-light prose">
            <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
     <div className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Questions Fréquemment Posées (FAQ)</h1>
          <p className="text-brand-light max-w-3xl mx-auto mt-4">
            Trouvez des réponses aux questions les plus courantes sur nos solutions de détection d'EPI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-secondary/50 rounded-lg shadow-xl">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;