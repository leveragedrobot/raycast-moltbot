# Clawdbot for Raycast

Chat with your local [Clawdbot](https://clawd.bot) AI assistant directly from Raycast.

## Features

- **Ask Clawdbot** - Quick question and answer
- **Chat with Clawdbot** - Persistent conversations with history
- **Ask About Clipboard** - Analyze clipboard content with custom prompts
- **Process Selected Text** - Summarize, explain, translate, fix grammar, and more

## Requirements

- [Clawdbot](https://clawd.bot) installed and running locally
- Clawdbot Gateway with HTTP API enabled

## Setup

### 1. Enable the Clawdbot HTTP API

Add this to your `~/.clawdbot/clawdbot.json`:

```json
{
  "gateway": {
    "http": {
      "endpoints": {
        "chatCompletions": {
          "enabled": true
        }
      }
    }
  }
}
```

The gateway will hot-reload the config automatically.

### 2. Get Your API Token

Your gateway token is in `~/.clawdbot/clawdbot.json` under `gateway.auth.token`.

### 3. Find Your API Token

Your token is in `~/.clawdbot/clawdbot.json` under `gateway.auth.token`:

```bash
cat ~/.clawdbot/clawdbot.json | grep -A 2 '"auth"' | grep token
```

### 4. Choose Your Connection Method

When you first run a command, Raycast will prompt for your API Endpoint and Token. The endpoint depends on where Clawdbot is running relative to Raycast:

#### Option A: Same Machine (Local)

**Use when:** Raycast and Clawdbot are on the same computer.

| Setting | Value |
|---------|-------|
| API Endpoint | `http://127.0.0.1:18789` |

This is the default - no configuration changes needed on Clawdbot.

---

#### Option B: Local Network (Same WiFi/LAN)

**Use when:** Clawdbot runs on another computer on your home/office network.

| Setting | Value |
|---------|-------|
| API Endpoint | `http://<clawdbot-machine-ip>:18789` |

**Setup required on the Clawdbot machine:**

1. Find the machine's local IP:
   ```bash
   ipconfig getifaddr en0   # WiFi
   # or
   ipconfig getifaddr en1   # Ethernet
   ```

2. Edit `~/.clawdbot/clawdbot.json` and change the gateway bind setting:
   ```json
   {
     "gateway": {
       "bind": "0.0.0.0"
     }
   }
   ```

3. Restart Clawdbot gateway for changes to take effect.

4. Use the local IP as your endpoint, e.g., `http://192.168.1.50:18789`

> **Note:** This exposes the gateway to your local network. Anyone on the same network could connect (though they'd still need your token).

---

#### Option C: Remote via Tailscale (Recommended for Remote Access)

**Use when:** You want secure access from anywhere - home, office, mobile, etc.

| Setting | Value |
|---------|-------|
| API Endpoint | `https://<machine-name>.<tailnet>.ts.net` |

**Setup required on the Clawdbot machine:**

1. Install [Tailscale](https://tailscale.com) on both machines and sign in to the same account.

2. On the Clawdbot machine, set up Tailscale serve:
   ```bash
   tailscale serve --bg 18789
   ```

3. Get your serve URL:
   ```bash
   tailscale serve status
   ```
   Output: `https://machine-name.tailca3a37.ts.net`

4. Use that URL as your API Endpoint.

**Benefits:**
- Encrypted connection (HTTPS)
- Works from anywhere (coffee shop, mobile hotspot, etc.)
- Only accessible to devices on your Tailscale network
- No need to open firewall ports

---

#### Connection Method Comparison

| Method | Security | Works Remotely | Setup Complexity |
|--------|----------|----------------|------------------|
| Local | High (localhost only) | No | None |
| Local Network | Medium (LAN exposure) | No | Low |
| Tailscale | High (encrypted, private network) | Yes | Medium |

## Commands

### Ask Clawdbot
Quick Q&A - type a question, get an answer. Supports passing a question as an argument for automation.

### Chat with Clawdbot
Full conversation interface with:
- Persistent chat history
- Multiple conversations
- Streaming responses
- Newest messages shown first

### Ask About Clipboard
Reads your clipboard and lets you ask questions about it. Great for:
- Explaining code snippets
- Summarizing copied text
- Translating content

### Process Selected Text
Select text in any app, then run this command to:
- Explain
- Summarize
- Fix Grammar
- Improve Writing
- Simplify
- Expand
- Translate to English
- Explain Code
- Review Code
- Make Bullet Points

**Tip:** Assign a keyboard shortcut in Raycast preferences for quick access.

## Troubleshooting

### "API error: 405 - Method Not Allowed"
The HTTP API endpoint isn't enabled. Add the config shown in Setup step 1.

### "Failed to connect"
Make sure Clawdbot gateway is running:
```bash
clawdbot gateway status
```

### Token errors
Verify your token matches `gateway.auth.token` in your Clawdbot config.
