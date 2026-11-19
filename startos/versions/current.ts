import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.27:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.27 — Phoenixd and backend switching

- Switch between LND and Phoenixd. Connect an existing Phoenixd wallet in Setup and switch backends from Pay or Console. Offers, aliases and Nostr Wallet Connect connections stay linked to their original wallet.
- Unified history and CSV export. View both wallets in Lightning Activity or filter by LND or Phoenixd. Export either wallet or both as CSV for a date range you choose.
- More ways to use LNURL. Pay LNURL links and Lightning addresses, sign in with LNURL-auth, and redeem LNURL-withdraw vouchers by scanning a QR code or pasting a link.
- Fewer steps to pay. Setup starts with backend selection. The updated QR menu opens the scanner or decoder. Expand Create Offer to decode an offer, and see the BOLT12 minimum amount in Pay.
- Open a payment from its Android notification. Companion 1.1.4 shows which wallet received the payment. Tap the notification to jump to the matching entry in the full history.
- Import Phoenixd history without a flood of notifications. Past payments appear in Lightning Activity. The update stops queued notifications from earlier history imports. New payments still notify.

Requires StartOS 0.4.1 or later and LND 0.21.6-beta:3 or later. Phoenixd is optional and can run on a separate server.`,

    de_DE: `BOLT12 Pay 0.3.27 – Phoenixd und Backend-Wechsel

- Zwischen LND und Phoenixd wechseln. Verbinde in Setup eine bestehende Phoenixd-Wallet und wechsle direkt auf der Pay-Seite oder in der Konsole zwischen den Backends. Offers, Aliasse und Nostr Wallet Connect-Verbindungen bleiben ihrer ursprünglichen Wallet zugeordnet.
- Gemeinsame Historie und CSV-Export. Zeige in Lightning Activity beide Wallets zusammen an oder filtere nach LND oder Phoenixd. Exportiere die Buchungen einer oder beider Wallets für einen frei gewählten Zeitraum als CSV, etwa für deine Buchhaltung.
- Mehr Möglichkeiten mit LNURL. Bezahle LNURL-Links und Lightning-Adressen, melde dich per LNURL-auth an und löse LNURL-withdraw-Gutscheine per QR-Scan oder eingefügtem Link ein.
- Weniger Schritte beim Bezahlen. Setup beginnt mit der Backend-Auswahl. Das überarbeitete QR-Menü führt zum Scannen und Dekodieren. Der Offer-Decoder steckt jetzt im aufklappbaren Bereich „Offer erstellen“. Beim Bezahlen zeigt die App den BOLT12-Mindestbetrag an.
- Konkrete Zahlung aus dem Android-Push öffnen. Companion 1.1.4 zeigt die empfangende Wallet an. Ein Tipp springt zum passenden Eintrag in der vollständigen Historie.
- Phoenixd-Historie ohne Benachrichtigungsflut. Alte Zahlungen werden in die Historie übernommen. Das Update stoppt noch wartende Pushs aus früheren Historienimporten. Neue Zahlungseingänge werden gemeldet.

Das Paket benötigt StartOS 0.4.1 oder neuer und LND 0.21.6-beta:3 oder neuer. Phoenixd ist optional und kann auf einem separaten Server laufen.`,

    es_ES: `BOLT12 Pay 0.3.27 — Phoenixd y cambio de backend

- Cambia entre LND y Phoenixd. Conecta una cartera Phoenixd existente en Configuración y elige el backend desde Pay o la consola. Las ofertas, los alias y las conexiones de Nostr Wallet Connect siguen vinculados a su cartera original.
- Historial unificado y exportación CSV. Consulta las dos carteras en Lightning Activity o filtra por LND o Phoenixd. Exporta una o ambas carteras a CSV para el intervalo de fechas que elijas.
- Más opciones con LNURL. Paga enlaces LNURL y direcciones Lightning, inicia sesión con LNURL-auth y canjea vales LNURL-withdraw escaneando un código QR o pegando un enlace.
- Menos pasos para pagar. La configuración empieza con la elección del backend. El nuevo menú QR abre el escáner o el decodificador. Despliega Crear oferta para decodificar una oferta y consulta el importe mínimo de BOLT12 en Pay.
- Abre un pago desde su notificación de Android. Companion 1.1.4 muestra qué cartera recibió el pago. Toca la notificación para ir al movimiento correspondiente dentro del historial completo.
- Importa el historial de Phoenixd sin una avalancha de notificaciones. Los pagos anteriores aparecen en el historial. La actualización detiene las notificaciones pendientes de importaciones anteriores y los pagos nuevos siguen generando avisos.

