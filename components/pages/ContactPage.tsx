import React, { useState } from 'react';
import { MailIcon } from '../icons/MailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { GoogleGenAI } from '@google/genai';

// According to guidelines, API key is available in process.env.API_KEY
// Always use `const ai = new GoogleGenAI({apiKey: process.env.API_KEY});`.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      
      const prompt = `Un client potentiel nommé ${formData.name} de la société ${formData.company} (email: ${formData.email}) a envoyé le message suivant: "${formData.message}". Rédigez un court e-mail de confirmation amical et professionnel pour accuser réception de sa demande, en lui assurant qu'un spécialiste le contactera bientôt. L'e-mail doit être en français. Ne pas inclure de sujet.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const confirmationEmailText = response.text;
      
      console.log('Generated confirmation email:', confirmationEmailText);

      // In a real app, you would send this email. Here, we just display a success message.
      setSubmissionMessage('Merci ! Votre demande a été envoyée. Nous vous contacterons sous peu.');
      setFormData({ name: '', email: '', company: '', message: '' });

    } catch (error) {
      console.error('Error with Gemini API:', error);
      setSubmissionMessage('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Contactez-nous</h1>
          <p className="text-brand-light max-w-3xl mx-auto mt-4">
            Prêt à améliorer la sécurité sur votre site ? Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-secondary/50 p-8 md:p-12 rounded-lg shadow-xl">
          {/* Contact Info */}
          <div className="text-brand-light">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Informations de contact</h2>
            <p className="mb-8">
              Notre équipe d'experts est prête à répondre à toutes vos questions et à vous fournir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <MailIcon className="h-6 w-6 text-success-green mr-4" />
                <a href="mailto:contact@secur-ai.com" className="hover:text-success-green transition-colors">contact@secur-ai.com</a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-success-green mr-4" />
                <a href="tel:+33123456789" className="hover:text-success-green transition-colors">+33 1 23 45 67 89</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">Demander un devis</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-primary/50 border border-brand-accent/30 rounded-lg p-3 text-brand-text focus:ring-2 focus:ring-success-green focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-primary/50 border border-brand-accent/30 rounded-lg p-3 text-brand-text focus:ring-2 focus:ring-success-green focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-light mb-2">Nom de l'entreprise</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-brand-primary/50 border border-brand-accent/30 rounded-lg p-3 text-brand-text focus:ring-2 focus:ring-success-green focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">Votre message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-primary/50 border border-brand-accent/30 rounded-lg p-3 text-brand-text focus:ring-2 focus:ring-success-green focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-success-green text-white font-bold py-3 px-6 rounded-lg hover:bg-success-green/80 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </div>
              {submissionMessage && (
                <p className={`text-center mt-4 ${submissionMessage.includes('erreur') ? 'text-red-500' : 'text-success-green'}`}>
                  {submissionMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
