import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.8:0',

  releaseNotes: {
    en_US: `Reliable NIP-57 Zap receipts and Android push notifications are restored. BOLT12 Pay now advertises the same internal app signer that signs each receipt, so standards-validating clients such as Amethyst no longer reject later Zap notifications.

New Zap invoices now wake the publisher immediately, and active payments are checked about once per second instead of waiting for the previous 15-second polling interval. Relay publishing waits for actual acceptance acknowledgements, tolerates individual blocked or unavailable relays once another requested relay accepts the receipt, and safely reuses the same signed receipt when a retry is necessary.

NWC connections sharing a relay now use one shared subscription, duplicate requests are ignored, and reconnects use bounded backoff. Lightning Activity remains responsive while avoiding overlapping LND history scans.

Existing application data and payment history are preserved. No manual migration is required.`,

    de_DE: `Zuverlässige NIP-57-Zap-Belege und Android-Push-Benachrichtigungen funktionieren wieder. BOLT12 Pay gibt nun denselben internen App-Signierer bekannt, mit dem jeder Beleg tatsächlich signiert wird. Dadurch verwerfen standardkonform prüfende Clients wie Amethyst spätere Zap-Benachrichtigungen nicht mehr.

Neue Zap-Rechnungen wecken den Publisher jetzt sofort, und aktive Zahlungen werden etwa einmal pro Sekunde statt im bisherigen 15-Sekunden-Intervall geprüft. Beim Veröffentlichen wird auf tatsächliche Relay-Bestätigungen gewartet. Einzelne blockierte oder nicht erreichbare Relays verhindern den Erfolg nicht mehr, sobald ein anderes angefragtes Relay den Beleg angenommen hat; bei notwendigen Wiederholungen wird derselbe signierte Beleg sicher wiederverwendet.

NWC-Verbindungen mit demselben Relay verwenden nun ein gemeinsames Abonnement, doppelte Anfragen werden ignoriert und Neuverbindungen nutzen eine begrenzte Wartezeitsteigerung. Die Lightning-Aktivität bleibt aktuell, ohne überlappende LND-Verlaufsabfragen auszuführen.

Bestehende App-Daten und der Zahlungsverlauf bleiben erhalten. Keine manuelle Migration erforderlich.`,

    es_ES: `Se restablecen los recibos Zap NIP-57 fiables y las notificaciones push de Android. BOLT12 Pay ahora anuncia el mismo firmante interno de la aplicación que firma cada recibo, por lo que los clientes que validan el estándar, como Amethyst, ya no rechazan las notificaciones Zap posteriores.

Las nuevas facturas Zap ahora activan el publicador de inmediato y los pagos activos se comprueban aproximadamente una vez por segundo, en lugar de esperar el intervalo anterior de 15 segundos. La publicación espera confirmaciones reales de aceptación de los relays, tolera relays individuales bloqueados o no disponibles cuando otro relay solicitado acepta el recibo y reutiliza de forma segura el mismo recibo firmado cuando es necesario reintentar.

Las conexiones NWC que comparten un relay ahora utilizan una sola suscripción, se ignoran las solicitudes duplicadas y las reconexiones usan una espera progresiva limitada. La actividad Lightning se mantiene actualizada sin superponer consultas al historial de LND.

Se conservan los datos existentes de la aplicación y el historial de pagos. No se requiere migración manual.`,

    fr_FR: `Les reçus Zap NIP-57 fiables et les notifications push Android sont rétablis. BOLT12 Pay annonce désormais le même signataire interne de l'application que celui qui signe réellement chaque reçu. Les clients qui valident le standard, tels qu'Amethyst, ne rejettent donc plus les notifications Zap suivantes.

Les nouvelles factures Zap réveillent maintenant immédiatement le service de publication, et les paiements actifs sont vérifiés environ une fois par seconde au lieu d'attendre l'ancien intervalle de 15 secondes. La publication attend les confirmations réelles d'acceptation des relais, tolère un relais bloqué ou indisponible dès qu'un autre relais demandé accepte le reçu et réutilise en toute sécurité le même reçu signé lorsqu'une nouvelle tentative est nécessaire.

Les connexions NWC partageant un relais utilisent désormais un seul abonnement, les requêtes en double sont ignorées et les reconnexions appliquent une attente progressive plafonnée. L'activité Lightning reste à jour sans chevauchement des consultations de l'historique LND.

Les données existantes de l'application et l'historique des paiements sont conservés. Aucune migration manuelle n'est nécessaire.`,

    pl_PL: `Przywrócono niezawodne potwierdzenia Zap NIP-57 i powiadomienia push w systemie Android. BOLT12 Pay ogłasza teraz ten sam wewnętrzny klucz podpisujący aplikacji, który faktycznie podpisuje każde potwierdzenie, dzięki czemu klienci sprawdzający zgodność ze standardem, tacy jak Amethyst, nie odrzucają już kolejnych powiadomień Zap.

Nowe faktury Zap natychmiast uruchamiają publikowanie, a aktywne płatności są sprawdzane mniej więcej raz na sekundę zamiast oczekiwania na wcześniejszy 15-sekundowy interwał. Publikowanie czeka na rzeczywiste potwierdzenie przyjęcia przez przekaźnik, toleruje pojedyncze zablokowane lub niedostępne przekaźniki, gdy inny żądany przekaźnik przyjmie potwierdzenie, oraz bezpiecznie ponownie wykorzystuje to samo podpisane potwierdzenie, gdy konieczna jest kolejna próba.

Połączenia NWC korzystające z tego samego przekaźnika używają teraz jednej wspólnej subskrypcji, zduplikowane żądania są ignorowane, a ponowne połączenia stosują ograniczone opóźnienie wykładnicze. Aktywność Lightning pozostaje aktualna bez nakładających się zapytań o historię LND.

Istniejące dane aplikacji i historia płatności zostają zachowane. Ręczna migracja nie jest wymagana.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
