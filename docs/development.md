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

- Codice, nomi e commenti tecnici in inglese.
- Commit brevissimi in italiano: modifica comprensibile, gag solo se pertinente.
- Contenuti del sito e documentazione in italiano.
- Battute contestuali e citazioni brevi di Boris; le citazioni esatte si verificano.
- Istruzioni del progetto in [AGENTS.md](../AGENTS.md).
- Asset locali; nessun font o servizio esterno necessario durante la visita.

## Sito statico

Tutte le pagine sono prerenderizzate con l'adapter statico. `csr = dev` abilita
JavaScript e aggiornamenti automatici durante `npm run dev`; la build pubblicata
mantiene la navigazione HTML senza script e senza idratazione. Dopo il passaggio
da `csr = false`, ricarica una volta la pagina già aperta per attivare gli
aggiornamenti automatici. Possiamo abilitare JavaScript su singole
pagine se una futura interazione lo richiede, mantenendo il prerendering.

Guestbook, chat, forum, contatti e iscrizione sono nomi del sito originale:
le destinazioni attuali sono pagine scherzose statiche. Non raccolgono messaggi
o dati e non hanno account, backend, database o moderazione.

## Hosting

`netlify.toml` imposta Node 24, il comando `npm run build` e la directory `build`.
Non serve un adapter Netlify o un processo server. Il workflow GitHub controlla
il progetto senza pubblicare; il deployment avviene tramite Netlify.

## Stato grafico

La homepage è una prima ricostruzione. Le foto di Biascica e Fabio usano i nuovi
fotogrammi forniti, convertiti in WebP da 600 × 600 px; i PNG sorgenti sono
conservati soltanto in `.local/originals/`, fuori dalla pubblicazione.
`BurstPortrait.svelte` separa foto e cornice SVG a undici punte, con contorno
interno ed esterno ricostruiti dalla reference di Biascica. Rotazione e flip
orizzontale o verticale agiscono sulla cornice e mantengono la foto dritta.
Il filetto rosa chiaro interno ha lo stesso spessore di quello scuro esterno
(2 unità SVG). Un’ombra SVG cade dentro il ritaglio della foto; una seconda
ombra segue il contorno esterno della stella.
`FabioPortrait.svelte` ricostruisce la cornice
della polaroid. Gli altri ritratti sono ancora ritagli provvisori della reference;
il confronto dei contorni è compatibile con la stessa maschera, ruotata al
centro e specchiata più ruotata a destra. L’applicazione alle altre due foto
attende i nuovi fotogrammi; il tracciato resta un’approssimazione manuale.
La priorità attuale è il desktop e la pulizia degli asset; una versione mobile
dedicata è rinviata.

Per regolare il ritratto di Biascica, modifica le proprietà di `BurstPortrait`
in `src/routes/+page.svelte`: `photoX` sposta la foto a destra aumentando il
valore, `photoY` la sposta in basso, `photoSize` controlla il lato della foto
quadrata e quindi lo zoom. Sono unità del disegno SVG, non pixel dello schermo;
parti da variazioni di 5–10 unità. La dimensione si modifica mantenendo fisso
l’angolo superiore sinistro: potrebbe servire correggere anche X e Y.
Con `npm run dev`, salva il file per vedere il risultato nel browser.
Controlla che la foto continui a riempire le punte del foro della cornice.
La composizione è stata controllata in Chromium headless, senza JavaScript,
da 320 a 1600 px: immagini proporzionate, menu raggiungibili e nessun overflow
orizzontale. La testata e la grafica centrale sono state ridimensionate per
avvicinarsi alla reference. Restano differenze nei contorni rosa, nei cuori,
nel fumetto, nei caratteri e nell'inquadratura degli occhi.
