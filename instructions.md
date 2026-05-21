# BOLT12 Pay

## Documentation

- [lndk-pay on GitHub](https://github.com/Alex71btc/lndk-pay) — the upstream project.
- [LNDK](https://github.com/lndk-org/lndk) — the BOLT12 runtime BOLT12 Pay embeds.

## What you get on StartOS

- A **Web UI** for a self-hosted Lightning payment endpoint: create and pay **BOLT12 offers**, plus **LNURL**, **Lightning Address** (BIP353), and **BOLT11** support.
- An embedded **LNDK** runtime that talks to your StartOS **LND** node to handle BOLT12 offers and payments.

## Before you start: enable onion messages on LND

BOLT12 offers require onion-message support on your LND node. The stock StartOS LND package does **not** enable these by default, and they are not exposed as toggles in its config UI, so they must be set on the LND node directly:

```ini
protocol.custom-message=513
protocol.custom-nodeann=39
protocol.custom-init=39
```

Add them to your LND node's configuration and **restart LND** before starting BOLT12 Pay. Creating BOLT12 offers also requires at least one active public Lightning channel. Without onion messages enabled, the rest of the app works but BOLT12 offers will not.

## Getting set up

1. Install and fully sync **LND**, with the onion-message options above enabled.
2. Install **BOLT12 Pay** and start it. It connects to LND automatically at `lnd.startos` using the read-only credentials mounted from the LND package — no macaroon copying required.
3. Open the **Web UI** interface.

## Public access (LNURL & Lightning Address)

LNURL, Lightning Address, and `.well-known` endpoints only resolve when BOLT12 Pay is reachable at a public hostname.

1. Give the **Web UI** a public address — a custom domain on clearnet, or a tunnel (e.g. the Cloudflare Tunnel package) if you can't forward ports.
2. Run the **Set Primary URL** action and choose that public address. BOLT12 Pay uses it as the base for LNURL and Lightning Address. Pick a clearnet/custom-domain URL — Tor and `.local` addresses won't resolve for external senders. (You can still override the base in the app's admin settings.)

For Tor or LAN-only use, BOLT12 offers and BOLT11 still work; only the public LNURL / Lightning Address flows need a public hostname.

## Using BOLT12 Pay

The Web UI is the application itself — create offers, generate payment pages, and manage LNURL / Lightning Address settings. The upstream documentation applies once you're in.
