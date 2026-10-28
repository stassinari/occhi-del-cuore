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

Il server di sviluppo usa `http://127.0.0.1:5173`.
L'anteprima della build usa `http://127.0.0.1:4173`, su una porta distinta.
Se una porta è occupata, Vite si ferma invece di sceglierne un'altra.
Per verificare e provare la versione statica:

```sh
npm run check
npm run build
npm run verify
npm run preview
```

La build è in `build/`. `verify` controlla collegamenti e asset dell'HTML
generato, oltre all'assenza di form, riferimenti esterni e script diversi da quello del video segreto. La CI esegue
gli stessi controlli: sul set si smarmella, sui link un po' meno.

Dopo una nuova build, riavvia l'eventuale `npm run preview` già aperto:
potrebbe conservare riferimenti ai CSS della build precedente. Per lavorare
sui sorgenti usa `npm run dev` e il suo indirizzo, non quello della preview.

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
mantiene la navigazione HTML senza idratazione. Un piccolo script locale gestisce
soltanto il video segreto, senza caricare il client di Svelte. Dopo il passaggio
da `csr = false`, ricarica una volta la pagina già aperta per attivare gli
aggiornamenti automatici. Possiamo abilitare JavaScript su singole
pagine se una futura interazione lo richiede, mantenendo il prerendering.

Per attenuare il flash fra documenti, `src/app.html` imposta subito lo sfondo
blu con CSS inline, prima dei fogli esterni. Nello stesso blocco,
`@view-transition { navigation: auto; }` mantiene la pagina precedente visibile
fino alla successiva nei browser compatibili. Le animazioni sono disabilitate:
il cambio è immediato e non introduce dissolvenze o movimento. I browser senza
supporto conservano la navigazione HTML e lo sfondo iniziale blu; non aggiungiamo
JavaScript per emulare la transizione. Il comportamento va provato sulla build:
in sviluppo è attivo il router client di SvelteKit.

Guestbook, chat, forum, contatti e iscrizione sono nomi del sito originale:
le destinazioni attuali sono pagine scherzose statiche. Non raccolgono messaggi
o dati e non hanno account, backend, database o moderazione.

## Hosting

`netlify.toml` imposta Node 24, il comando `npm run build` e la directory `build`.
Non serve un adapter Netlify o un processo server. Il workflow GitHub controlla
il progetto senza pubblicare; il deployment avviene tramite Netlify.

## Stato grafico

### Anteprima di condivisione

`SocialMeta.svelte` gestisce titolo, descrizione, Open Graph e Twitter Card.
Homepage e sezioni passano i propri testi e percorsi; l'immagine è comune.
I metadati sono nell'HTML prerenderizzato, senza JavaScript nel browser.
Il dominio pubblico è `https://fabio-occhidelcuore.it`: se cambia, aggiorna
il componente e il controllo in `scripts/verify-build.mjs`.

`static/images/social-preview.jpg` è una cartolina JPEG di 1200 × 630 px,
composta con cover e ritratti esistenti. Per cambiare l'immagine basta sostituire
il file; se cambiano formato o dimensioni, aggiorna anche i metadati e la verifica.
I sorgenti di lavoro rimangono in `.local/`, senza essere necessari alla build.

Dopo il deploy, incolla l'URL pubblico in un controllore Open Graph e nelle chat
che ti interessano. Le piattaforme possono conservare la vecchia anteprima:
per una nuova immagine usa un nuovo nome file e aggiorna `imageUrl` e la verifica.
Il controllo locale verifica metadati e presenza del JPEG, ma non le cache social.

### Il segreto di Fabio

La Polaroid della sidebar apre `static/videos/fabio-secret.mp4` in un dialog
nativo senza cornice o oscuramento della pagina, largo l’80% del viewport
(e ridotto quando l’altezza disponibile lo richiede). La × ed ESC lo chiudono;
il focus torna alla foto e l’audio si interrompe. Fino a 640 px il video usa tutta la larghezza disponibile, sempre limitata
dall’altezza del viewport; la × ha un’area di tocco di 44 px. Sono disponibili i controlli
nativi del lettore; senza JavaScript la foto collega direttamente all’MP4.

`static/scripts/secret-video.js` aggiunge l’interazione senza idratare Svelte.
Il video non ha un `src` finché non viene aperto, per evitare download iniziali.
Il clic viene intercettato in fase di cattura, prima del router di sviluppo,
così il collegamento MP4 non cambia l’URL della pagina.
L’estratto locale H.264/AAC pesa circa 2 MB; la durata audio è 13,250 s.
L’ultima immagine è prolungata per escludere i fotogrammi della sigla.
Il sorgente dell’episodio è escluso da Git e non serve alla build.

### Composizione e immagini

