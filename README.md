# Essência Estética — Landing Page

Landing page premium para clínica de estética facial e corporal, construída em
**React + TypeScript + CSS Modules + Framer Motion**.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção na pasta /dist
npm run preview   # serve a build de produção localmente
```

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Nome, telefone, WhatsApp, endereço, horário | `src/data/content.ts` → objeto `SITE` |
| Estatísticas (clientes, satisfação, anos) | `src/data/content.ts` → `STATS` |
| Serviços/tratamentos | `src/data/content.ts` → `SERVICES` |
| Diferenciais/benefícios | `src/data/content.ts` → `BENEFITS` |
| Depoimentos | `src/data/content.ts` → `TESTIMONIALS` |
| Equipe | `src/data/content.ts` → `TEAM` |
| Perguntas frequentes | `src/data/content.ts` → `FAQS` |
| Cores, tipografia, espaçamentos | `src/styles/variables.css` |
| Fotos | `src/assets/images/` (substitua os arquivos e/ou os imports nos componentes) |

## Imagens

Três fotos reais já estão aplicadas:
- **Hero** (especialista com equipamento) → `src/assets/images/hero-especialista.jpg`
- **Seção Sobre** e **Serviços** → `src/assets/images/procedimento-facial-1.jpg` e `-2.jpg`

As seções **Antes e Depois** e parte da **Equipe** estão usando placeholders
ilustrativos (gerados via SVG) até que fotos reais de resultados e da equipe
sejam enviadas. Para substituir:

1. Coloque a nova imagem em `src/assets/images/`
2. Importe no componente correspondente (`src/data/beforeAfter.ts` ou
   `src/data/content.ts`, campo `photo`)

## WhatsApp

O número e a mensagem padrão de contato estão em `src/data/content.ts`:

```ts
whatsappNumber: '5581999999999', // formato: código do país + DDD + número
whatsappMessage: 'Olá! Gostaria de agendar uma avaliação...'
```

Todos os botões de WhatsApp da página (header, hero, CTA final, botão
flutuante, formulário) usam esse mesmo número automaticamente via o hook
`useWhatsApp`.

## Estrutura

```
src/
  components/      # um componente por seção (Hero, Services, FAQ, etc.)
    common/         # Button, SectionHeading, FloatingWhatsApp (reutilizáveis)
  data/             # conteúdo centralizado (textos, listas, tipos)
  hooks/            # useWhatsApp
  styles/           # variáveis globais (cores, tipografia, espaçamento) e reset
```

Cada seção segue o mesmo padrão: `NomeDaSecao.tsx` + `NomeDaSecao.module.css`,
facilitando localizar e editar qualquer parte da página sem afetar as demais.
