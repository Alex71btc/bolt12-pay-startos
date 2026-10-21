import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.15:0',

  releaseNotes: {
    en_US: `Incoming BOLT12 payer notes are now displayed in Lightning Activity separately from the offer memo, including messages from Phoenix and phoenixd. Unicode, emojis, long messages and line breaks are preserved without additional application-level truncation. Notes remain searchable and are retained after restarts.

Includes updated LNDK server and CLI builds while preserving native Onion Messages, amountless offers, offer memos and invoice reuse.

Existing application data, payment history, NWC connections, aliases, identities and Keysend messages are preserved. Migration is automatic; notes discarded by older versions cannot be recovered. The signed Android Companion remains unchanged. Run only one LNDK instance per LND node.`,

    de_DE: `Eingehende BOLT12-Zahlungsnachrichten werden jetzt in der Lightning-Aktivität getrennt vom Offer-Memo angezeigt, auch Nachrichten von Phoenix und phoenixd. Unicode, Emojis, lange Nachrichten und Zeilenumbrüche bleiben ohne zusätzliche Kürzung durch die Anwendung erhalten. Die Nachrichten sind durchsuchbar und bleiben nach Neustarts gespeichert.

Enthält aktualisierte LNDK-Server- und CLI-Builds. Native Onion Messages, betragsfreie Offers, Offer-Memos und die Wiederverwendung von Rechnungen bleiben erhalten.

Bestehende App-Daten, Zahlungsverlauf, NWC-Verbindungen, Aliase, Identitäten und Keysend-Nachrichten bleiben erhalten. Die Migration erfolgt automatisch; von älteren Versionen verworfene Nachrichten können nicht wiederhergestellt werden. Der signierte Android Companion bleibt unverändert. Pro LND-Node darf nur eine LNDK-Instanz laufen.`,

    es_ES: `Las notas de pago BOLT12 entrantes ahora aparecen en la actividad Lightning por separado de la descripción de la oferta, incluidos los mensajes de Phoenix y phoenixd. Se conservan Unicode, emojis, mensajes largos y saltos de línea sin truncamiento adicional de la aplicación. Las notas se pueden buscar y permanecen guardadas después de reiniciar.

Incluye versiones actualizadas del servidor y la CLI de LNDK, manteniendo Onion Messages nativos, ofertas sin importe fijo, descripciones de ofertas y reutilización de facturas.

Se conservan los datos, el historial de pagos, las conexiones NWC, los alias, las identidades y los mensajes Keysend. La migración es automática; las notas descartadas por versiones anteriores no se pueden recuperar. Android Companion no cambia. Utilice solo una instancia de LNDK por nodo LND.`,

    fr_FR: `Les notes de paiement BOLT12 entrantes apparaissent désormais dans l'activité Lightning séparément du mémo de l'offre, y compris les messages de Phoenix et phoenixd. Unicode, les emojis, les messages longs et les sauts de ligne sont conservés sans troncature supplémentaire par l'application. Les notes restent consultables et sont conservées après redémarrage.

Inclut des versions actualisées du serveur et de la CLI LNDK, tout en conservant les Onion Messages natifs, les offres sans montant fixe, les mémos d'offre et la réutilisation des factures.

Les données, l'historique des paiements, les connexions NWC, les alias, les identités et les messages Keysend sont conservés. La migration est automatique ; les notes supprimées par les anciennes versions ne peuvent pas être récupérées. Android Companion reste inchangé. N'utilisez qu'une seule instance LNDK par nœud LND.`,

    pl_PL: `Przychodzące wiadomości płatnicze BOLT12 są teraz wyświetlane w historii Lightning oddzielnie od opisu oferty, w tym wiadomości z Phoenix i phoenixd. Unicode, emoji, długie wiadomości i podziały wierszy są zachowywane bez dodatkowego skracania przez aplikację. Wiadomości można wyszukiwać i pozostają zapisane po ponownym uruchomieniu.

Zawiera zaktualizowane wersje serwera i CLI LNDK, zachowując natywne Onion Messages, oferty bez ustalonej kwoty, opisy ofert i ponowne wykorzystanie faktur.

Dane aplikacji, historia płatności, połączenia NWC, aliasy, tożsamości i wiadomości Keysend pozostają zachowane. Migracja jest automatyczna; wiadomości odrzuconych przez starsze wersje nie można odzyskać. Android Companion pozostaje bez zmian. Na jeden węzeł LND należy uruchamiać tylko jedną instancję LNDK.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
