# Handover — Domande Laterali

## Prompt da usare per avviare il nuovo progetto/chat

Sto sviluppando **Domande Laterali**, un sito statico React/Vite che raccoglie e presenta i siti interattivi pubblicati nelle mie repository GitHub.

### Account e repository

- Account GitHub: `Shaos94`
- Repository di sviluppo attuale: `Shaos94/dev`
- Branch di lavoro: `agent/domande-laterali-hub`
- Pull request: da verificare nella repository dopo la creazione
- Destinazione definitiva consigliata: `Shaos94/Shaos94.github.io`
- URL definitivo previsto: `https://shaos94.github.io/`

### Obiettivo del sito

Il portale deve raccogliere progetti costruiti intorno a domande insolite o controintuitive. Non deve apparire come un semplice Linktree o portfolio generico.

Ogni progetto deve mostrare:

1. una domanda forte;
2. una breve spiegazione;
3. il risultato o punto più interessante;
4. la categoria e il tipo di strumento;
5. un collegamento al sito pubblicato;
6. un collegamento alla repository GitHub.

### Identità provvisoria

- Nome: **Domande Laterali**
- Claim: **Domande strane. Risposte che si possono controllare.**
- Mood: editoriale, pacato, premium/minimal, da studioso curioso
- Palette:
  - ink `#1a1a1a`
  - bone `#f5f1ea`
  - bone deep `#ebe5d9`
  - sage `#8ea58a`
  - sage deep `#6f8569`
- Font: Bricolage Grotesque con fallback di sistema
- Evitare estetica corporate, dashboard eccessive e decorazioni che ostacolano i click

### Stack e vincoli

- React
- TypeScript rigoroso
- Vite
- CSS semplice in `src/index.css`
- single-page app
- GitHub Pages
- GitHub Actions
- nessun backend
- nessun database
- nessun server runtime
- nessun `shadcn/ui`
- nessun import da `@/components/ui/*`
- niente dipendenze pesanti non necessarie
- controlli nativi e accessibili

### Stato già realizzato

La branch contiene:

- home editoriale responsive;
- hero e identità provvisoria;
- navigazione interna;
- ricerca testuale;
- filtri per categoria;
- catalogo centralizzato in `src/data/projects.ts`;
- due progetti reali;
- schede con link al sito e alla repository;
- sezione metodologica;
- metadati HTML;
- workflow che esegue la build sulle pull request e pubblica `dist` su `main`;
- vecchio motore Monte Carlo e dipendenza Recharts rimossi dalla branch.

### Progetti già presenti

1. `Shaos94/co2-entertainment-impact`
   - sito: `https://shaos94.github.io/co2-entertainment-impact/`
   - categoria: Ambiente
   - formato: Calcolatore

2. `Shaos94/mcpassiveetfvstrader`
   - sito: `https://shaos94.github.io/mcpassiveetfvstrader/`
   - categoria: Economia
   - formato: Simulatore

### Configurazione Vite obbligatoria

Nella repository di sviluppo attuale `Shaos94/dev`:

```ts
base: '/dev/'
```

Quando il progetto verrà spostato nella repository definitiva `Shaos94/Shaos94.github.io`:

```ts
base: '/'
```

Non lasciare `/dev/` dopo lo spostamento e non usare `/` finché il sito resta nella repository `dev`.

### File principali

```text
.github/workflows/deploy.yml
src/data/projects.ts
src/App.tsx
src/main.tsx
src/index.css
index.html
package.json
vite.config.ts
README.md
HANDOVER.md
```

### Primo lavoro da fare nella nuova chat

1. Aprire e controllare la pull request della branch `agent/domande-laterali-hub`.
2. Verificare il risultato della GitHub Action `Build and deploy to GitHub Pages`.
3. Correggere eventuali errori TypeScript o di build senza cambiare il design.
4. Controllare la home su desktop e mobile.
5. Verificare tutti i link esterni.
6. Valutare il copy e il nome `Domande Laterali`, senza cambiarli automaticamente.
7. Preparare il trasferimento nella repository definitiva `Shaos94.github.io` solo dopo che la prima versione è stabile.

### Possibili sviluppi successivi

- aggiungere immagine Open Graph e favicon originali;
- aggiungere una scheda editoriale più dettagliata per ogni progetto;
- introdurre campi `year`, `featured`, `maturity` e `updatedAt` nel catalogo;
- ordinare i progetti automaticamente;
- creare una categoria Tecnologia e una categoria Società quando esistono contenuti reali;
- aggiungere analytics privacy-friendly solo se servono;
- collegare un dominio personalizzato solo dopo la scelta definitiva del nome;
- evitare pagine vuote e sezioni “coming soon” non necessarie.

### Regole operative per la nuova chat

Ogni intervento deve essere presentato con:

1. breve diagnosi;
2. file da modificare;
3. codice preciso;
4. checklist di test;
5. rischi o punti da controllare.

Prima di chiudere ogni modifica verificare sempre:

```text
[ ] package.json coerente
[ ] vite.config.ts contiene il base corretto
[ ] index.html ha title e description corretti
[ ] src/main.tsx importa App e index.css
[ ] npm install funziona
[ ] npm run build funziona
[ ] dist viene generata
[ ] deploy.yml pubblica ./dist
[ ] GitHub Pages è impostato su GitHub Actions
[ ] branch principale: main
[ ] layout mobile leggibile
[ ] nessun overlay blocca i click
```

### Nota sulla validazione attuale

La build non è stata eseguita nel container della chat originale perché l'ambiente non poteva raggiungere GitHub o il registry npm. Il workflow è stato modificato per eseguire `npm install` e `npm run build` automaticamente sulla pull request: il risultato della GitHub Action è quindi la verifica tecnica da usare come fonte di verità.
