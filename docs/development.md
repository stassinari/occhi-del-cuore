# Dietro le quinte

Apri tutto. Per il resto, servono Node e questi comandi.

## Avvio locale

Serve **Node 24**, indicato in `.nvmrc`, con npm. Se usi nvm:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Vite stampa l'indirizzo locale, normalmente `http://localhost:5173`.
Per verificare e provare la versione statica:

```sh
npm run check
npm run build
npm run verify
npm run preview
```

La build è in `build/`. `verify` controlla collegamenti e asset dell'HTML
generato, oltre all'assenza di script, form e riferimenti esterni. La CI esegue
gli stessi controlli: sul set si smarmella, sui link un po' meno.

## Struttura e Svelte

```text
src/
  app.html                  # Documento HTML di base
  app.css                   # Stili condivisi e layout responsive
  lib/
    navigation.ts           # Voci e percorsi dei due menu
    section-copy.ts         # Testi delle pagine provvisorie
    components/             # Testata, cuori, pannelli e cornice del sito
  routes/
    +layout.ts              # Prerendering e navigazione senza client JS
    +layout.svelte          # Layout comune a tutte le pagine
    +page.svelte            # Homepage
    [section]/              # Destinazioni statiche dei menu
static/                     # Immagini locali e favicon
scripts/verify-build.mjs     # Controllo dell'output statico
```

SvelteKit 3 usa `vite.config.ts` per la configurazione e `#lib/*` come alias
dichiarato nel `package.json`. Nei componenti, `$props()` riceve le proprietà.
Un `Snippet` e `{@render children()}` inseriscono le pagine nella cornice comune.

Per aggiungere una pagina, crea per esempio `src/routes/episodi/+page.svelte`:
avrà il percorso `/episodi/` e userà automaticamente testata e menu comuni.
Per sviluppare una sezione esistente, crea il relativo percorso esplicito
(es. `src/routes/news/+page.svelte`), che ha precedenza sulla pagina generica.

## Convenzioni

- Codice, nomi, commenti tecnici e messaggi di commit in inglese.
- Contenuti del sito e documentazione in italiano.
- Battute contestuali e citazioni brevi di Boris; le citazioni esatte si verificano.
- Istruzioni del progetto in [AGENTS.md](../AGENTS.md).
- Asset locali; nessun font o servizio esterno necessario durante la visita.

## Sito statico

Tutte le pagine sono prerenderizzate con l'adapter statico. `csr = false` mantiene
la navigazione HTML senza idratazione. Possiamo abilitare JavaScript su singole
pagine se una futura interazione lo richiede, mantenendo il prerendering.

Guestbook, chat, forum, contatti e iscrizione sono nomi del sito originale:
le destinazioni attuali sono pagine scherzose statiche. Non raccolgono messaggi
o dati e non hanno account, backend, database o moderazione.

## Hosting

`netlify.toml` imposta Node 24, il comando `npm run build` e la directory `build`.
Non serve un adapter Netlify o un processo server. Il workflow GitHub controlla
il progetto senza pubblicare; il deployment avviene tramite Netlify.

## Stato grafico

La homepage è una prima ricostruzione. Le immagini del cast derivano dalla
reference fornita; ritagli, font e dettagli delle cornici vanno ancora rifiniti.
La verifica della pagina completa in browser resta da completare.
