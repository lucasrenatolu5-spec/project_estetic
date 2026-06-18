/**
 * Gera um placeholder visual elegante em SVG (data URI) para uso temporário
 * até que imagens reais sejam enviadas pelo cliente.
 */
export const placeholderImage = (label: string, tone: 'light' | 'dark' = 'light'): string => {
  const bg = tone === 'light' ? '#F3E4DC' : '#C08673';
  const fg = tone === 'light' ? '#8A5C4C' : '#FBF8F6';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="${tone === 'light' ? '#E8D2C6' : '#8A5C4C'}" />
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#g)" />
      <circle cx="300" cy="320" r="64" fill="${fg}" opacity="0.18" />
      <path d="M300 280 a40 40 0 1 0 0.001 0" fill="none" stroke="${fg}" stroke-width="3" opacity="0.55" />
      <text x="300" y="450" font-family="Georgia, serif" font-size="26" fill="${fg}" text-anchor="middle" opacity="0.85">${label}</text>
      <text x="300" y="485" font-family="Arial, sans-serif" font-size="14" fill="${fg}" text-anchor="middle" opacity="0.6">Foto a ser substituída</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
