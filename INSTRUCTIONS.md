# BOLT12 Pay – Setup Guide (StartOS 0.4)

## 🌍 Overview

BOLT12 Pay is a fully self-hosted Lightning payment and identity server.

It supports:

- ⚡ LNURL Pay
- ⚡ BOLT12 Offers
- 🌐 Lightning Address
- 🔒 Direct clearnet exposure (no Cloudflare Tunnel required)

---

## 1️⃣ Requirements

- Public IPv4 address (no CGNAT)
- StartOS 0.4
- Domain (e.g. example.com)
- Router access (for port forwarding)

---

## 2️⃣ DNS Setup

Create an A record:

bolt12.example.com → YOUR_PUBLIC_IP

Example:

bolt12.example.com → 203.0.113.10

👉 Cloudflare users:

⚠️ MUST be "DNS only" (disable proxy / orange cloud OFF)

---

## 3️⃣ Router Port Forwarding

Forward external port 443 to your StartOS server:

443 → STARTOS_LOCAL_IP:443

Example:

443 → 192.168.1.100:443

---

## 4️⃣ App Interface Mapping (IMPORTANT)

In StartOS, open:

BOLT12 Pay → Interfaces → Web UI

Set the public domain:

bolt12.example.com

Enable:

✔ Let's Encrypt (Production)

Then set the Primary URL:

https://bolt12.example.com

👉 This is the ONLY domain configuration required.

❌ You do NOT need to expose the main StartOS UI domain.

---

## 5️⃣ App Configuration

Open:

https://bolt12.example.com/admin

Set:

LNURL Base Domain: bolt12.example.com  
LNURL Base URL: https://bolt12.example.com  

---

## 6️⃣ Test LNURL

Run:

curl https://bolt12.example.com/.well-known/lnurlp/test

Expected result:

- JSON response → OK
- "Alias not found" → also OK (means routing works)

---

## 7️⃣ Important Notes

✔ Only port 443 is required  
✔ No Cloudflare Tunnel needed  
✔ Direct clearnet exposure via StartOS  
✔ TLS handled automatically via Let's Encrypt  

---

## 8️⃣ Troubleshooting

### Domain shows StartOS UI

👉 Primary URL is not set correctly

---

### HTTPS does not work

Check:

- DNS A record correct
- Port 443 forwarded
- Let's Encrypt enabled

---

### Wrong page / old behavior

👉 Clear browser cache or use incognito mode

---

## 🔥 Result

You now run a fully sovereign Lightning endpoint:

✔ Self-hosted  
✔ No third-party dependency  
✔ Public Lightning Address  
✔ BOLT12 + LNURL ready  
