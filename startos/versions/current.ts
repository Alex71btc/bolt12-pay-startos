import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.16:0',

  releaseNotes: {
    en_US: `Security maintenance release.

Updated rustls-webpki to 0.103.16 for the eMudhra certificate distrust fix, along with rustls, h2, tokio and anyhow. Updated LNDK server and CLI builds for AMD64 and ARM64.

No feature changes or manual migration required. Existing application data, payment history, NWC connections, Lightning Addresses and Nostr identities are preserved. Android Companion remains unchanged.

BOLT12 incoming and outgoing payments, Phoenix payer notes and NWC were successfully tested.`,

    de_DE: `Sicherheits- und Wartungsupdate.

rustls-webpki wurde auf 0.103.16 aktualisiert, einschließlich der Korrektur zum Vertrauensentzug für eMudhra-Zertifikate. Auch rustls, h2, tokio und anyhow wurden aktualisiert. Neue LNDK-Server- und CLI-Builds für AMD64 und ARM64.

Keine Funktionsänderungen und keine manuelle Migration erforderlich. Bestehende App-Daten, Zahlungsverläufe, NWC-Verbindungen, Lightning-Adressen und Nostr-Identitäten bleiben erhalten. Der Android Companion bleibt unverändert.

Ein- und ausgehende BOLT12-Zahlungen, Phoenix-Zahlungsnachrichten und NWC wurden erfolgreich getestet.`,

    es_ES: `Actualización de seguridad y mantenimiento.

Se actualizó rustls-webpki a 0.103.16 para incorporar la corrección de desconfianza de certificados eMudhra, junto con rustls, h2, tokio y anyhow. Se actualizaron el servidor y la CLI de LNDK para AMD64 y ARM64.

Sin cambios funcionales ni migración manual. Se conservan los datos, el historial de pagos, las conexiones NWC, las direcciones Lightning y las identidades Nostr. Android Companion no cambia.

Se probaron correctamente los pagos BOLT12 entrantes y salientes, las notas de Phoenix y NWC.`,

    fr_FR: `Mise à jour de sécurité et de maintenance.

rustls-webpki passe à 0.103.16 avec le correctif de défiance des certificats eMudhra. rustls, h2, tokio et anyhow ont également été mis à jour. Nouvelles versions du serveur et de la CLI LNDK pour AMD64 et ARM64.

Aucun changement fonctionnel ni migration manuelle. Les données, l'historique des paiements, les connexions NWC, les adresses Lightning et les identités Nostr sont conservés. Android Companion reste inchangé.

Les paiements BOLT12 entrants et sortants, les notes Phoenix et NWC ont été testés avec succès.`,

    pl_PL: `Aktualizacja bezpieczeństwa i konserwacji.

Zaktualizowano rustls-webpki do wersji 0.103.16 z poprawką dotyczącą wycofania zaufania do certyfikatów eMudhra, a także rustls, h2, tokio i anyhow. Zaktualizowano serwer i CLI LNDK dla AMD64 i ARM64.

Bez zmian funkcjonalnych i bez ręcznej migracji. Dane aplikacji, historia płatności, połączenia NWC, adresy Lightning i tożsamości Nostr pozostają zachowane. Android Companion pozostaje bez zmian.

Pomyślnie przetestowano płatności BOLT12 w obu kierunkach, wiadomości Phoenix oraz NWC.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
