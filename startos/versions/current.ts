import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.30:0',

  releaseNotes: {
    en_US: `Changing the BOLT12 Pay password now signs out existing browser sessions and locks NWC administration. This also applies to Reset UI Password in StartOS. Sign in with the new password and unlock NWC again.`,
    de_DE: `Eine Änderung des BOLT12-Pay-Passworts meldet bestehende Browser-Sitzungen ab und sperrt die NWC-Verwaltung. Das gilt auch für Reset UI Password in StartOS. Melde dich mit dem neuen Passwort an und entsperre NWC erneut.`,
    es_ES: `Al cambiar la contraseña de BOLT12 Pay se cierran las sesiones de navegador activas y se bloquea la administración de NWC. Esto también se aplica a Reset UI Password en StartOS. Inicia sesión con la nueva contraseña y vuelve a desbloquear NWC.`,
    fr_FR: `Changer le mot de passe de BOLT12 Pay ferme les sessions actives dans le navigateur et verrouille la gestion de NWC. Cela vaut aussi pour Reset UI Password dans StartOS. Reconnectez-vous avec le nouveau mot de passe et déverrouillez de nouveau NWC.`,
    pl_PL: `Zmiana hasła BOLT12 Pay wylogowuje aktywne sesje przeglądarki i blokuje zarządzanie NWC. Dotyczy to również akcji Reset UI Password w StartOS. Zaloguj się nowym hasłem i ponownie odblokuj NWC.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
