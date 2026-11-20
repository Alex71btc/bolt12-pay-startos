import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.28:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.28 — Phoenixd connection lifecycle

- Pause and reactivate a Phoenixd connection. Background sync and notifications stop while paused; resuming does not replay payments from the pause.
- Keep existing Offers and BIP353 addresses available on alias pages while unavailable LNURL/BOLT11 fallbacks are disabled. Optionally hide the alias pages while paused.
- Remove saved Phoenixd credentials and choose whether to retain local payment history. Reconnecting the same node restores its wallet bindings.
- Optionally remove the wallet's local offers and alias publications, including matching Cloudflare DNS records. Cleanup preserves the public Setup address and recognizes TXT records split into quoted chunks.
- Recreate a missing public BIP353 record with LND after removing its former Phoenixd connection.

Requires StartOS 0.4.1 or later and LND 0.21.6-beta:3 or later. Phoenixd is optional and can run on another server. LNDK is unchanged.`,

    de_DE: `BOLT12 Pay 0.3.28 – Phoenixd-Verbindungen verwalten

- Phoenixd-Verbindungen pausieren und reaktivieren. Während der Pause stoppen Hintergrundabgleich und Benachrichtigungen. Beim Reaktivieren werden Zahlungen aus der Pause nicht nachgemeldet.
- Bestehende Offers und BIP353-Adressen bleiben auf Alias-Seiten verfügbar; nicht verfügbare LNURL-/BOLT11-Fallbacks werden deaktiviert. Alias-Seiten lassen sich während der Pause optional ausblenden.
- Gespeicherte Phoenixd-Zugangsdaten entfernen und lokale Zahlungshistorie wahlweise behalten. Beim erneuten Verbinden desselben Nodes werden die Wallet-Zuordnungen wiederhergestellt.
- Lokale Offers und Alias-Veröffentlichungen der Wallet auf Wunsch samt passenden Cloudflare-DNS-Einträgen entfernen. Die öffentliche Setup-Adresse bleibt geschützt; auf mehrere Textabschnitte verteilte TXT-Einträge werden erkannt.
- Einen fehlenden öffentlichen BIP353-Eintrag mit LND neu erstellen, auch nach Entfernen der zuvor zugeordneten Phoenixd-Verbindung.

Benötigt StartOS 0.4.1 oder neuer und LND 0.21.6-beta:3 oder neuer. Phoenixd ist optional und kann auf einem anderen Server laufen. LNDK bleibt unverändert.`,

    es_ES: `BOLT12 Pay 0.3.28 — Gestión de conexiones Phoenixd

- Pausa y reactiva una conexión Phoenixd. La sincronización y las notificaciones se detienen durante la pausa; al reactivarla no se repiten los avisos de los pagos de ese periodo.
- Mantén las ofertas y direcciones BIP353 en las páginas de alias, desactivando los métodos LNURL/BOLT11 no disponibles. Puedes ocultar las páginas durante la pausa.
- Elimina las credenciales guardadas y elige si conservar el historial local. Al volver a conectar el mismo nodo se recuperan sus asignaciones de cartera.
- Elimina opcionalmente las ofertas y publicaciones de alias de la cartera, incluidos los registros coincidentes de Cloudflare. La limpieza protege la dirección pública de Configuración y reconoce registros TXT divididos en varios fragmentos.
- Vuelve a crear con LND un registro BIP353 público ausente, incluso después de eliminar la conexión Phoenixd anterior.

Requiere StartOS 0.4.1 o posterior y LND 0.21.6-beta:3 o posterior. Phoenixd es opcional y puede ejecutarse en otro servidor. LNDK no cambia.`,

    fr_FR: `BOLT12 Pay 0.3.28 — Gestion des connexions Phoenixd

- Mettez une connexion Phoenixd en pause puis réactivez-la. La synchronisation et les notifications s’arrêtent pendant la pause ; la reprise ne renvoie pas les notifications des paiements de cette période.
- Conservez les offres et adresses BIP353 sur les pages d’alias en désactivant les méthodes LNURL/BOLT11 indisponibles. Vous pouvez masquer ces pages pendant la pause.
- Supprimez les identifiants enregistrés et choisissez de conserver ou non l’historique local. Reconnecter le même nœud rétablit les associations du portefeuille.
- Supprimez, si vous le souhaitez, les offres et publications d’alias du portefeuille, y compris les enregistrements Cloudflare correspondants. Le nettoyage protège l’adresse publique des paramètres et reconnaît les enregistrements TXT répartis en plusieurs fragments.
- Recréez avec LND un enregistrement BIP353 public manquant, même après avoir supprimé l’ancienne connexion Phoenixd.

Nécessite StartOS 0.4.1 ou ultérieur et LND 0.21.6-beta:3 ou ultérieur. Phoenixd est facultatif et peut fonctionner sur un autre serveur. LNDK reste inchangé.`,

    pl_PL: `BOLT12 Pay 0.3.28 — Zarządzanie połączeniami Phoenixd

- Wstrzymuj i wznawiaj połączenie Phoenixd. Synchronizacja i powiadomienia zatrzymują się podczas przerwy; wznowienie nie odtwarza powiadomień o płatnościach z tego okresu.
- Zachowaj oferty i adresy BIP353 na stronach aliasów, wyłączając niedostępne metody LNURL/BOLT11. Strony można opcjonalnie ukryć na czas przerwy.
- Usuń zapisane dane dostępowe i zdecyduj, czy zachować lokalną historię. Ponowne połączenie z tym samym węzłem przywraca przypisania portfela.
- Opcjonalnie usuń oferty i publikacje aliasów portfela wraz z pasującymi rekordami Cloudflare. Czyszczenie chroni publiczny adres z ustawień i rozpoznaje rekordy TXT podzielone na kilka fragmentów.
- Odtwórz brakujący publiczny rekord BIP353 za pomocą LND, także po usunięciu wcześniejszego połączenia Phoenixd.

Wymaga StartOS 0.4.1 lub nowszego oraz LND 0.21.6-beta:3 lub nowszego. Phoenixd jest opcjonalny i może działać na innym serwerze. LNDK pozostaje bez zmian.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
