import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.13:0',

  releaseNotes: {
    en_US: `This release adds the new BOLT12 Pay Android Companion, available directly from the mobile Pay page. It accepts BOLT12 offers, BOLT11 invoices, Lightning Addresses and Amethyst BIP321 payment links, then safely transfers them to your own BOLT12 Pay server for review. Payments are never started automatically. The Companion is available in German and English, and its saved server configuration is preserved across normal app updates.

Pay and Console are now one installable BOLT12 Pay PWA with a shared identity. This fixes mixed installation states, improves reinstall handling and provides separate standard and Android maskable launcher icons.

PWA installation requires your configured HTTPS address and a normal Chrome or Chromium tab. Firefox on Linux does not currently offer the same direct installation flow. On Android, open the Pay page directly in Chrome instead of an embedded app window. If separate BOLT12 Pay and BOLT12 Console web apps from an earlier version are still installed, remove both once, reload the Pay page and install the single BOLT12 Pay app again.

Existing application data, aliases, identities and payment history are preserved. No manual migration is required.`,

    de_DE: `Dieses Release fügt den neuen BOLT12 Pay Android Companion hinzu, der direkt auf der mobilen Pay-Seite angeboten wird. Er übernimmt BOLT12-Offers, BOLT11-Rechnungen, Lightning-Adressen und Amethyst-BIP321-Zahlungslinks und überträgt sie zur sicheren Prüfung an deinen eigenen BOLT12-Pay-Server. Zahlungen werden niemals automatisch gestartet. Der Companion ist auf Deutsch und Englisch verfügbar; seine gespeicherte Serverkonfiguration bleibt bei normalen App-Updates erhalten.

Pay und Console sind jetzt eine einzige installierbare BOLT12-Pay-PWA mit gemeinsamer Identität. Das behebt gemischte Installationszustände, verbessert Neuinstallationen und stellt getrennte Standard- und Android-Maskable-App-Symbole bereit.

Für die PWA-Installation wird deine eingerichtete HTTPS-Adresse und ein normaler Chrome- oder Chromium-Tab benötigt. Firefox unter Linux bietet diesen direkten Installationsablauf derzeit nicht an. Öffne die Pay-Seite unter Android direkt in Chrome statt in einem eingebetteten App-Fenster. Falls aus einer älteren Version noch getrennte Web-Apps für BOLT12 Pay und BOLT12 Console installiert sind, entferne beide einmal, lade die Pay-Seite neu und installiere anschließend die gemeinsame BOLT12-Pay-App.

Bestehende App-Daten, Aliase, Identitäten und der Zahlungsverlauf bleiben erhalten. Keine manuelle Migration erforderlich.`,

    es_ES: `Esta versión añade el nuevo Companion de BOLT12 Pay para Android, disponible directamente desde la página Pay en dispositivos móviles. Acepta ofertas BOLT12, facturas BOLT11, direcciones Lightning y enlaces de pago BIP321 de Amethyst, y los transfiere de forma segura a tu propio servidor BOLT12 Pay para que los revises. Los pagos nunca se inician automáticamente. El Companion está disponible en alemán e inglés y conserva la configuración guardada del servidor durante las actualizaciones normales de la aplicación.

Pay y Console son ahora una única PWA instalable de BOLT12 Pay con una identidad compartida. Esto corrige estados de instalación mezclados, mejora la reinstalación e incluye iconos separados estándar y adaptables para Android.

La instalación de la PWA requiere la dirección HTTPS configurada y una pestaña normal de Chrome o Chromium. Firefox en Linux no ofrece actualmente el mismo proceso de instalación directa. En Android, abre la página Pay directamente en Chrome en lugar de una ventana de aplicación integrada. Si todavía tienes instaladas por separado las aplicaciones web BOLT12 Pay y BOLT12 Console de una versión anterior, elimina ambas una vez, vuelve a cargar la página Pay e instala la aplicación BOLT12 Pay unificada.

Se conservan los datos, alias, identidades e historial de pagos existentes. No se requiere migración manual.`,

    fr_FR: `Cette version ajoute le nouveau Companion Android de BOLT12 Pay, proposé directement depuis la page Pay sur mobile. Il accepte les offres BOLT12, les factures BOLT11, les adresses Lightning et les liens de paiement BIP321 d'Amethyst, puis les transmet en toute sécurité à votre propre serveur BOLT12 Pay pour vérification. Aucun paiement n'est jamais lancé automatiquement. Le Companion est disponible en allemand et en anglais, et sa configuration serveur enregistrée est conservée lors des mises à jour normales de l'application.

Pay et Console forment désormais une seule PWA BOLT12 Pay installable avec une identité commune. Cela corrige les états d'installation incohérents, améliore la réinstallation et fournit des icônes distinctes standard et adaptatives pour Android.

L'installation de la PWA nécessite l'adresse HTTPS configurée et un onglet normal de Chrome ou Chromium. Firefox sous Linux ne propose pas actuellement le même parcours d'installation directe. Sous Android, ouvrez la page Pay directement dans Chrome plutôt que dans une fenêtre d'application intégrée. Si les applications web BOLT12 Pay et BOLT12 Console d'une version précédente sont encore installées séparément, supprimez-les une fois, rechargez la page Pay, puis installez l'application BOLT12 Pay unifiée.

Les données, alias, identités et l'historique des paiements existants sont conservés. Aucune migration manuelle n'est nécessaire.`,

    pl_PL: `Ta wersja dodaje nową aplikację BOLT12 Pay Companion dla systemu Android, dostępną bezpośrednio na mobilnej stronie Pay. Przyjmuje oferty BOLT12, faktury BOLT11, adresy Lightning oraz linki płatnicze BIP321 z Amethyst, a następnie bezpiecznie przekazuje je do własnego serwera BOLT12 Pay do sprawdzenia. Płatności nigdy nie są uruchamiane automatycznie. Companion jest dostępny w języku niemieckim i angielskim, a zapisana konfiguracja serwera pozostaje zachowana podczas zwykłych aktualizacji aplikacji.

Pay i Console są teraz jedną instalowalną aplikacją PWA BOLT12 Pay ze wspólną tożsamością. Rozwiązuje to problem mieszanych stanów instalacji, usprawnia ponowną instalację oraz zapewnia osobne standardowe i adaptacyjne ikony dla systemu Android.

Instalacja PWA wymaga skonfigurowanego adresu HTTPS oraz zwykłej karty Chrome lub Chromium. Firefox w systemie Linux nie oferuje obecnie takiego samego bezpośredniego procesu instalacji. W systemie Android otwórz stronę Pay bezpośrednio w Chrome zamiast we wbudowanym oknie aplikacji. Jeśli z poprzedniej wersji nadal są zainstalowane osobne aplikacje internetowe BOLT12 Pay i BOLT12 Console, usuń obie, ponownie załaduj stronę Pay, a następnie zainstaluj jedną wspólną aplikację BOLT12 Pay.

Istniejące dane aplikacji, aliasy, tożsamości i historia płatności zostają zachowane. Ręczna migracja nie jest wymagana.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
