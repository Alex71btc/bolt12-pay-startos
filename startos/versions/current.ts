import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.14:0',

  releaseNotes: {
    en_US: `Improves Nostr Wallet Connect (NWC) reliability when relays become temporarily unavailable or connections are interrupted. Reduces unnecessary reconnect attempts and relay traffic, improves recovery after connection failures and helps prevent repeated connection loops.

Existing application data, NWC connections, aliases, identities and payment history are preserved. No manual migration is required.`,

    de_DE: `Verbessert die Zuverlässigkeit von Nostr Wallet Connect (NWC), insbesondere wenn Relays vorübergehend nicht erreichbar sind oder Verbindungen unterbrochen werden. Reduziert unnötige Neuverbindungsversuche und Relay-Traffic, verbessert die Wiederherstellung nach Verbindungsfehlern und verhindert wiederholte Verbindungsschleifen.

Bestehende App-Daten, NWC-Verbindungen, Aliase, Identitäten und der Zahlungsverlauf bleiben erhalten. Keine manuelle Migration erforderlich.`,

    es_ES: `Mejora la fiabilidad de Nostr Wallet Connect (NWC) cuando los relays no están disponibles temporalmente o se interrumpen las conexiones. Reduce los intentos innecesarios de reconexión y el tráfico de los relays, mejora la recuperación tras los fallos de conexión y ayuda a evitar bucles repetidos de reconexión.

Se conservan los datos de la aplicación, las conexiones NWC, los alias, las identidades y el historial de pagos. No se requiere migración manual.`,

    fr_FR: `Améliore la fiabilité de Nostr Wallet Connect (NWC) lorsque les relais sont temporairement indisponibles ou que les connexions sont interrompues. Réduit les tentatives de reconnexion inutiles et le trafic des relais, améliore la reprise après une erreur de connexion et aide à éviter les boucles de reconnexion.

Les données de l'application, les connexions NWC, les alias, les identités et l'historique des paiements sont conservés. Aucune migration manuelle n'est nécessaire.`,

    pl_PL: `Poprawia niezawodność Nostr Wallet Connect (NWC), gdy przekaźniki są tymczasowo niedostępne lub połączenia zostają przerwane. Ogranicza niepotrzebne próby ponownego łączenia i ruch sieciowy przekaźników, usprawnia odzyskiwanie po błędach połączenia i pomaga zapobiegać powtarzającym się pętlom ponownego łączenia.

Istniejące dane aplikacji, połączenia NWC, aliasy, tożsamości i historia płatności zostają zachowane. Ręczna migracja nie jest wymagana.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
