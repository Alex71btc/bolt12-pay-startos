# BOLT12 Pay – Setup Guide (StartOS 0.4)

## 🌍 Overview

This app allows you to run a fully self-hosted Lightning payment endpoint with:

* ⚡ LNURL Pay
* ⚡ BOLT12 Offers
* 🌐 Lightning Address
* 🔒 No Cloudflare Tunnel required

---

## 1️⃣ Requirements

* Public IPv4 (no CGNAT)
* StartOS 0.4
* Domain (e.g. alex71btc.com)
* Router access (port forwarding)

---

## 2️⃣ DNS Setup

Create an A record:

```
bolt12.example.com → YOUR_PUBLIC_IP
```

Example:

```
bolt12-040.alex71btc.com → 31.19.129.101
```

👉 Cloudflare users:

```
⚠️ MUST be "DNS only" (no proxy / orange cloud OFF)
```

---

## 3️⃣ Router Port Forwarding

Forward:

```
External Port: 443
→ StartOS Server (internal IP)
→ Port 443
```

Example:

```
443 → 192.168.188.81:443
```

---

## 4️⃣ StartOS Domain Setup

In StartOS:

```
System → Public Domain
```

Set:

```
bolt12-040.example.com
```

Enable:

```
✔ Let's Encrypt (Production)
```

---

## 5️⃣ App Interface Mapping (IMPORTANT)

In:

```
BOLT12 Pay → Interfaces → Web UI
```

Set:

```
Primary URL:
https://bolt12-040.example.com
```

👉 Without this step the domain will show the StartOS UI!

---

## 6️⃣ App Configuration

Open:

```
https://bolt12-040.example.com/admin
```

Set:

```
LNURL Base Domain: bolt12-040.example.com
LNURL Base URL: https://bolt12-040.example.com
```

---

## 7️⃣ Test LNURL

```
curl https://bolt12-040.example.com/.well-known/lnurlp/test
```

---

## 8️⃣ Important Notes

```
✔ Only port 443 is required
✔ No Cloudflare Tunnel needed
✔ Direct clearnet exposure
```

---

## 9️⃣ Troubleshooting

### Domain shows StartOS UI

👉 Primary URL not set

---

### HTTPS fails

👉 Check:

```
- DNS correct
- Port 443 open
- Let's Encrypt active
```

---

### Browser shows wrong page

👉 Clear cache or use incognito

---

## 🔥 Bonus

You now run:

```
✔ Sovereign Lightning endpoint
✔ No third-party dependency
✔ Full control over payments
```
