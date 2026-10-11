import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.7:0',

  releaseNotes: {
    en_US: `BOLT12 payments now allow more time for an invoice response, improving reliability with slower wallets and onion-message routes.

Repeated invoice requests now reuse the same invoice instead of creating unpaid duplicates in LND.

Outgoing BOLT12 payments appear as one Lightning Activity entry, including the routing fee, without an additional underlying BOLT11 payment row.

The bundled LNDK runtime now supports LND 0.21 native onion messages on amd64 and arm64. Amountless offers and descriptive invoice memos remain supported.

Existing application data and payment history are preserved. No manual migration is required.`,

    de_DE: `BOLT12-Zahlungen warten jetzt länger auf eine Rechnungsantwort. Das verbessert die Zuverlässigkeit bei langsameren Wallets und Onion-Message-Routen.

Wiederholte Rechnungsanfragen verwenden jetzt dieselbe Rechnung, statt unbezahlte Duplikate in LND zu erzeugen.

Ausgehende BOLT12-Zahlungen erscheinen als ein einzelner Eintrag in der Lightning-Aktivität, einschließlich Routinggebühr und ohne zusätzlichen zugrunde liegenden BOLT11-Zahlungseintrag.

Die mitgelieferte LNDK-Laufzeit unterstützt jetzt native Onion Messages von LND 0.21 auf amd64 und arm64. Betragsfreie Offers und aussagekräftige Rechnungsnotizen bleiben unterstützt.

Bestehende App-Daten und der Zahlungsverlauf bleiben erhalten. Keine manuelle Migration erforderlich.`,

    es_ES: `Los pagos BOLT12 ahora esperan más tiempo una respuesta de factura, lo que mejora la fiabilidad con monederos y rutas de mensajes onion más lentos.

Las solicitudes de factura repetidas ahora reutilizan la misma factura en lugar de crear duplicados sin pagar en LND.

Los pagos BOLT12 salientes aparecen como una sola entrada en la actividad Lightning, incluida la comisión de enrutamiento, sin una entrada adicional del pago BOLT11 subyacente.

La versión incluida de LNDK ahora admite mensajes onion nativos de LND 0.21 en amd64 y arm64. Se mantienen las ofertas sin importe y las notas descriptivas de las facturas.

Se conservan los datos existentes de la aplicación y el historial de pagos. No se requiere migración manual.`,

    fr_FR: `Les paiements BOLT12 attendent désormais plus longtemps une réponse de facture, ce qui améliore la fiabilité avec les portefeuilles et les routes de messages onion plus lents.

Les demandes de facture répétées réutilisent maintenant la même facture au lieu de créer des doublons impayés dans LND.

Les paiements BOLT12 sortants apparaissent comme une seule entrée dans l'activité Lightning, frais de routage inclus, sans entrée supplémentaire pour le paiement BOLT11 sous-jacent.

La version intégrée de LNDK prend désormais en charge les messages onion natifs de LND 0.21 sur amd64 et arm64. Les offres sans montant et les notes descriptives des factures restent prises en charge.

Les données existantes de l'application et l'historique des paiements sont conservés. Aucune migration manuelle n'est nécessaire.`,

    pl_PL: `Płatności BOLT12 czekają teraz dłużej na odpowiedź z fakturą, co zwiększa niezawodność w przypadku wolniejszych portfeli i tras wiadomości onion.

Powtarzające się żądania faktury wykorzystują teraz tę samą fakturę zamiast tworzyć nieopłacone duplikaty w LND.

Wychodzące płatności BOLT12 są wyświetlane jako jeden wpis w aktywności Lightning, wraz z opłatą za trasowanie i bez dodatkowego wpisu bazowej płatności BOLT11.

Dołączone środowisko LNDK obsługuje teraz natywne wiadomości onion w LND 0.21 na amd64 i arm64. Oferty bez określonej kwoty oraz opisowe notatki faktur pozostają obsługiwane.

Istniejące dane aplikacji i historia płatności zostają zachowane. Ręczna migracja nie jest wymagana.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
