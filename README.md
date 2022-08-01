# portfolioWebsite
Sito portfolio personale realizzato in React, con integrazione di Google Analytics 4 ed invio email - 2022.

## Descrizione

Sito portfolio personale realizzato in React, completamente Responsive, con integrazione di Google Analytics 4 ed invio email con EmailJS.

E' possibile visualizzarlo sul sito: https://lorenzobotto.it.

## Creazione chiavi API 

Prima di eseguire, è necessario creare delle chiavi API per Google Analytics 4 e Emailjs.

### Google Analytics 4
1. andare sul sito https://analytics.google.com/ e accedere, se necessario;
2. in Amministrazione, nella colonna Account, fai clic su Crea account;
3. inserisci un nome per l'account. Configura le impostazioni di condivisione dei dati per stabilire quali dati condividere con Google;
4. fai clic su Avanti per aggiungere la prima proprietà all'account;
5. (se non si è nella pagina di aggiunta proprietà la si trova in Amministrazione e nella colonna Proprietà cliccare su Crea Proprietà) Inserisci un nome per la proprietà (ad esempio "Sito web di My Business, Inc.") e seleziona il fuso orario e la valuta dei report;
6. fai clic su Avanti. Inserire le informazioni sull'attività commerciale oppure premere Crea per saltare questo passo;
7. accetta i Termini di servizio di Analytics e l'Emendamento sul trattamento dei dati;
8. (se non si è nella pagina di aggiunta stream dati la si trova in Amministrazione e nella colonna Proprietà cliccare su Aggiungi Stream) Aggiungere uno stream di dati e scegliere Web;
9. inserisci l'URL del tuo sito web principale, ad esempio "example.com", e il nome dello stream, ad esempio "Example, Inc. (stream web)";
10. puoi attivare o disattivare la misurazione avanzata. La misurazione avanzata acquisisce automaticamente le visualizzazioni di pagina e altri eventi. Una volta creato lo stream di dati, puoi sempre tornare indietro e disattivare singolarmente gli eventi di misurazione avanzati che non vuoi acquisire. Per questo si consiglia di abilitarla;
11. fai clic su Crea stream;
12. copiarsi ID Misurazione (Se non si è nella pagina dove si trova l'ID Misurazione la si trova in Amministrazione e nella colonna Proprietà cliccare su Stream di dati. Infine selezionare lo stream e si vedrà l'ID Misurazione);
13. modificare il file .env (nella cartella principale del progetto) cambiando la variabile "REACT_APP_GA4_KEY" con il valore dell'ID Misurazione precedentemente copiato (nel formato "G-XXXXXX". Inserire anche "G-"!).

### Emailjs

1. andare sul sito https://www.emailjs.com/, creare un account ed effettuare l'accesso;
2. ci saranno due sezioni Transactional email services e Personal email services. Effettuare la propria scelta e collegare l'account. Dopodichè è stato creato il servizio. Per esempio: se si sceglie Gmail nella sezione Personal email services, cliccare su Connect Account e collegare l'account Gmail e successivamente premere su Create Service;
3. copiarsi il Service ID;
4. modificare il file .env (nella cartella principale del progetto) cambiando la variabile "REACT_APP_EMAILJS_SERVICE" con il valore del Service ID precedentemente copiato.
5. nel menù a sinistra cliccare su Email Templates per creare un Template, e successivamente su Create New Template.
6. creare il proprio template, salvare e copiarsi il Template ID;
7. modificare il file .env (nella cartella principale del progetto) cambiando la variabile "REACT_APP_EMAILJS_TEMPLATE" con il valore del Template ID precedentemente copiato.
8. nel menù a sinistra cliccare su Account e copiarsi la Public Key;
9. modificare il file .env (nella cartella principale del progetto) cambiando la variabile "REACT_APP_EMAILJS_USER" con il valore della Public Key precedentemente copiato.

Adesso è possibile eseguire con la sicurezza che tutte le API sono funzionanti.

## Come eseguire

Da linea di comando, installare i moduli necessari:
```
npm install
```

Eseguire:
```
npm start
```