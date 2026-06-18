import { placeholderImage } from '../assets/placeholders/placeholderImage';
import type { BeforeAfterItem } from './types';

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Harmonização Facial',
    procedure: 'Resultado após protocolo completo de 3 sessões',
    beforeImage: placeholderImage('Antes', 'light'),
    afterImage: placeholderImage('Depois', 'dark'),
  },
  {
    id: 'ba2',
    title: 'Bioestimulador de Colágeno',
    procedure: 'Resultado após 60 dias de tratamento',
    beforeImage: placeholderImage('Antes', 'light'),
    afterImage: placeholderImage('Depois', 'dark'),
  },
  {
    id: 'ba3',
    title: 'Skincare Avançado',
    procedure: 'Resultado após 4 sessões de protocolo facial',
    beforeImage: placeholderImage('Antes', 'light'),
    afterImage: placeholderImage('Depois', 'dark'),
  },
];
