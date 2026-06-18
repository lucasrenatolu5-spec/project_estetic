import { SITE } from '../data/content';

export const useWhatsApp = () => {
  const getLink = (customMessage?: string) => {
    const message = encodeURIComponent(customMessage || SITE.whatsappMessage);
    return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
  };

  return { getLink };
};
