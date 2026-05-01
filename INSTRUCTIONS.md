# BOLT12 Pay – Setup Guide (StartOS 0.4)

Self-hosted Lightning payment and identity server with full BOLT12 support.

---

## 🌍 Overview

BOLT12 Pay combines:

- native BOLT12 offer creation and payment (via embedded LNDK)
- Lightning Address support (BIP353 + LNURL)
- BOLT11 fallback for compatibility
- Nostr Wallet Connect (NWC)
- self-hosted web UI

---

## ⚠️ Important

- Not yet available in StartOS Marketplace
- Installation via manual sideload
- Use only if you understand backups

---

# 1️⃣ Requirements

- StartOS 0.4
- LND running
- at least one public Lightning channel

Optional:

- Domain
- Cloudflare account

---

# 2️⃣ REQUIRED: LND Configuration (BOLT12)

Edit:

sudo nano /media/startos/data/package-data/volumes/lnd/data/main/lnd.conf

Add:

[protocol]
protocol.custom-message=513
protocol.custom-nodeann=39
protocol.custom-init=39

Restart LND

---

# 3️⃣ Option A — Native Clearnet

DNS:

bolt12.example.com → YOUR_PUBLIC_IP

Router:

443 → STARTOS_IP:443

StartOS:

BOLT12 Pay → Interfaces → Web UI

Set:

bolt12.example.com

Enable:

Let's Encrypt (Production)

Primary URL:

https://bolt12.example.com

---

# 4️⃣ Option B — Cloudflare Tunnel (Recommended)

## Install

https://github.com/remcoros/cloudflared-startos/releases

Version:

040.2026.3.0:2-beta.1

---

## Setup Flow

1. Open Cloudflare app in StartOS
2. Export tunnel config (QR or link)
3. Import into Cloudflare Dashboard
4. Go to Zero Trust
5. Import AGAIN under Tunnels

IMPORTANT:
This second import is required

---

## Configure Public Hostname

In StartOS:

Cloudflare Tunnel → Add Public Hostname

Example:

bolt12.example.com

---

## Configure Route (CRITICAL)

In Cloudflare Zero Trust:

bolt12.example.com → http://bolt-pay.startos:8081

Important:

- exact service name required
- must be bolt-pay.startos
- port must be correct

---

## Why Cloudflare?

- no port forwarding
- works behind CGNAT
- automatic TLS
- safer exposure

---

# 5️⃣ App Configuration

https://bolt12.example.com/admin

Set:

LNURL Base Domain: bolt12.example.com
LNURL Base URL: https://bolt12.example.com

---

# 6️⃣ Test

curl https://bolt12.example.com/.well-known/lnurlp/test

---

# 7️⃣ Troubleshooting

StartOS UI appears:
→ Primary URL not set

HTTPS fails:
→ DNS or port 443 wrong

Cloudflare not working:
→ Zero Trust route missing

BOLT12 not working:
→ LND config missing

---

# 🔥 Result

Self-hosted Lightning endpoint

- public
- sovereign
- BOLT12 + LNURL ready
- no third-party dependency required
