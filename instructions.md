# BOLT12 Pay

## Documentation

- [BOLT12 Pay user guide](https://github.com/Alex71btc/lndk-pay/blob/main/README.md) — setup and upstream documentation.
- [LNDK](https://github.com/lndk-org/lndk) — the BOLT12 runtime BOLT12 Pay embeds.

## What you get on StartOS

- A **Web UI** for a self-hosted Lightning payment endpoint: create and pay **BOLT12 offers**, plus **LNURL**, **Lightning Address** (BIP353), and optional **BOLT11 fallback** support.
- An embedded **LNDK** runtime that talks to your StartOS **LND** node to handle BOLT12 offers and payments.

## Before you start

BOLT12 offers require onion-message support on your LND node. BOLT12 Pay requires **LND 0.21.6-beta:3 or newer**, which advertises onion messages natively and shares the credentials this package needs, so there is nothing to configure on LND.

### Requirements for BOLT12 offers

Creating BOLT12 offers also requires:

- at least one active public Lightning channel
- a fully synced LND node

## Getting set up

1. Install and fully sync **LND** (0.21.6-beta:3 or newer).
2. Install **BOLT12 Pay**, then run **Create UI Password** from the Actions tab and save the password it shows. BOLT12 Pay does not start until you have.
3. Start BOLT12 Pay. It connects to LND automatically over the internal network using the credentials LND shares with it, mounted read-only — no macaroon copying required.
4. Open the **Web UI** interface, sign in with that password, and finish the setup wizard. You can leave its password fields empty to keep the password you have.

If you lose the password, run **Reset UI Password** for a new one. Existing browser sessions are signed out. Sign in with the new password and unlock NWC again if you need to manage connections.

## Public access (LNURL & Lightning Address)

LNURL, Lightning Address, and `.well-known` endpoints only resolve when BOLT12 Pay is reachable at a public hostname.

1. Give the **Web UI** a public address — a custom domain on clearnet, or a tunnel (e.g. the Cloudflare Tunnel package) if you can't forward ports.
2. Run the **Set Primary URL** action and choose that public address. BOLT12 Pay uses it as the base for LNURL and Lightning Address. Pick a clearnet/custom-domain URL — Tor and `.local` addresses won't resolve for external senders. (You can still override the base in the app's admin settings.)

If a BIP353 TXT lookup cannot be answered by the DNS resolver inside StartOS, BOLT12 Pay automatically retries that lookup through Cloudflare DNS-over-HTTPS on port 443. The service logs show when the fallback is used and whether it succeeds; no extra setup is required.

For Tor or LAN-only use, BOLT12 offers and BOLT11 still work; only the public LNURL / Lightning Address flows need a public hostname.

### Domain configuration guide

When using Cloudflare DNS automation, Lightning Address (BIP353), or LNURL, make sure you understand the difference between:

- Cloudflare Zone Domain
- BIP353 Address Domain
- LNURL Domain/Subdomain

Detailed setup instructions:

https://github.com/Alex71btc/lndk-pay/blob/main/README.md#-domain-configuration-bip353-vs-lnurl

The guide includes:

- recommended domain structure
- root domain vs subdomain examples
- Cloudflare Zone configuration
- common setup mistakes

## Android payment notifications

BOLT12 Pay can send optional end-to-end encrypted incoming-payment notifications to its signed Android Companion through UnifiedPush. No Google or Firebase service is built into the Companion.

Before pairing:

- Give the **Web UI** a public HTTPS address and use that address as the server URL in the Companion.
- Install a UnifiedPush distributor app such as ntfy or Sunup on the Android device. An ntfy server by itself is not sufficient.

To pair a device:

1. Download and install the signed Companion offered by the BOLT12 Pay mobile page.
2. Enter the public HTTPS BOLT12 Pay address in the Companion.
3. Open **Android payment notifications** in the authenticated Pay interface and create a pairing QR code or link.
4. Complete the direct StartOS pairing, grant Android notification permission and select the UnifiedPush distributor.

Paired devices can be revoked from BOLT12 Pay or the Companion. Private payment comments are optional and disabled by default. When enabled, supported comments are sanitized before display, while a secure lock screen receives only a generic incoming-payment notification.

## Using BOLT12 Pay

The Web UI is the application itself — create offers, generate payment pages, and manage LNURL / Lightning Address settings. The upstream documentation applies once you're in.

Public Alias pages do not create BOLT11 invoices when someone opens or refreshes them. A visitor can generate one optional fallback invoice only if an older wallet needs it.

If you enable Nostr Zap notifications, BOLT12 Pay encrypts the Notification nsec and private app signer. Your LND node unlocks them automatically after every StartOS, LND, or application restart; no extra password or manual unlock is required.
