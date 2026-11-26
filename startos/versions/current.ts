import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.31:0',

  releaseNotes: {
    en_US: `Important security update. Improved API authentication, CSRF protection and browser security. All users are strongly encouraged to upgrade. Some existing NWC connections may stop working after upgrading. If affected, create a new connection, reconnect your client, verify that it works and delete the old connection. Do not downgrade to 0.3.30. Special thanks to dritzps and Matt Hill (Start9).`,
    de_DE: `Wichtiges Sicherheitsupdate. Verbesserte API-Authentifizierung, CSRF-Schutz und Browsersicherheit. Allen Nutzern wird das Update dringend empfohlen. Einige bestehende NWC-Verbindungen funktionieren nach dem Update möglicherweise nicht mehr. Erstelle in diesem Fall eine neue Verbindung, verbinde deinen Client erneut, überprüfe die Funktion und lösche die alte Verbindung. Führe kein Downgrade auf 0.3.30 durch. Besonderer Dank an dritzps und Matt Hill (Start9).`,
    es_ES: `Actualización de seguridad importante. Mejoras en la autenticación de la API, la protección CSRF y la seguridad del navegador. Se recomienda encarecidamente actualizar. Algunas conexiones NWC existentes pueden dejar de funcionar. Si ocurre, crea una nueva conexión, vuelve a conectar tu cliente, comprueba que funciona y elimina la conexión anterior. No vuelvas a la versión 0.3.30. Agradecimientos especiales a dritzps y Matt Hill (Start9).`,
    fr_FR: `Mise à jour de sécurité importante. Amélioration de l'authentification API, de la protection CSRF et de la sécurité du navigateur. La mise à jour est fortement recommandée. Certaines connexions NWC existantes peuvent cesser de fonctionner. Dans ce cas, créez une nouvelle connexion, reconnectez votre client, vérifiez son fonctionnement et supprimez l'ancienne connexion. Ne revenez pas à la version 0.3.30. Remerciements à dritzps et Matt Hill (Start9).`,
    pl_PL: `Ważna aktualizacja bezpieczeństwa. Ulepszone uwierzytelnianie API, ochrona CSRF i bezpieczeństwo przeglądarki. Aktualizacja jest zdecydowanie zalecana. Niektóre istniejące połączenia NWC mogą przestać działać. W takim przypadku utwórz nowe połączenie, połącz ponownie klienta, sprawdź działanie i usuń stare połączenie. Nie wracaj do wersji 0.3.30. Szczególne podziękowania dla dritzps i Matt Hill (Start9).`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
