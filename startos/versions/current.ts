import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.32:1',

  releaseNotes: {
    en_US: `Restored Nostr Zap receipts and native Zap notifications for LND and Phoenixd. Hardened outgoing Zap receipt relay connections. Added NWC compatibility warnings. If a connection is marked as incompatible, create a new connection, reconnect your client, verify that it works and delete the old connection. All security improvements from 0.3.31 are retained. Package downgrades are disabled for security reasons.`,
    de_DE: `Nostr-Zap-Receipts und native Zap-Benachrichtigungen für LND und Phoenixd wiederhergestellt. Ausgehende Relay-Verbindungen für Zap-Receipts abgesichert. NWC-Kompatibilitätswarnungen ergänzt. Erstelle bei einer inkompatiblen Verbindung eine neue Verbindung, verbinde deinen Client erneut, überprüfe die Funktion und lösche die alte Verbindung. Alle Sicherheitsverbesserungen aus 0.3.31 bleiben erhalten. Paket-Downgrades sind aus Sicherheitsgründen deaktiviert.`,
    es_ES: `Restaurados los recibos de Zaps de Nostr y las notificaciones nativas para LND y Phoenixd. Mayor seguridad en las conexiones salientes a relays para recibos de Zaps. Añadidas advertencias de compatibilidad NWC. Si una conexión es incompatible, crea una nueva, vuelve a conectar tu cliente, comprueba que funciona y elimina la anterior. Se mantienen todas las mejoras de seguridad de 0.3.31. Las instalaciones de versiones anteriores están deshabilitadas por motivos de seguridad.`,
    fr_FR: `Rétablissement des reçus de Zaps Nostr et des notifications natives pour LND et Phoenixd. Sécurisation renforcée des connexions sortantes aux relais pour les reçus de Zaps. Ajout des avertissements de compatibilité NWC. Si une connexion est incompatible, créez-en une nouvelle, reconnectez votre client, vérifiez son fonctionnement et supprimez l'ancienne connexion. Toutes les améliorations de sécurité de la version 0.3.31 sont conservées. Les retours à une version antérieure sont désactivés pour des raisons de sécurité.`,
    pl_PL: `Przywrócono potwierdzenia Zapów Nostr i natywne powiadomienia dla LND oraz Phoenixd. Wzmocniono bezpieczeństwo wychodzących połączeń z przekaźnikami dla potwierdzeń Zapów. Dodano ostrzeżenia o zgodności NWC. Jeśli połączenie jest niezgodne, utwórz nowe, połącz ponownie klienta, sprawdź działanie i usuń stare połączenie. Zachowano wszystkie poprawki bezpieczeństwa z wersji 0.3.31. Instalowanie starszych wersji pakietu jest zablokowane ze względów bezpieczeństwa.`,
  },

  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
