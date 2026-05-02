# BOLT12 Pay – StartOS Service

Self-hosted Lightning payment and identity server with BOLT12 support for StartOS.

BOLT12 Pay combines:

* native BOLT12 offer creation and payment (via embedded LNDK)
* Lightning Address support (BIP353 + LNURL)
* BOLT11 fallback for compatibility
* Nostr Wallet Connect (NWC)
* self-hosted web UI

---

## Installation

This package is currently distributed via GitHub Releases only.

Releases:
https://github.com/Alex71btc/bolt12-pay-startos/releases

⚠️ Important:

* This package is **not available in the official StartOS Marketplace**
* Installation currently requires **manual sideloading**
* Use at your own risk
* Make sure you understand backup and restore before testing on production systems

---

# Option A — StartOS 0.4 Beta (Experimental)

This is the new experimental package for StartOS 0.4.

## Required LND Configuration (IMPORTANT)

Connect to your StartOS device via SSH and open:

```bash
nano /media/startos/data/package-data/volumes/lnd/data/main/lnd.conf
```

Add:

```ini
protocol.custom-message=513
protocol.custom-nodeann=39
protocol.custom-init=39
```

Then restart LND.

Without this, BOLT12 Offers will not work.

Creating BOLT12 offers requires at least one active public Lightning channel.

---

## Cloudflare Tunnel (Recommended for Public Access)

For StartOS 0.4, the recommended way to expose BOLT12 Pay publicly is via the Cloudflare Tunnel plugin.

This is especially useful for:

* Lightning Address / BIP353
* LNURL
* `.well-known` endpoints
* public payment pages
* remote access without direct port forwarding

### Step 1 — Install Cloudflare Tunnel Plugin

Cloudflare Tunnel is currently installed via manual sideload.

Release:

https://github.com/remcoros/cloudflared-startos/releases

Use the StartOS 0.4 package:

`040.2026.3.0:2-beta.1` (pre-release)

Install the `.s9pk` package manually via StartOS.

---

### Step 2 — Initial Tunnel Setup

After installation, open the Cloudflare Tunnel plugin.

StartOS will automatically generate a tunnel configuration export.

You will see:

* a QR code
* or a direct import link

Open this link (or scan the QR code).

This takes you to the Cloudflare Dashboard.

---

### Step 3 — Import Tunnel in Cloudflare Dashboard

The tunnel must first be imported into your Cloudflare account.

After this first import, the connector appears in Cloudflare.

However:

this is not enough yet.

You must also complete the next step inside Cloudflare Zero Trust.

---

### Step 4 — Import Again in Cloudflare Zero Trust

Go to:

Cloudflare Dashboard → Zero Trust → Networks → Connectors → Tunnels

There, import/activate the tunnel again so it becomes fully manageable inside Zero Trust.

Only after this step can you configure proper application routes and public hostnames.

This is the step many users miss.

---

### Step 5 — Configure Public Hostname

Inside StartOS, you can assign a hostname via:

System → Interfaces → Plugin: Cloudflare Tunnel → Add Public Hostname

However:

StartOS only lets you define the hostname itself.

It does **not** let you define the full internal service route.

The actual service target must match the internal StartOS service hostname.

Example:

```text
http://bolt-pay.startos:8081
```

Important:

The internal service name must exactly match the StartOS service hostname.

Example working route:

```text
startos040.alex71btc.com
→ http://bolt-pay.startos:8081
```

This final routing is configured in:

Cloudflare Zero Trust → Tunnel → Published Application Routes

not only inside StartOS.

Without the correct internal route, the hostname will not work.

---

## Notes

Direct public IPv4 exposure is possible in StartOS 0.4, but for services like:

* BOLT12 Pay
* Specter
* Lightning endpoints
* `.well-known`
* LNURL

Cloudflare Tunnel is strongly recommended instead of direct public exposure.

This is safer, cleaner, and works better with Cloudflare DNS automation.

---

# Option B — StartOS 0.3.5.1 Stable

This remains the stable production path for Raspberry Pi users.

## Requirement: LND BOLT12

* App name in StartOS: **LND BOLT12**
* Package ID: `lndbolt`

The default Start9 LND package does not support BOLT12 offers.

Repository:
https://github.com/Alex71btc/lnd-startos-bolt12

## Migration from official Start9 LND

1. Stop both:

   * LND
   * LND BOLT12

2. Open **LND BOLT12**

3. Run:

   * Actions → Import from Start9 LND

This preserves:

* node identity
* channels
* funds

---

## Features

* BOLT12 Offers
* LNURL and Lightning Address
* BOLT11 fallback
* Nostr Wallet Connect (NWC)
* self-hosted web UI