Lo sfondo comune è blu tinta unita `rgb(0, 50, 150)`, definito da
`--background-color` in `src/app.html`: copre pagina, area centrale e spazi
intorno alle sidebar. La cornice esterna del sito è rimossa; testata e
pannelli dei menu mantengono gradienti e rilievi.

La homepage è una prima ricostruzione. Le foto di Biascica, Corinna, Stanis e Fabio usano i nuovi
fotogrammi forniti, convertiti in WebP da 600 × 600 px; i PNG sorgenti sono
conservati soltanto in `.local/originals/`, fuori dalla pubblicazione.
La cover usa la ricostruzione generata con ChatGPT e fornita dall’utente,
convertita in WebP a qualità 85, senza metadati e alla risoluzione originale
di 1448 × 1086 px. `gli-occhi-del-cuore-no-title.webp` conserva anche la variante
senza scritta, ottimizzata allo stesso modo e non utilizzata nelle pagine.
`BurstPortrait.svelte` separa foto e cornice SVG a undici punte, con contorno
interno ed esterno ricostruiti dalla reference di Biascica. Rotazione e flip
orizzontale o verticale agiscono sulla cornice e mantengono la foto dritta.
Il filetto rosa chiaro interno ha lo stesso spessore di quello scuro esterno
(2 unità SVG). Un’ombra SVG cade dentro il ritaglio della foto; una seconda
ombra segue il contorno esterno della stella.
`FabioPortrait.svelte` ricostruisce la Polaroid senza bordi grigi; usa lo stesso
off-white di busta e fumetto, definito da `--paper-color` in `src/app.css`.
`CouplePortrait.svelte` ricostruisce il cuore della sidebar destra con due
tracciati Bézier indipendenti, seguendo l’asimmetria della reference. La foto
Stanis–Corinna è un WebP 600 × 600 px, qualità 82, senza metadati; l’originale
è in `.local/originals/`. Il cuore usa lo stesso gradiente rosa e gli stessi
filetti interno ed esterno delle stelle (2 unità SVG).
`PortraitShadows.svelte` mantiene identici i parametri delle ombre di Polaroid,
stella e cuore: interna più marcata, esterna più leggera.
La busta è senza bordo, con ombra esterna e lembo SVG dello stesso colore
della carta: i lati partono poco sotto gli angoli superiori e si incontrano
in una punta arrotondata, evidenziata soltanto da un’ombra morbida.
Polaroid e busta seguono il flusso della colonna sinistra: i margini della
busta riservano spazio anche agli angoli ruotati, separandola dalla foto e
dal menù. La colonna si allunga quando lo spazio disponibile non basta.
Corinna al centro e Stanis a destra usano la stessa maschera: rotazione
di −167,7° al centro, flip orizzontale e rotazione di 133,7° a destra.
Il riquadro SVG segue gli ingombri della cornice trasformata; le foto restano
dritte. Il tracciato resta un’approssimazione manuale.
La priorità attuale è il desktop e la pulizia degli asset; una versione mobile
dedicata è rinviata.
Su mobile i due menu sono ancorati al fondo dei pannelli; fumetto e cuore
seguono il flusso della colonna destra, con spazio riservato alla coda.

`Heart.svelte` disegna due cuori blu distinti: `large` seleziona quello della
testata, più aperto e con faccia blu; nei menu la sagoma è più compatta e il
gradiente più chiaro, con ombra inferiore pronunciata. Tracciati e rilievo SVG
sono ricostruzioni manuali dai dettagli forniti, senza immagini ritagliate né
dipendenza dai glifi del sistema. Le misure CSS si regolano nello stesso file.

Per regolare i ritratti, modifica le proprietà di ciascun `BurstPortrait`
in `src/routes/+page.svelte`: `photoX` sposta la foto a destra aumentando il
valore, `photoY` la sposta in basso, `photoSize` controlla il lato della foto
quadrata e quindi lo zoom. Sono unità del disegno SVG, non pixel dello schermo;
parti da variazioni di 5–10 unità. La dimensione si modifica mantenendo fisso
l’angolo superiore sinistro: potrebbe servire correggere anche X e Y.
Con `npm run dev`, salva il file per vedere il risultato nel browser.
Controlla che la foto continui a riempire le punte del foro della cornice.
Per la coppia, le stesse proprietà si regolano su `CouplePortrait` in
`src/lib/components/Sidebar.svelte`: il disegno misura 600 × 497 unità,
la foto rimane quadrata. Controlla la copertura di entrambi i lobi e della punta.
La composizione è stata controllata in Chromium headless, senza JavaScript,
da 320 a 1600 px: immagini proporzionate, menu raggiungibili e nessun overflow
orizzontale. La testata e la grafica centrale sono state ridimensionate per
avvicinarsi alla reference. Restano differenze nei contorni rosa, nei cuori,
nel fumetto, nei caratteri e nell'inquadratura degli occhi.
