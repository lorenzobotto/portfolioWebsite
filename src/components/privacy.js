export default function PrivacyInfo({setOpenModal, toggleModal, openModal}) {
    return (
        
        <div id="defaultModal" aria-hidden="true" style={{opacity: openModal ? "1" : "0"}} className="transition-opacity ease-in-out duration-300 hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 bg-opacity-50 cursor-pointer"
            onClick={(event) => {
                if (!document.getElementById("modal").contains(event.target)) {
                    setOpenModal(false);
                    toggleModal("defaultModal");
                }
            }}
        >
            <div id="modalOverlay" className="relative px-4 w-full max-w-2xl md:h-auto">
                <div 
                    id="modal" 
                    style={{Height: "80vh", cursor: "initial"}} 
                    className="relative rounded-lg shadow bg-gray-700"
                >
                    <div className="flex justify-between items-start p-5 rounded-t border-b border-gray-600">
                        <h3 className="text-xl font-semibold  lg:text-2xl text-white">
                            Privacy e Cookies Policy
                        </h3>
                        <button type="button" onClick={() => {setOpenModal(false);toggleModal("defaultModal");}} className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6 overflow-y-auto text-white" style={{height: "63vh"}}>
                        <h1 className="font-bold lg:text-2xl">INFORMATIVA SULLA PRIVACY</h1>
                        <h3 style={{marginTop: "10px"}}>Ultimo aggiornamento - 02 Agosto 2022</h3>
                        <p style={{fontSize: "15px"}}>
                            <strong>Informativa ai sensi dell’art. 13 del Codice della Privacy</strong>
                        </p>
                        <p>
                            <strong>Ai sensi dell’articolo 13 del codice della D.Lgs. 196/2003, vi rendiamo le seguenti informazioni.</strong>
                        </p>
                        <p>
                        Noi di <strong>https://lorenzobotto.it/</strong> riteniamo che la privacy dei nostri visitatori sia estremamente importante. Questo documento descrive dettagliatamente i tipi di informazioni personali raccolti e registrati dal nostro sito e come essi vengano utilizzati.
                        </p>
                        <h1 className="font-bold lg:text-xl">Informazioni che collezioniamo</h1>
                        <p>
                            Informazioni personali che ci fornisci
                        </p>
                        <p>
                            <i><strong>In breve:</strong> raccogliamo informazioni personali che ci fornisci.</i>
                        </p>
                        <p>
                        Raccogliamo informazioni personali che ci fornisci volontariamente quando esprimi interesse a ottenere informazioni su di noi o sui nostri prodotti e servizi, quando partecipi ad attività sui Servizi o in altro modo quando ci contatti.
                        </p>
                        <div>
                            <strong>Informazioni personali fornite dall'utente.</strong> Le informazioni personali che raccogliamo dipendono dal contesto delle tue interazioni con noi e con i Servizi, dalle scelte che fai e dai prodotti e dalle funzionalità che utilizzi. Le informazioni personali che raccogliamo possono includere quanto segue:                            
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li>nomi e cognomi;</li>
                                <li>numeri di telefono;</li>
                                <li>indirizzi e-mail;</li>
                                <li>preferenze di contatto.</li>
                            </ul>
                            <strong>Informazioni sensibili.</strong> Non trattiamo informazioni sensibili.
                        </div>
                        <p>
                        Tutte le informazioni personali che ci fornisci devono essere veritiere, complete e accurate, e devi informarci di eventuali modifiche a tali informazioni personali.
                        </p>
                        <h1 className="font-bold lg:text-xl">Informazioni raccolte automaticamente</h1>
                        <p>
                            <i><strong>In breve:</strong> alcune informazioni - come l'indirizzo IP (Internet Protocol) e/o le caratteristiche del browser e del dispositivo - vengono raccolte automaticamente quando l'utente visita i nostri Servizi e accetta i Cookie Analitici.</i>
                        </p>
                        <p>
                        Raccogliamo automaticamente alcune informazioni quando visiti, utilizzi o navighi nei Servizi, dopo aver accettato i Cookie Analitici (Google Analytics). Queste informazioni non rivelano la tua identità specifica (come il tuo nome o le informazioni di contatto) ma possono includere informazioni sul dispositivo e sull'utilizzo, come l'indirizzo IP, le caratteristiche del browser e del dispositivo, il sistema operativo, le preferenze di lingua, gli URL di riferimento, il nome del dispositivo, paese, posizione, informazioni su come e quando utilizzi i nostri Servizi e altre informazioni tecniche. Queste informazioni sono necessarie principalmente per mantenere la sicurezza e il funzionamento dei nostri Servizi e per le nostre finalità interne di analisi e reporting.
                        </p>
                        <div>
                            Le informazioni che raccogliamo includono:
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li>
                                    <i>Log e dati di utilizzo.</i>  I dati di registro e di utilizzo sono informazioni relative al servizio, alla diagnostica, all'utilizzo e alle prestazioni che i nostri server raccolgono automaticamente quando l'utente accede o utilizza i nostri Servizi e che vengono registrate in file di registro. A seconda di come interagisci con noi, questi dati di registro possono includere l'indirizzo IP, le informazioni sul dispositivo, il tipo di browser e le impostazioni e le informazioni sulla tua attività nei Servizi (come i timbri data/ora associati all'utilizzo, le pagine e i file visualizzati, le ricerche e altre azioni eseguite, ad esempio quali funzionalità utilizzate), le informazioni sugli eventi del dispositivo (come attività di sistema, rapporti di errore (a volte chiamati "crash dump") e le impostazioni hardware).
                                </li>
                                <li>
                                    <i>Dati del dispositivo.</i>  Raccogliamo dati del dispositivo come informazioni sul tuo computer, telefono, tablet o altro dispositivo che utilizzi per accedere ai Servizi. A seconda del dispositivo utilizzato, i dati del dispositivo possono includere informazioni quali l'indirizzo IP (o il server proxy), i numeri di identificazione del dispositivo e dell'applicazione, la posizione, il tipo di browser, il modello hardware, il provider di servizi Internet e/o il gestore di telefonia mobile, sistema operativo e informazioni sulla configurazione del sistema.
                                </li>
                                <li>
                                    <i>Dati sulla posizione.</i>  Raccogliamo dati sulla posizione, come informazioni sulla posizione del dispositivo, che possono essere precisi o imprecisi. La quantità di informazioni raccolte dipende dal tipo e dalle impostazioni del dispositivo utilizzato per accedere ai Servizi. Ad esempio, potremmo utilizzare il GPS e altre tecnologie per raccogliere dati di geolocalizzazione che ci dicano la tua posizione attuale (in base al tuo indirizzo IP). L'utente può scegliere di non consentirci di raccogliere queste informazioni rifiutando l'accesso alle informazioni o disabilitando l'impostazione Posizione sul dispositivo. Tuttavia, se scegli di rinunciare, potresti non essere in grado di utilizzare determinati aspetti dei Servizi.
                                </li>
                            </ul>
                            I dati sugli eventi che raccogliamo, dopo aver accettato i Cookie Analitici, tramite Google Analytics vengono conservati per 14 mesi.
                        </div>
                        <h1 className="font-bold lg:text-xl">Trasferimento dei dati</h1>
                        <p>
                        Tutti i dati che raccogliamo NON verranno trasferiti a terzi e/o al di fuori dell'UE.
                        </p>
                        <h1 className="font-bold lg:text-xl">Cookie Policy</h1>
                        <p>
                        Questo sito utilizza cookies, anche di terze parti, per migliorarne l’esperienza di navigazione, consentire a chi naviga di usufruire di eventuali servizi online e monitorare la navigazione nel sito.
                        </p>
                        <h1 className="font-bold lg:text-xl">Come disabilitare i Cookies</h1>
                        <p>
                        E’ possibile disabilitare i cookies direttamente dal browser utilizzato, accedendo alle impostazioni (preferenze oppure opzioni): questa scelta potrebbe limitare alcune funzionalità di navigazione del sito.
                        </p>
                        <h1 className="font-bold lg:text-xl">Gestione dei Cookies</h1>
                        <p>
                            I cookies utilizzati in questo sito possono rientrare nelle categorie descritte di seguito:
                        </p>
                        <div>
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px"}}>
                                <li>
                                    <strong>Attività strettamente necessarie al funzionamento</strong><br />
                                    Questi cookies hanno natura tecnica e permettono al sito di funzionare correttamente. Ad esempio, mantengono l’utente collegato durante la navigazione evitando che il sito richieda di collegarsi più volte per accedere alle pagine successive.                                    
                                </li>
                                <li>
                                    <strong>Attività di salvataggio delle preferenze</strong><br />
                                    Questi cookie permettono di ricordare le preferenze selezionate dall’utente durante la navigazione, ad esempio, consentono di impostare la lingua. </li>
                                <li>
                                    <strong>Attività Statistiche e di Misurazione dell’audience (es: Google Analytics)</strong><br />
                                    Questi cookie ci aiutano a capire, attraverso dati raccolti in forma anonima e aggregata, come gli utenti interagiscono con i siti internet fornendo informazioni relative alle sezioni visitate, il tempo trascorso sul sito, eventuali malfunzionamenti. Questo aiuta a migliorare la resa dei siti internet.                                    </li>
                            </ul>
                        </div>
                        <h1 className="font-bold lg:text-xl">Modalità del trattamento dei dati</h1>
                        <p>
                            <i><strong>In breve:</strong> elaboriamo le tue informazioni per fornire, migliorare e amministrare i nostri Servizi, comunicare con te, per la sicurezza e la prevenzione delle frodi e per rispettare la legge. Possiamo anche trattare le tue informazioni per altri scopi con il tuo consenso.</i>
                        </p>
                        <div>
                            <strong>Elaboriamo le tue informazioni personali per una serie di motivi, a seconda di come interagisci con i nostri Servizi, tra cui:</strong>
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li>
                                    <strong>Per salvare o proteggere l'interesse vitale di un individuo.</strong> Possiamo elaborare le tue informazioni quando necessario per salvare o proteggere l'interesse vitale di un individuo, ad esempio per prevenire danni.
                                </li>
                            </ul>
                        </div>
                        <h1 className="font-bold lg:text-xl">Su quali basi giuridiche ci basiamo per trattare le informazioni dell'utente</h1>
                        <p>
                            <i><strong>In breve:</strong> elaboriamo i tuoi dati personali solo quando riteniamo che sia necessario e abbiamo una valida ragione legale (ad esempio, base giuridica) per farlo in base alla legge applicabile, come con il tuo consenso, per rispettare le leggi, per fornirti servizi per stipulare o adempiere ai nostri obblighi contrattuali, per proteggere i tuoi diritti o per soddisfare i nostri legittimi interessi commerciali.</i>
                        </p>
                        <div>
                            Il Regolamento generale sulla protezione dei dati (GDPR, General Data Protection Regulation) e il GDPR del Regno Unito ci impongono di spiegare le basi giuridiche valide su cui ci basiamo per elaborare le tue informazioni personali. Come tale, possiamo fare affidamento sulle seguenti basi legali per elaborare le tue informazioni personali:
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li><strong>Consenso.</strong>  Possiamo trattare le tue informazioni se ci hai dato il permesso (ad esempio, il consenso) di utilizzare le tue informazioni personali per uno scopo specifico. Puoi revocare il tuo consenso in qualsiasi momento. <a href="#privacyContact">Clicca qui</a> per saperne di più.</li>
                                <li><strong>Obblighi legali.</strong>  Possiamo trattare le tue informazioni laddove lo riteniamo necessario per il rispetto dei nostri obblighi legali, ad esempio per cooperare con un organismo di applicazione della legge o un'agenzia di regolamentazione, esercitare o difendere i nostri diritti legali, o divulgare le informazioni come prova in un contenzioso in cui siamo coinvolti.</li>
                                <li><strong>Interessi vitali.</strong>  Possiamo trattare le tue informazioni laddove lo riteniamo necessario per proteggere i tuoi interessi vitali o gli interessi vitali di terzi, ad esempio situazioni che comportano potenziali minacce alla sicurezza di qualsiasi persona.</li>
                            </ul>
                        </div>
                        <h1 className="font-bold lg:text-xl">Natura obbligatoria</h1>
                        <p>
                            Tutti i dati richiesti sono obbligatori.
                        </p>
                        <h1 className="font-bold lg:text-xl">Diritti dell’interessato</h1>
                        <div>
                            Ai sensi ai sensi dell’art. 7 (Diritto di accesso ai dati personali ed altri diritti) del Codice della Privacy, vi segnaliamo che i vostri diritti in ordine al trattamento dei dati sono:
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li>conoscere, mediante accesso gratuito l’esistenza di trattamenti di dati che possano riguardarvi;</li>
                                <li>essere informati sulla natura e sulle finalità del trattamento;</li>
                                <li>ottenere a cura del titolare, senza ritardo:
                                    <ul style={{listStyleType: "circle", paddingLeft: "30px", paddingTop: "5px"}}>
                                        <li>
                                            la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;la conferma dell’esistenza o meno di dati personali che vi riguardano, anche se non ancora registrati, e la comunicazione in forma intellegibile dei medesimi dati e della loro origine, nonché della logica e delle finalità su cui si basa il trattamento; la richiesta può essere rinnovata, salva l’esistenza di giustificati motivi, con intervallo non minore di novanta giorni;
                                        </li>
                                        <li>
                                            l’aggiornamento, la rettifica ovvero, qualora vi abbia interesse, l’integrazione dei dati esistenti;la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;
                                        </li>
                                        <li>
                                            l’aggiornamento, la rettifica ovvero, qualora vi abbia interesse, l’integrazione dei dati esistenti;
                                        </li>
                                        <li>
                                            opporvi in tutto o in parte per motivi legittimi al trattamento dei dati personali che vi riguardano ancorché pertinenti allo scopo della raccolta.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            Vi segnaliamo che il titolare del trattamento ad ogni effetto di legge è:
                            <ul style={{listStyleType: "square", paddingLeft: "30px", paddingBottom: "15px", paddingTop: "15px"}}>
                                <li>Lorenzo Botto</li>
                                <li>Strada Favorita, 2/A</li>
                                <li>Bra (CN) - 12042</li>
                                <li>Cellulare: +39 3899456700</li>
                                <li>E-mail: info@lorenzobotto.it</li>
                            </ul>
                            Per esercitare i diritti previsti all’art. 7 del Codice della Privacy ovvero per la cancellazione dei vostri dati dall’archivio, è sufficiente contattarci attraverso uno dei canali messi a disposizione.
                        </div>
                        <h1 className="font-bold lg:text-xl">Aggiornamento dell'informativa</h1>
                        <p>
                            <i><strong>In breve:</strong>  Sì, aggiorneremo il presente avviso come necessario per rimanere conformi alle leggi pertinenti.</i>
                        </p>
                        <p>
                        Potremmo aggiornare questa informativa sulla privacy di volta in volta. La versione aggiornata sarà indicata da una data "Revisionata" aggiornata e la versione aggiornata entrerà in vigore non appena sarà accessibile. Se apportiamo modifiche sostanziali alla presente informativa sulla privacy, potremmo notificare l'utente pubblicando in modo visibile tali modifiche o inviando direttamente una notifica. Ti invitiamo a leggere frequentemente questa informativa sulla privacy per essere informato su come proteggiamo le tue informazioni.
                        </p>
                        <div id="privacyContact">
                            <h1 className="font-bold lg:text-xl">Come potete contattarci</h1>
                            <p style={{marginTop: "24px"}}>
                                Se avete domande, commenti o per qualsiasi informazione su questa informativa, potete inviarci un'email a info@lorenzobotto.it, utilizzare l'apposita sezione "Contattami" oppure via cellulare: +39 3899456700.
                            </p>
                        </div>
                        <h1 className="font-bold lg:text-xl">Informazioni per i bambini</h1>
                        <p>
                            Riteniamo importante assicurare una protezione aggiunta ai bambini online. Noi incoraggiamo i genitori e i tutori a trascorrere del tempo online con i loro figli per osservare, partecipare e/o monitorare e guidare la loro attività online. Noi non raccogliamo dati personali di minori. Se un genitore o un tutore crede che il nostro sito abbia nel suo database le informazioni personali di un bambino, vi preghiamo di contattarci immediatamente (utilizzando la mail fornita) e faremo di tutto per rimuovere tali informazioni il più presto possibile.
                        </p>
                        <p>
                            Questa politica sulla privacy si applica solo alle nostre attività online ed è valida per i visitatori del nostro sito web e per quanto riguarda le informazioni condivise e/o raccolte. Questa politica non si applica a qualsiasi informazione raccolta in modalità offline o tramite canali diversi da questo sito web.
                        </p>
                        <h1 className="font-bold lg:text-xl">Consenso</h1>
                        <p>
                            Usando il nostro sito web, acconsenti alla nostra politica sulla privacy e accetti i suoi termini. Se desideri ulteriori informazioni o hai domande sulla nostra politica sulla privacy non esitare a contattarci.
                        </p>
                    </div>                        
                    <div className="flex items-right p-6 space-x-2 rounded-b border-t border-gray-600">
                        <button id="buttonCloseModal" onClick={() => {
                            setOpenModal(false);
                            toggleModal("defaultModal");
                        }}
                        type="button" className="focus:ring-4 focus:ring-gray-300 rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600">Ho capito!</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}