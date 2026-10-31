import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.18:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.18 — Payment and Login UX Improvements

v0.3.17 — Payments
- Submit payments with Enter, preserving validation and duplicate-payment protection.
- Compact QR scanner, clipboard and saved-contact controls beside the Pay field.
- Smart clipboard detection for BOLT12, BOLT11, LNURL, Lightning Addresses and node public keys.
- Copy Lightning Addresses and BOLT12 offers directly from the Pay field.
- Improved saved-contact detection, mobile notifications and clipboard fallback.

v0.3.18 — Login
- Submit login using Enter, the mobile keyboard action or the Login button.
- Improved automatic login with saved Chrome password-manager credentials on Android.
- Prevent duplicate login requests and validate empty submissions.
- Improved localized error messages, rate-limit feedback and safe redirects.

No manual migration required. Existing offers, payment history, Lightning Addresses, Nostr identities and NWC connections are preserved. LNDK remains at 0.3.16. Android Companion remains unchanged.`,

    de_DE: `BOLT12 Pay 0.3.18 — Verbesserungen für Zahlungen und Anmeldung

v0.3.17 — Zahlungen
- Zahlungen direkt mit Enter starten, inklusive Validierung und Schutz vor Doppelzahlungen.
- Kompakte Schaltflächen für QR-Scanner, Zwischenablage und Kontakte neben dem Zahlungsfeld.
- Automatische Erkennung von BOLT12, BOLT11, LNURL, Lightning-Adressen und Node-Public-Keys aus der Zwischenablage.
- Lightning-Adressen und BOLT12-Offers direkt aus dem Zahlungsfeld kopieren.
- Verbesserte Kontakterkennung, mobile Benachrichtigungen und Zwischenablage-Fallbacks.

v0.3.18 — Anmeldung
- Anmeldung mit Enter, der mobilen Tastaturaktion oder dem Login-Button.
- Verbesserte automatische Anmeldung mit gespeicherten Chrome-Passwörtern unter Android.
- Schutz vor doppelten Login-Anfragen und Validierung leerer Eingaben.
- Verbesserte übersetzte Fehlermeldungen, Sperrzeit-Anzeigen und sichere Weiterleitungen.

Keine manuelle Datenmigration erforderlich. Bestehende Offers, Zahlungsverläufe, Lightning-Adressen, Nostr-Identitäten und NWC-Verbindungen bleiben erhalten. LNDK bleibt auf 0.3.16. Der Android Companion bleibt unverändert.`,

    es_ES: `BOLT12 Pay 0.3.18 — Mejoras en pagos e inicio de sesión

v0.3.17 — Pagos
- Enviar pagos con Enter, manteniendo la validación y la protección contra pagos duplicados.
- Accesos directos al escáner QR, portapapeles y contactos junto al campo de pago.
- Detección de BOLT12, BOLT11, LNURL, direcciones Lightning y claves públicas de nodos.
- Copiar direcciones Lightning y ofertas BOLT12 directamente desde el campo de pago.
- Mejoras en contactos guardados, avisos móviles y alternativas del portapapeles.

v0.3.18 — Inicio de sesión
- Iniciar sesión con Enter, el teclado móvil o el botón Login.
- Inicio de sesión automático mejorado con contraseñas guardadas en Chrome para Android.
- Protección contra solicitudes duplicadas y validación de campos vacíos.
- Mejoras en mensajes de error traducidos, límites de intentos y redirecciones seguras.

No se requiere migración manual. Se conservan las ofertas, el historial de pagos, las direcciones Lightning, las identidades Nostr y las conexiones NWC. LNDK permanece en 0.3.16. Android Companion no cambia.`,

    fr_FR: `BOLT12 Pay 0.3.18 — Améliorations des paiements et de la connexion

v0.3.17 — Paiements
- Envoyer un paiement avec Entrée, avec validation et protection contre les doublons.
- Accès rapide au scanner QR, au presse-papiers et aux contacts près du champ de paiement.
- Détection des offres BOLT12, factures BOLT11, LNURL, adresses Lightning et clés publiques de nœuds.
- Copier directement les adresses Lightning et les offres BOLT12.
- Amélioration des contacts enregistrés, notifications mobiles et solutions de repli du presse-papiers.

v0.3.18 — Connexion
- Se connecter avec Entrée, le clavier mobile ou le bouton Login.
- Connexion automatique améliorée avec les mots de passe enregistrés dans Chrome sur Android.
- Protection contre les connexions simultanées et validation des champs vides.
- Amélioration des erreurs traduites, des messages de limitation et des redirections sécurisées.

Aucune migration manuelle requise. Les offres, l'historique des paiements, les adresses Lightning, les identités Nostr et les connexions NWC sont conservés. LNDK reste en version 0.3.16. Android Companion reste inchangé.`,

    pl_PL: `BOLT12 Pay 0.3.18 — Ulepszenia płatności i logowania

v0.3.17 — Płatności
- Wysyłanie płatności klawiszem Enter z walidacją i ochroną przed duplikatami.
- Szybki dostęp do skanera QR, schowka i kontaktów obok pola płatności.
- Rozpoznawanie ofert BOLT12, faktur BOLT11, LNURL, adresów Lightning i kluczy publicznych węzłów.
- Kopiowanie adresów Lightning i ofert BOLT12 bezpośrednio z pola płatności.
- Lepsza obsługa zapisanych kontaktów, powiadomień mobilnych i schowka.

v0.3.18 — Logowanie
- Logowanie klawiszem Enter, klawiaturą mobilną lub przyciskiem Login.
- Ulepszone automatyczne logowanie z zapisanymi hasłami Chrome na Androidzie.
- Ochrona przed równoczesnymi żądaniami i sprawdzanie pustych pól.
- Lepsze komunikaty błędów, informacje o limitach prób i bezpieczne przekierowania.

Nie jest wymagana ręczna migracja. Oferty, historia płatności, adresy Lightning, tożsamości Nostr i połączenia NWC zostają zachowane. LNDK pozostaje w wersji 0.3.16. Android Companion pozostaje bez zmian.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
