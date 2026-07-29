# Domande Laterali

Una single-page app editoriale che raccoglie e presenta i progetti pubblicati nelle repository GitHub di Shaos94.

## Obiettivo

Il sito non è un semplice elenco di link: ogni progetto viene introdotto attraverso una domanda, una sintesi e il principale punto emerso dall'analisi.

## Progetti inclusi

- CO₂ e attività di intrattenimento
- ETF passivo vs trading attivo

Il catalogo si aggiorna in `src/data/projects.ts`.

## Stack

- React
- TypeScript
- Vite
- CSS semplice
- GitHub Pages
- GitHub Actions

Nessun backend, database o runtime server.

## Sviluppo locale

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy attuale

Questa prima versione è sviluppata nella repository `Shaos94/dev` sulla branch:

```text
agent/domande-laterali-hub
```

Finché rimane in questa repository, `vite.config.ts` deve contenere:

```ts
base: '/dev/'
```

URL previsto dopo il merge e l'attivazione di GitHub Pages:

```text
https://shaos94.github.io/dev/
```

## Destinazione consigliata

Quando verrà creata la repository definitiva `Shaos94/Shaos94.github.io`, copiare il progetto e modificare:

```ts
base: '/'
```

Il sito principale sarà quindi pubblicato su:

```text
https://shaos94.github.io/
```

## Aggiungere un progetto

Aggiungere un oggetto all'array `projects` in `src/data/projects.ts`, compilando:

- domanda;
- sintesi;
- risultato principale;
- categoria;
- formato;
- URL del sito;
- URL della repository.

## Verifiche obbligatorie

```text
[ ] npm install funziona
[ ] npm run build funziona
[ ] dist viene generata
[ ] vite.config.ts usa il base della repository reale
[ ] deploy.yml pubblica ./dist
[ ] GitHub Pages usa GitHub Actions
[ ] tutti i link ai progetti funzionano
[ ] layout mobile leggibile
[ ] navigazione da tastiera funzionante
[ ] nessun elemento blocca i click
```

Consultare `HANDOVER.md` per continuare il lavoro in una nuova chat o in un progetto ChatGPT dedicato.