Requiere StartOS 0.4.1 o posterior y LND 0.21.6-beta:3 o posterior. Phoenixd es opcional y puede ejecutarse en otro servidor.`,

    fr_FR: `BOLT12 Pay 0.3.27 — Phoenixd et changement de backend

- Passez de LND à Phoenixd. Connectez un portefeuille Phoenixd existant dans les paramètres et changez de backend depuis Pay ou la console. Les offres, alias et connexions Nostr Wallet Connect restent liés à leur portefeuille d’origine.
- Historique commun et export CSV. Affichez les deux portefeuilles dans Lightning Activity ou filtrez par LND ou Phoenixd. Exportez un portefeuille ou les deux au format CSV pour la période de votre choix.
- Plus de possibilités avec LNURL. Payez des liens LNURL et des adresses Lightning, connectez-vous avec LNURL-auth et utilisez vos bons LNURL-withdraw en scannant un QR code ou en collant un lien.
- Moins d’étapes pour payer. La configuration commence par le choix du backend. Le menu QR ouvre le scanner ou le décodeur. Dépliez la section Créer une offre pour décoder une offre. Pay affiche le montant minimum BOLT12.
- Ouvrez un paiement depuis sa notification Android. Companion 1.1.4 affiche le portefeuille qui a reçu le paiement. Touchez la notification pour afficher le paiement dans l’historique complet.
- Importez l’historique Phoenixd sans avalanche de notifications. Les anciens paiements figurent dans l’historique. La mise à jour annule les notifications encore en attente issues des imports précédents. Les nouveaux paiements déclenchent toujours une notification.

Nécessite StartOS 0.4.1 ou ultérieur et LND 0.21.6-beta:3 ou ultérieur. Phoenixd est facultatif et peut fonctionner sur un autre serveur.`,

    pl_PL: `BOLT12 Pay 0.3.27 — Phoenixd i przełączanie backendów

- Przełączaj się między LND i Phoenixd. Podłącz istniejący portfel Phoenixd w ustawieniach i zmieniaj backend na stronie Pay lub w konsoli. Oferty, aliasy i połączenia Nostr Wallet Connect zachowują przypisanie do pierwotnego portfela.
- Wspólna historia i eksport CSV. Wyświetl oba portfele w Lightning Activity lub filtruj według LND albo Phoenixd. Eksportuj jeden portfel lub oba do CSV za wybrany okres.
- Więcej możliwości z LNURL. Płać za pomocą linków LNURL i adresów Lightning, loguj się przez LNURL-auth i realizuj kupony LNURL-withdraw po zeskanowaniu kodu QR lub wklejeniu linku.
- Mniej kroków przy płaceniu. Konfiguracja zaczyna się od wyboru backendu. Menu QR otwiera skaner lub dekoder. Rozwiń sekcję tworzenia oferty, aby zdekodować ofertę. Na stronie Pay zobaczysz minimalną kwotę BOLT12.
- Otwórz płatność z powiadomienia na Androidzie. Companion 1.1.4 pokazuje portfel, który otrzymał płatność. Dotknięcie powiadomienia przenosi do odpowiedniego wpisu w pełnej historii.
- Importuj historię Phoenixd bez lawiny powiadomień. Starsze płatności trafiają do historii. Aktualizacja wstrzymuje oczekujące powiadomienia z wcześniejszych importów. Nowe płatności nadal wywołują powiadomienia.

Wymaga StartOS 0.4.1 lub nowszego oraz LND 0.21.6-beta:3 lub nowszego. Phoenixd jest opcjonalny i może działać na osobnym serwerze.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
